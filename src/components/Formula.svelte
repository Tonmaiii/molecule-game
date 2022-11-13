<script lang="ts">
    import Supsub from './Supsub.svelte'

    export let formula: string
    export let oxidation: number

    $: oxidationText = setOxidationText(oxidation)
    const setOxidationText = (oxidation: number) => {
        if (oxidation === 1) return '+'
        if (oxidation === -1) return '-'
        if (oxidation > 0) return `${oxidation}+`
        if (oxidation < 0) return `${-oxidation}-`
        return ''
    }
</script>

<div>
    {#each formula as c, i}
        {#if i === formula.length - 1 && oxidationText}
            {#if c.match(/\d/)}
                <Supsub sup={oxidationText} sub={c} />
            {:else}
                {c}
                <Supsub sup={oxidationText} />
            {/if}
        {:else if c.match(/\d/)}
            <Supsub sub={c} />
        {:else}
            {c}
        {/if}
    {:else}
        <Supsub sup={oxidationText} />
    {/each}
</div>

<style>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
