import html from "../library/core.js"
import { connect } from "../library/store.js"

const connector = connect()

function Header() {
    return html`
    <header class="header">
        <h1>todos</h1>
        <input 
            class="new-todo" 
            placeholder="What needs to be done?" 
            autofocus
            onkeypress="event.keyCode === 13 && dispatch('addTodoItem',this.value)"
        >
    </header>
    `
}

export default connector(Header)