<script lang="ts">
    import { ref, onValue, orderByKey } from 'firebase/database'
    import { db } from '../firebase'
    import { timerText } from '../stores/timer'

    const nameRef = ref(db, 'name')
    const formulaRef = ref(db, 'formula')

    let nameBoard: { time: number; percentage: number; name: string }[] = []
    let formulaBoard: { time: number; percentage: number; name: string }[] = []

    onValue(nameRef, snapshot => {
        nameBoard = []
        snapshot.forEach(score => {
            nameBoard.push(score.val())
        })
        nameBoard = nameBoard.sort(
            (a, b) => b.percentage - a.percentage || a.time - b.time
        )
    })

    let gamemode: string = 'name'
</script>

<main>
    <h1>Leaderboard</h1>

    <div class="tabs">
        <button on:click={() => (gamemode = 'name')}>Name</button>
        <button on:click={() => (gamemode = 'formula')}>Formula</button>
    </div>
    <hr />
    <div class="leaderboard">
        {#each gamemode === 'name' ? nameBoard : formulaBoard as { time, percentage, name }, i}
            <div>{i + 1}</div>
            <div>{name}</div>
            <div>{timerText(Math.floor(time / 1000))}</div>
            <div>{percentage}%</div>
        {/each}
    </div>
</main>

<style>
    h1 {
        font-size: 4rem;
    }

    main {
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    button {
        font-size: 1rem;
    }

    .tabs {
        margin-bottom: 2rem;
    }

    hr {
        width: 100%;
        border: 1px solid black;
    }

    .leaderboard {
        display: grid;
        grid-template-columns: repeat(4, 5rem);
        margin-top: 2rem;
        justify-content: center;
        column-gap: 4rem;
        row-gap: 0.5rem;
        font-size: 2rem;
    }
</style>
