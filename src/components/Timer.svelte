<script lang="ts">
    import { onMount } from 'svelte'
    import { resetTimer, timer, timerText } from '../stores/timer'

    export let percentage = 100

    onMount(() => {
        resetTimer()
    })
</script>

<div>
    <span class="timer">{timerText($timer)}</span>
    <span class="percentage" data-range={Math.floor(percentage / 10)}
        >{Math.round(percentage)}%</span
    >
</div>

<style>
    div {
        position: absolute;
        right: 0;
    }

    span {
        margin: 1rem;
        font-size: 2rem;
        display: inline-block;
        text-align: right;
    }

    .timer {
        width: 2.6rem;
    }

    .percentage {
        width: 5rem;
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
