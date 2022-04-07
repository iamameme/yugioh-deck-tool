<template>
    <BDropdownItemButton
        :disabled="!essentialDataLoaded"
        @click="() => print()"
    >
        <span class="fas fa-magic fas-in-button" aria-hidden="true"></span>
        Print
    </BDropdownItemButton>
</template>

<script lang="ts">
import type { CardFilter, Deck, DeckRandomizationService, DeckService, Format } from "@/core/lib";
import { RandomizationStrategy, TYPES } from "@/core/lib";
import { applicationContainer } from "../../../inversify.config";
import { BDropdownGroup, BDropdownItemButton, BModal } from "bootstrap-vue";
import { DECK_REPLACE } from "../../../store/modules/deck";
import { computed, defineComponent, readonly, ref } from "@vue/composition-api";
import YgoFilter from "../../YgoFilter.vue";
import VSelect from "vue-select";
import { useStore } from "../../../store/store";
import { ResourceService, YGOPRODECK_TYPES } from "@/ygoprodeck/lib";
const a = require('./a')
import { jsPDF } from "jspdf";

const deckService = applicationContainer.get<DeckService>(TYPES.DeckService);
const resourceService = applicationContainer.get<ResourceService>(
	YGOPRODECK_TYPES.ResourceService
);

export default defineComponent({
	components: {
		YgoFilter,
		VSelect,
		BModal,
		BDropdownItemButton,
		BDropdownGroup,
	},
	props: {},
	emits: [],
	setup() {
		const strategies = readonly<RandomizationStrategy[]>(
			Object.values(RandomizationStrategy)
		);

		const strategy = ref<RandomizationStrategy>(
			RandomizationStrategy.ARCHETYPE_2
		);
		const filter = ref<CardFilter>({
			sets: [],
		});
        const doc = ref<any>(undefined);

		const store = useStore();
		

        

		const format = computed<Format | null>(() => store.state.format.active);

        const print = () => {
            const deck = computed<Deck>(() => store.state.deck.active);
            console.log(deck);
            const cards = deckService.getAllCards(deck.value);
            var newDoc =  new jsPDF();
            newDoc.internal.scaleFactor = 30;
            var width = newDoc.internal.pageSize.getWidth();
            var height = newDoc.internal.pageSize.getHeight();
            const imageSrcs = cards.map(card => {
                return computed<string>(
                () =>
                    card.image?.url ??
                    resourceService.getPlaceholderCardImageUrl()
                ).value;
            });
            var size = 9; var arrayOfArrays = [];
            for (var i=0; i<imageSrcs.length; i+=size) {
                arrayOfArrays.push(imageSrcs.slice(i,i+size));
            }
            const promises = arrayOfArrays.map((x: any) => {
                return a.mergeImages(x, { crossOrigin: "anonymous", width, height });
            });

            Promise.all(promises).then(b64s => {
                b64s.forEach(b64 => {
                    newDoc.addImage(b64, "PNG", 0,0, width, height);
                    newDoc.addPage();
                });
                newDoc.save(deck.value.name + '.pdf')
            });
        };

		const essentialDataLoaded = computed<boolean>(
			() => store.state.data.essentialDataLoaded
		);

		return {
			strategy,
			strategies,
			filter,

			essentialDataLoaded,

			print,
		};
	},
});
</script>

<style lang="scss">
@import "../../../../browser-common/styles/variables";

.deck-tool__portal {
	.randomizer__btn-group {
		justify-content: space-between;
	}
}
</style>
