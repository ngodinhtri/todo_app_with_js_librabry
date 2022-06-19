import html from "../library/core.js"
import { connect } from "../library/store.js"

const connector = connect()

function Footer({todoList,filters,filterState}) {
    return html`
     <footer class="footer">
        <span class="todo-count"><strong>${todoList.filter(filters.active).length}</strong> item left</span>
        <ul class="filters">
            ${Object.keys(filters).map(type => html`
                <li>
                    <a
                    class="${type === filterState && 'selected'}"
                    href="#"
                    style="text-transform:capitalize"
                    onclick="dispatch('switchFilter','${type}')"
                >${type}</a>
                </li>
            `)}
        </ul>
        <button 
            class="clear-completed" 
            ${!todoList.some(filters.completed) && 'hidden'}
            onclick="dispatch('clearCompletedTodoItems')"
        >Clear completed</button>
    </footer>
    `
}

export default connector(Footer)