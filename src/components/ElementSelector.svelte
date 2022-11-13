<script lang="ts">
    import elementNames from '../data/elementNames'
    import ElementSelectorItem from './ElementSelectorItem.svelte'
</script>

<div>
    {#each elementNames as { base, variations }}
        <ElementSelectorItem {base} {variations} />
    {/each}
</div>

<style>
    div {
        display: flex;
        flex: 1;
    }
</style>
