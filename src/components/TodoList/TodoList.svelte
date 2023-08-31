<script>
	import TodoStore, { updateTaskStatus, deleteTask } from '../../stores/todoStore';
</script>

<div>
	<ul>
		{#each $TodoStore as todo (todo.id)}
			<li class={todo.isCompleted && 'taskCompleted'}>
				<div
					class={`custom-checkbox`}
					aria-checked={todo.isCompleted}
					on:click={() => updateTaskStatus(todo.id)}
					on:keypress={() => updateTaskStatus(todo.id)}
					tabindex="0"
					role="checkbox"
				>
					{#if todo.isCompleted}
						<img src="./assets/images/done_check.svg" alt="done check" />
					{/if}
				</div>
				{todo.task}
				<button type="button" on:click={() => deleteTask(todo.id)}>
					<img src="./assets/images/delete_bin.svg" alt="delete bin" /></button
				>
			</li>
		{/each}
	</ul>
</div>

<style>
	div {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	ul {
		list-style-type: none;
		width: 52%;
		border-radius: 10px;
		padding: 0;
	}
	li {
		position: relative;
		width: 100%;
		margin-bottom: 5px;
		color: #fffcf2;
		font-family: 'Work Sans';
		font-weight: 500;
		font-size: 1.3rem;
		height: 3.5rem;
		transition: 0.3s;
		display: flex;
		align-items: center;
		overflow: hidden;
		border-radius: 5px;
	}
	li:hover {
		background-color: #403d39;
	}

	.taskCompleted {
		background-color: #23ce6b;
		color: black;
	}

	.taskCompleted:hover {
		background-color: #23ce6ab7;
	}

	.custom-checkbox {
		height: 100%;
		width: 4rem;
		background-color: #403d39;
		margin-right: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: 0.3s;
	}

	.custom-checkbox img {
		height: 60%;
		width: 60%;
	}

	.custom-checkbox[aria-checked='true'] {
		background-color: #23ce6b;
	}

	button {
		position: absolute;
		right: 0;
		height: 100%;
		padding: 0 1rem;
		border: none;
		background-color: #eb5e28;
		cursor: pointer;
	}
	button:hover {
		background-color: #eb5f28cb;
	}

	@media screen and (max-width: 600px) {
		ul {
			width: 95%;
		}

		li {
			font-size: 1.1rem;
			height: 2.5rem;
		}

		.custom-checkbox {
			height: 100%;
			width: 15%;
		}

		button {
			width: 15%;
		}
	}
</style>
