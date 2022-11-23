<script lang="ts">
    import { ref, push, set } from 'firebase/database'
    import { db } from '../firebase'

    export let gamemode: string
    const scoreList = ref(db, gamemode)

    export let time: number
    export let percentage: number

    let name: string

    let submitted = false

    const submit = () => {
        if (!name || submitted) return
        const newScore = push(scoreList)
        set(newScore, { time, percentage, name })
        submitted = true
        location.hash = `#/leaderboard/${gamemode}`
    }
</script>

<input type="text" placeholder="Name" bind:value={name} />
<button on:click={submit} disabled={submitted}>Submit Score</button>

<style>
    input {
        font-size: inherit;
        text-align: center;
        border: none;
        margin: 0.5rem;
        margin-top: 2rem;
        align-self: stretch;
    }

    input:focus {
        outline: none;
    }

    button {
        font-size: inherit;
        border: none;
        border-radius: 1rem;
        padding: 1rem;
        margin: 0.5rem;
    }
</style>
