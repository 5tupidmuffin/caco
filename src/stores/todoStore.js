import { writable } from 'svelte/store';

const TODOS_LOCAL_STORAGE_KEY = 'CACO_TODOS';

const getTasksFromLocalStorage = () => {
	if (typeof localStorage == 'undefined') return [];
	const tasks = JSON.parse(localStorage.getItem(TODOS_LOCAL_STORAGE_KEY) || '[]');
	return tasks;
};

const updateLocalStorageTasks = (tasks) => {
	if (typeof localStorage == 'undefined') return;
	Array.isArray(tasks) && localStorage.setItem(TODOS_LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};

const TodoStore = writable(getTasksFromLocalStorage());

TodoStore.subscribe((updatedTasks) => {
	updateLocalStorageTasks(updatedTasks);
});

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
