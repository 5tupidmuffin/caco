<script>
	import { addTodo } from '../../stores/todoStore';

	let todo = '';
	const onSubmitHandler = () => {
		addTodo(todo);
		todo = '';
	};
</script>

<form on:submit|preventDefault={onSubmitHandler} action="#">
	<h2>Caco</h2>
	<input type="text" bind:value={todo} placeholder="your todo..." required /><br />
	<button>+</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	h2 {
		margin: 0;
		padding: 0;
		color: #fffcf2;
		font-family: 'Work Sans';
		font-size: 2rem;
		padding: 1rem;
		font-weight: 600;
	}
	input[type='text'] {
		width: 50%;
		font-family: 'Work Sans';
		background-color: #403d39;
		color: #fffcf2;
		font-size: 1.5rem;
		padding: 0.7rem;
		border: none;
		border-radius: 5px;
		margin-bottom: 5px;
	}
	input[type='text']:focus {
		outline: none;
	}

	button {
		width: 52%;
		border: none;
		padding: 0.2rem 0.5rem;
		background-color: #23ce6b;
		border-radius: 5px;
		font-size: 2rem;
	}

	button:hover {
		background-color: #23ce6a75;
	}

	@media screen and (max-width: 600px) {
		input[type='text'] {
			width: 90%;
			font-size: 1rem;
		}

		button {
			width: 96%;
		}
	}
</style>
