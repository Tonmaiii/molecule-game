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

    let molecule = order[round]
    let answer: string
    let showAnswer = true
    $: {
        answer = $answerArray.join('')
        if (!showAnswer && answer) {
            showAnswer = true
            state = ''
        }
        if (answer === molecule.name && !revealAnswer) {
            state = 'correct'
            if (round + 2 < rounds) {
                setTimeout(() => {
                    round++
                    showAnswer = false
                    clearText()
                })
            } else {
                completed = true
                stopTimer()
            }
        }
        molecule = order[round]
    }

    let revealAnswer = false
    let skipped = 0
    const reveal = () => {
        if (revealAnswer) return

        state = 'wrong'
        showAnswer = true
        revealAnswer = true
        skipped++
        setTimeout(() => {
            round++
            showAnswer = false
            clearText()
            revealAnswer = false

            if (round + 1 > rounds) {
                completed = true
                stopTimer()
            }
        }, 1000)
    }
    $: percentage = skipped ? Math.round((1 - skipped / rounds) * 100) : 100
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
        <UtilButtons on:reveal={reveal} />
        <SelectorMenu />
        <Timer {percentage} />
    {:else}
        <h1 class="percentage" data-range={percentage}>
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
