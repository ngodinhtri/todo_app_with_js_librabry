const TODO_STORAGE_KEY = 'todo-list'

export default {
    get() {
        return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || []
    },
    set(todoList) {
        localStorage.setItem(TODO_STORAGE_KEY,JSON.stringify(todoList))
    }
}