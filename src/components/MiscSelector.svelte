<script lang="ts">
    import { addText, options, resetOptions } from '../stores/name'

    const click = (text: string) => {
        addText(text)
        resetOptions()
    }
</script>

<div>
    {#each $options as option}
        <button on:click={() => click(option)}>
            {option}
        </button>
    {/each}
</div>

<style>
    div {
        display: flex;
        flex: 1;
    }

    button {
        font-size: 1.5rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        flex: 1;
        margin: 0.5rem;
        color: black;
        border: none;
        border-radius: 1rem;
        padding: 0;
        background-color: #e8e8e8;
        touch-action: manipulation;
    }

    button:active:hover {
        background-color: #c8c8c8;
    }

    @media (hover: hover) {
        button:hover {
            background-color: #d8d8d8;
        }
    }
</style>
