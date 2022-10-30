<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import elementNames from '../data/elementNames'
    import { setOptions } from '../stores/name'
    import ElementSelectorItem from './ElementSelectorItem.svelte'

    const setVariations = (variations: string[]) => {
        setOptions(variations)
    }
</script>

<div>
    {#each elementNames as { base, variations }}
        <ElementSelectorItem
            {base}
            {variations}
            on:click={({ detail }) => setVariations(detail.variations)}
        />
    {/each}
</div>

<style>
    div {
        display: flex;
        flex: 1;
    }
</style>
