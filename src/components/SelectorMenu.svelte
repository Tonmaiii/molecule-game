<script lang="ts">
    import { resetOptions } from '../stores/name'
    import { clickOutside } from '../util/clickOutside'
    import Delete from './UtilButtons.svelte'
    import ElementSelector from './ElementSelector.svelte'
    import MiscSelector from './MiscSelector.svelte'
</script>

<div use:clickOutside on:click_outside={() => resetOptions()}>
    <MiscSelector />
    <ElementSelector />
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
