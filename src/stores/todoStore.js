import { writable } from 'svelte/store';

const TodoStore = writable([]);

export const addTodo = (task) => {
	TodoStore.update((curr) => {
		const newTask = {
			task,
			isCompleted: false,
			id: crypto.randomUUID()
		};
		return [...curr, newTask];
	});
};

export const updateTaskStatus = (taskID) => {
	TodoStore.update((curr) => {
		return curr.map((task) => {
			if (task.id !== taskID) {
				return task;
			} else {
				const updatedTask = task;
				updatedTask.isCompleted = !updatedTask.isCompleted;
				return updatedTask;
			}
		});
	});
};

export const deleteTask = (taskID) => {
	TodoStore.update((curr) => {
		return curr.filter((task) => task.id !== taskID);
	});
};

export default TodoStore;
