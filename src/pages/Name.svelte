<script lang="ts">
    import { fade } from 'svelte/transition'
    import { answerArray, clearText } from '../stores/name'

    import Formula from '../components/Formula.svelte'
    import molecules from '../data/molecules'
    import shuffle from '../util/shuffle'
    import SelectorMenu from '../components/SelectorMenu.svelte'
    import UtilButtons from '../components/UtilButtons.svelte'
    import Timer from '../components/Timer.svelte'
    import { stopTimer, timer, timerText } from '../stores/timer'

    const order = shuffle(molecules)

    let round = 0
    const rounds = molecules.length
    let state = ''
    let completed = false

    let answer: string
    let showAnswer = true

    const percentages = Array(rounds).fill(100)

    $: if (round + 1 > rounds) {
        completed = true
        stopTimer()
    }

    $: {
        answer = $answerArray.join('')
        if (answer) {
            correct = false
            showAnswer = true
            state = ''
        }
    }

    let correct = false

    const submit = () => {
        if (revealAnswer) return
        if (answer === molecule.name) {
            state = 'correct'
            correct = true
            setTimeout(() => {
                state = 'correct'
                round++
                wrong = 0
                showAnswer = false
                clearText()
            })
        } else {
            state = 'wrong'
            wrong++
            percentages[round] = 50 / wrong
        }
    }

    let revealAnswer = false
    let wrong = 0
    const reveal = () => {
        if (revealAnswer) return

        state = 'wrong'
        percentages[round] = 0
        showAnswer = true
        revealAnswer = true
        setTimeout(() => {
            round++
            wrong = 0
            showAnswer = false
            revealAnswer = false
            clearText()
        }, 1000)
    }
    $: percentage = Math.round(percentages.reduce((a, b) => a + b) / rounds)
    $: molecule = order[round]
</script>

<div class="container">
    {#if !completed}
        <Formula formula={molecule.formula} oxidation={molecule.oxidation} />
        <div class="text">
            {#if showAnswer}
                <h2 out:fade|local data-state={state}>
                    {revealAnswer ? molecule.name : answer}
                </h2>
            {/if}
        </div>
        <UtilButtons on:reveal={reveal} on:sumbit={submit} />
        <SelectorMenu />
        <Timer {percentage} />
    {:else}
        <h1 class="percentage" data-range={Math.round(percentage / 10)}>
            {percentage}%
        </h1>
        <br />
        <h1>{timerText($timer)}</h1>
    {/if}
</div>

<style>
    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
    }

    h1 {
        font-size: 8rem;
        text-align: center;
        margin: 0;
    }

    h2 {
        font-size: 4rem;
        text-align: center;
        margin: 0;
    }

    h2[data-state='correct'] {
        color: #0ab10a;
    }

    h2[data-state='wrong'] {
        color: #e01212;
    }

    .container {
        height: 100%;
        display: flex;
        align-items: stretch;
        flex-direction: column;
    }
    .percentage[data-range='10'] {
        color: #08df08;
    }

    .percentage[data-range='9'],
    .percentage[data-range='8'] {
        color: #e6b01c;
    }

    .percentage[data-range='7'],
    .percentage[data-range='6'],
    .percentage[data-range='5'] {
        color: #e27900;
    }

    .percentage[data-range='4'],
    .percentage[data-range='3'],
    .percentage[data-range='2'] {
        color: #f74600;
    }

    .percentage[data-range='1'],
    .percentage[data-range='0'] {
        color: #d30b0b;
    }
</style>
