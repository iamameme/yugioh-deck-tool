import type { EnvironmentConfig } from "@/core/lib";
import { Environment, getLogger, TYPES } from "@/core/lib";
import type { YgoprodeckService } from "@/ygoprodeck/lib";
import { YGOPRODECK_TYPES } from "@/ygoprodeck/lib";
import type { Instance } from "tippy.js";
import { delegate } from "tippy.js";
import type { TooltipInstance } from "../api";
import type { TooltipController } from "../controller/TooltipController";
import { tooltipContainer } from "../inversify.config";

import { TOOLTIP_TYPES } from "../types";
import { bindReferenceLink } from "./bindReferenceLink";
import {
	createErrorTooltip,
	createLoadingTooltip,
	createTooltipElement,
} from "./createTooltipElement";

const tooltipController = tooltipContainer.get<TooltipController>(
	TOOLTIP_TYPES.TooltipController
);
const environmentConfig = tooltipContainer.get<EnvironmentConfig>(
	TYPES.EnvironmentConfig
);
const ygoprodeckService = tooltipContainer.get<YgoprodeckService>(
	YGOPRODECK_TYPES.YgoprodeckService
);

const logger = getLogger("bindTooltip");

const showTooltip = (
	instance: Instance,
	target: HTMLElement | HTMLAnchorElement,
	cardKey: string
): void => {
	logger.trace(`Attempting to show tooltip for '${cardKey}'.`);
	tooltipController
		.loadCard(cardKey)
		.then((card) => {
			logger.trace("Loaded card.", card);
			instance.setContent(createTooltipElement(card));

			if (target instanceof HTMLAnchorElement) {
				bindReferenceLink(target, card);
			}

			if (environmentConfig.getEnvironment() == Environment.YGOPRODECK) {
				// Start request, but do not wait for it to finish.
				ygoprodeckService
					.increaseCardViewCount(card)
					.then(() => logger.trace("Updated view count."))
					.catch((err) =>
						logger.warn("Could not update view count.", err)
					);
			}
		})
		.catch((err) => {
			instance.setContent(
				createErrorTooltip("Error while loading card.")
			);
			logger.error("Error while loading card.", err);
		});
};

export const bindTooltipHandlers = (context: HTMLElement): TooltipInstance => {
	const delegateInstance = delegate(context, {
		target: "[data-name]",
		delay: [500, 0],
		placement: "auto",
		maxWidth: "none",
		// eslint-disable-next-line @typescript-eslint/naming-convention
		allowHTML: true,
		content: () => createLoadingTooltip(),
		onShow: (instance) => {
			const target = instance.reference as HTMLElement;
			const cardKey = target.dataset["name"]!;
			showTooltip(instance, target, cardKey);
		},
	});

	/*
	 * We use some custom logic for enable/disable to allow a short time to pass before enabling the tooltip.
	 * This is required to allow other code to finish updating the DOM before we show the next tooltip.
	 */
	let cancelPendingEnable = false;
	return {
		disable() {
			delegateInstance.disable();
			cancelPendingEnable = true;
		},
		enable: () => {
			cancelPendingEnable = false;
			setTimeout(() => {
				if (!cancelPendingEnable) {
					delegateInstance.enable();
				}
			}, 100);
		},
	};
};
