<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { clearText, deleteText } from '../stores/name'

    const dispatch = createEventDispatcher()

    const revealAnswer = () => {
        dispatch('reveal')
    }

    const submitAnswer = () => {
        dispatch('sumbit')
    }
</script>

<div class="container">
    <button on:click={deleteText}>delete</button>
    <button on:click={clearText}>clear</button>
    <button on:click={submitAnswer}>sumbit</button>
    <button on:click={revealAnswer}>reveal</button>
</div>

<style>
    div {
        display: flex;
        height: 4rem;
        flex-direction: row-reverse;
        margin-bottom: 0.5rem;
        padding: 0.5rem;
    }

    button {
        font-size: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        aspect-ratio: 1;
        height: 100%;
        color: black;
        border: none;
        border-radius: 1rem;
        background-color: #e8e8e8;
        touch-action: manipulation;
        padding: 0;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
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
