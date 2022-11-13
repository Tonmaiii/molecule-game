<script lang="ts">
    import NumberSelector from './NumberSelector.svelte'
    import SymbolSelector from './SymbolSelector.svelte'
</script>

<div>
    <NumberSelector />
    <SymbolSelector />
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        height: 10rem;
        background-color: #f8f8f8;
        padding: 0.5rem;
    }
</style>
