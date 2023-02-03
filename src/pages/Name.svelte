<script lang="ts">
    import ScoreSubmit from '../components/ScoreSubmit.svelte'

    import { fade } from 'svelte/transition'
    import { answerArray, clearText, deleteText } from '../stores/name'

    import BackButton from '../components/BackButton.svelte'
    import Formula from '../components/Formula.svelte'
    import SelectorMenu from '../components/NameSelectorMenu.svelte'
    import Timer from '../components/Timer.svelte'
    import UtilButtons from '../components/UtilButtons.svelte'
    import molecules from '../data/molecules'
    import { stopTimer, timer, timerMS, timerText } from '../stores/timer'
    import shuffle from '../util/shuffle'

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
            showAnswer = true
            state = ''
        }
    }

    const submit = () => {
        if (revealAnswer) return
        if (answer === molecule.name) {
            state = 'correct'
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

{#if !completed}
    <BackButton />
    <div class="container">
        <h1 class="text">
            <Formula
                formula={molecule.formula}
                oxidation={molecule.oxidation}
            />
        </h1>
        <div class="text">
            {#if showAnswer}
                <h2 out:fade|local data-state={state}>
                    {revealAnswer ? molecule.name : answer}
                </h2>
            {/if}
        </div>
        <UtilButtons
            on:delete={deleteText}
            on:clear={clearText}
            on:reveal={reveal}
            on:sumbit={submit}
        />
        <SelectorMenu />
        <Timer {percentage} total={rounds} completed={round} />
    </div>
{:else}
    <div class="result">
        <h1 class="percentage" data-range={Math.floor(percentage / 10)}>
            {percentage}%
        </h1>
        <h1>{timerText($timer)}</h1>
        <ScoreSubmit gamemode="name" time={$timerMS} {percentage} />
    </div>
{/if}

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

    .result {
        text-align: center;
        font-size: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
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
