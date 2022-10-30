<script lang="ts">
    import Router from 'svelte-spa-router'
    import Home from './pages/Home.svelte'
    import Name from './pages/Name.svelte'
</script>

<Router
    routes={{
        '/': Name,
        '/name': Name
    }}
/>
