<script lang="ts">
    import elementSymbols from '../data/elementSymbols'
    import { addAnswer } from '../stores/formula'
</script>

<div class="container">
    {#each elementSymbols as symbol}
        <div class="item">
            <button on:click={() => addAnswer(symbol)}>
                {symbol}
            </button>
        </div>
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex: 1;
    }

    .item {
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

    button:active:hover {
        background-color: #c8c8c8;
    }

    @media (hover: hover) {
        button:hover {
            background-color: #d8d8d8;
        }
    }
</style>
