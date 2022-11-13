<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    const deleteAnswer = () => {
        dispatch('delete')
    }

    const clearAnswer = () => {
        dispatch('clear')
    }

    const revealAnswer = () => {
        dispatch('reveal')
    }

    const submitAnswer = () => {
        dispatch('sumbit')
    }
</script>

<div class="container">
    <button on:click={deleteAnswer}
        ><i class="fa-solid fa-delete-left" /></button
    >
    <button on:click={submitAnswer}><i class="fas fa-check" /></button>
    <button on:click={clearAnswer}><i class="fa-solid fa-trash" /></button>
    <button on:click={revealAnswer}><i class="fa-regular fa-flag" /></button>
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
        font-size: 2rem;
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
