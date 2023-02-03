<main>
    <h1>Acid & Ion Game</h1>
    <div>
        <a href="/#/name">sulfuric acid</a>
        <a href="/#/formula">H₂SO₄</a>
        <a href="/#/leaderboard" class="leaderboard"
            ><i class="fas fa-ranking-star" /></a
        >
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 4rem;
    }

    div {
        display: flex;
        width: 80%;
    }

    a {
        display: flex;
        text-decoration: none;
        color: #c0c0c0;
        aspect-ratio: 1/1;
        flex: 1;
        margin: 1rem;
        background-color: #e8e8e8;
        font-size: 5rem;
        text-align: center;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
    }

    .leaderboard {
        font-size: 8rem;
    }

    a:active:hover {
        background-color: #c8c8c8;
    }

    @media (hover: hover) {
        a:hover {
            background-color: #d8d8d8;
        }
    }
</style>
