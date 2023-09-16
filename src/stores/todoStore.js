import { writable } from 'svelte/store';

const TODOS_LOCAL_STORAGE_KEY = 'CACO_TODOS';

const getTodosFromLocalStorage = () => {
	if (typeof localStorage == 'undefined') return [];
	const todos = JSON.parse(localStorage.getItem(TODOS_LOCAL_STORAGE_KEY) || '[]');
	return todos;
};

const updateLocalStorageTodos = (todos) => {
	if (typeof localStorage == 'undefined') return;
	Array.isArray(todos) && localStorage.setItem(TODOS_LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

const TodoStore = writable(getTodosFromLocalStorage());

TodoStore.subscribe((updatedTodos) => {
	updateLocalStorageTodos(updatedTodos);
});

export const addTodo = (todo) => {
	TodoStore.update((curr) => {
		const newTodo = {
			todo,
			isCompleted: false,
			id: crypto.randomUUID()
		};
		return [...curr, newTodo];
	});
};

export const updateTodoStatus = (todoID) => {
	TodoStore.update((curr) => {
		return curr.map((todo) => {
			if (todo.id !== todoID) {
				return todo;
			} else {
				const updatedTodo = todo;
				updatedTodo.isCompleted = !updatedTodo.isCompleted;
				return updatedTodo;
			}
		});
	});
};

export const deleteTodo = (todoID) => {
	TodoStore.update((curr) => {
		return curr.filter((todo) => todo.id !== todoID);
	});
};

export default TodoStore;
