<script lang="ts">
    import {
        activeElement,
        resetOptions,
        setActiveElement,
        setOptions
    } from '../stores/name'

    export let base: string
    export let variations: string[]

    const click = () => {
        setOptions(variations)
        if ($activeElement !== base) setActiveElement(base)
        else resetOptions()
    }
</script>

<div>
    <button on:click={click} data-active={$activeElement === base}>
        {base}
    </button>
</div>

<style>
    div {
        margin: 0.5rem;
        flex: 1;
    }

    button {
        font-size: 2rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        width: 100%;
        height: 100%;
        color: black;
        border: none;
        border-radius: 1rem;
        background-color: #e8e8e8;
        touch-action: manipulation;
        padding: 0;
    }

    button:active:hover,
    button[data-active='true'] {
        background-color: #c8c8c8;
    }

    @media (hover: hover) {
        button:hover[data-active='true'] {
            background-color: #b8b8b8;
        }
        button:hover {
            background-color: #d8d8d8;
        }
    }
</style>
