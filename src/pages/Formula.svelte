<script lang="ts">
    import { fade } from 'svelte/transition'
    import {
        answerArray,
        clearAnswer,
        deleteAnswer,
        oxidation,
        setOxidation
    } from '../stores/formula'

    import molecules from '../data/molecules'
    import shuffle from '../util/shuffle'
    import SelectorMenu from '../components/FormulaSelectorMenu.svelte'
    import UtilButtons from '../components/UtilButtons.svelte'
    import Timer from '../components/Timer.svelte'
    import { stopTimer, timer, timerText } from '../stores/timer'
    import Formula from '../components/Formula.svelte'

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
        if (answer || $oxidation) {
            showAnswer = true
            state = ''
        }
    }

    const submit = () => {
        if (revealAnswer) return
        if (answer === molecule.formula && $oxidation === molecule.oxidation) {
            state = 'correct'
            setTimeout(() => {
                state = 'correct'
                round++
                wrong = 0
                showAnswer = false
                clearAnswer()
                setOxidation(0)
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
            clearAnswer()
            setOxidation(0)
        }, 1000)
    }
    $: percentage = Math.round(percentages.reduce((a, b) => a + b) / rounds)
    $: molecule = order[round]
</script>

<div class="container">
    {#if !completed}
        <h2 class="text">{molecule.name}</h2>
        <div class="text">
            {#if showAnswer}
                <h1 out:fade|local data-state={state}>
                    <Formula
                        formula={revealAnswer ? molecule.formula : answer}
                        oxidation={revealAnswer
                            ? molecule.oxidation
                            : $oxidation}
                    />
                </h1>
            {/if}
        </div>
        <UtilButtons
            on:delete={deleteAnswer}
            on:clear={clearAnswer}
            on:reveal={reveal}
            on:sumbit={submit}
        />
        <SelectorMenu />
        <Timer {percentage} />
    {:else}
        <h1 class="percentage" data-range={Math.floor(percentage / 10)}>
            {percentage}%
        </h1>
        <br />
        <h1>{timerText($timer)}</h1>
        <h2>Formula</h2>
    {/if}
</div>

<style>
    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
    }

    h2 {
        font-size: 4rem;
        text-align: center;
        margin: 0;
    }

    h1 {
        font-size: 8rem;
        text-align: center;
        margin: 0;
    }

    h1[data-state='correct'] {
        color: #0ab10a;
    }

    h1[data-state='wrong'] {
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
