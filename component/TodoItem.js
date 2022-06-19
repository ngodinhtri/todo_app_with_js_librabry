import html from "../library/core.js"
import { connect } from "../library/store.js"

const connector = connect()

function TodoList({ todo, index, editingIndex }) {
    return html`
        <li class="${todo.isCompleted && 'completed'}
                    ${index === editingIndex && 'editing'}">
            <div class="view">
                <input
                    class="toggle"
                    type="checkbox"
                    ${todo.isCompleted && 'checked'}
                    onchange="dispatch('toggleTodoItem',${index})"
                >
                <label
                    ondblclick="dispatch('startEditTodoItem',${index})"
                >${todo.content}</label>
                <button
                    class="destroy"
                    onclick="dispatch('deleteTodoItem',${index})"
                >
                </button>
            </div>
            <input 
                class="edit"
                value="${todo.content}"
                onkeydown="event.keyCode === 13 && dispatch('endEditTodoItem',this.value) 
                            || event.keyCode === 27 && dispatch('cancelEditTodoItem')"
                onblur="dispatch('endEditTodoItem',this.value)"
            >
        </li>
    `
}

export default connector(TodoList)