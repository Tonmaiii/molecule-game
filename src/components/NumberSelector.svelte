<script lang="ts">
    import { addAnswer, setOxidation } from '../stores/formula'
</script>

<div class="container">
    {#each [2, 3, 4] as option}
        <button on:click={() => addAnswer(`${option}`)}>{option}</button>
    {/each}
    <div class="pad" />
    <button on:click={() => setOxidation(-4)}>4-</button>
    <button on:click={() => setOxidation(-3)}>3-</button>
    <button on:click={() => setOxidation(-2)}>2-</button>
    <button on:click={() => setOxidation(-1)}>-</button>
    <button on:click={() => setOxidation(0)}>0</button>
    <button on:click={() => setOxidation(1)}>+</button>
</div>

<style>
    .container {
        display: flex;
        flex: 1;
    }

    .pad {
        margin: 0.5rem;
    }

    button {
        font-size: 2rem;
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
