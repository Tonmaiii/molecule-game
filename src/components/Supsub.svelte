<script lang="ts">
    export let sup = ''
    export let sub = ''
</script>

<span>
    <h1 class="sup">{sup}</h1>
    <h1 class="sub">{sub}</h1>
</span>

<style>
    span {
        display: inline-flex;
        flex-direction: column;
        margin-bottom: -0.4em;
        line-height: 1em;
        font-size: 4rem;
        text-align: left;
    }

    .sub,
    .sup {
        height: 6rem;
        margin: 0;
        font-size: inherit;
        vertical-align: baseline;
    }
</style>
