import html from "../library/core.js"
import { connect } from "../library/store.js"
import TodoItem from "./TodoItem.js"

const connector = connect()

function TodoList({ todoList, filters,filterState }) {
    return html`
    <section class="main">
        <input 
            id="toggle-all" 
            class="toggle-all" 
            type="checkbox"
            onclick="dispatch('toggleAllTodoItems',this.checked)"
            ${todoList.every(filters.completed) && 'checked'}
        >
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            ${todoList
            .filter(filters[filterState])
            .map((todo, index) => TodoItem({ todo, index }))}
        </ul>
    </section>
    `
}

export default connector(TodoList)