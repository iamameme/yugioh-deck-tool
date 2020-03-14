import { inject, injectable } from "inversify";
import { Card } from "../model/ygo/Card";
import { CardSet } from "../model/ygo/CardSet";
import { Format } from "../model/ygo/Format";
import { CardType } from "../model/ygo/CardType";
import { intersection, isEmpty } from "lodash";
import { BanState } from "../model/ygo/BanState";
import { CardService } from "./CardService";
import { TYPES } from "../../types";

interface CardFilter {
    name: string | null;
    type: CardType | null;

    attribute: string | null;
    race: string | null;
    level: number | null;
    linkMarker: string | null;

    sets: CardSet[];
    format: Format | null;
    banState: BanState | null;
}

@injectable()
class FilterService {
    private readonly cardService: CardService;

    constructor(@inject(TYPES.CardService) cardService: CardService) {
        this.cardService = cardService;
    }

    public filter(cards: Card[], filter: CardFilter): Card[] {
        return cards.filter(card => {
            if (
                filter.name != null &&
                !card.name.toLowerCase().includes(filter.name.toLowerCase())
            ) {
                return false;
            }

            if (filter.type != null && card.type != filter.type) {
                return false;
            }
            if (filter.race != null && card.race != filter.race) {
                return false;
            }
            if (filter.level != null && card.level != filter.level) {
                return false;
            }
            if (
                filter.attribute != null &&
                card.attribute != filter.attribute
            ) {
                return false;
            }
            if (
                filter.linkMarker != null &&
                (card.linkMarkers == null ||
                    !card.linkMarkers.includes(filter.linkMarker))
            ) {
                return false;
            }

            if (
                filter.format != null &&
                !card.formats.includes(filter.format)
            ) {
                return false;
            }
            if (
                filter.banState != null &&
                filter.format != null &&
                this.cardService.getBanStateByFormat(card, filter.format) !==
                    filter.banState
            ) {
                return false;
            }
            if (
                filter.sets.length > 0 &&
                isEmpty(intersection(card.sets, filter.sets))
            ) {
                return false;
            }

            return true;
        });
    }
}

export { FilterService, CardFilter };