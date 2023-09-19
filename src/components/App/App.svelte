<script>
	import TodoForm from '../TodoForm/TodoForm.svelte';
	import TodoList from '../TodoList/TodoList.svelte';
	import GithubCorner from '../GithubCorner.svelte';
</script>

<svelte:head>
	<title>Caco - TodoList</title>
</svelte:head>
<main class="main-container">
	<TodoForm />
	<TodoList />
	<GithubCorner />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400&family=Work+Sans:wght@200;400;500&display=swap');
	.main-container {
		height: 100%;
		width: 100%;
	}
</style>
