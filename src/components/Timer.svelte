<script lang="ts">
    import { onMount } from 'svelte'
    import { resetTimer, timer, timerText } from '../stores/timer'

    export let percentage = 100
    export let completed: number
    export let total: number

    onMount(() => {
        resetTimer()
    })
</script>

<div>
    <span class="timer">{timerText($timer)}</span>
    <span class="percentage" data-range={Math.floor(percentage / 10)}
        >{Math.round(percentage)}%</span
    >
    <span class="counter">{completed}/{total}</span>
</div>

<style>
    div {
        position: absolute;
        right: 0;
        display: flex;
    }

    span {
        margin: 1rem;
        margin-left: 0.25rem;
        font-size: 2rem;
        display: flex;
    }

    .timer {
        position: absolute;
        text-align: right;
        right: 11rem;
    }

    .percentage {
        position: absolute;
        right: 5.2rem;
        text-align: right;
    }

    .counter {
        position: absolute;
        right: 0rem;
        text-align: right;
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
