<script lang="ts">
    import Router from 'svelte-spa-router'
    import Formula from './pages/Formula.svelte'
    import Home from './pages/Home.svelte'
    import Leaderboard from './pages/Leaderboard.svelte'
    import Name from './pages/Name.svelte'
</script>

<Router
    routes={{
        '/': Home,
        '/name': Name,
        '/formula': Formula,
        '/leaderboard': Leaderboard
    }}
/>
