<script lang="ts">
    export let sup = ''
    export let sub = ''
</script>

<span>
    <div class="sup">{sup}</div>
    <div class="sub">{sub}</div>
</span>

<style>
    span {
        display: inline-flex;
        flex-direction: column;
        margin-bottom: -0.4em;
        line-height: 1em;
        font-size: 50%;
        text-align: left;
    }

    .sub,
    .sup {
        height: 1.5em;
        margin: 0;
        font-size: inherit;
        text-decoration: inherit;
        vertical-align: baseline;
    }
</style>
