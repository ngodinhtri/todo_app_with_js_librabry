import html from "../library/core.js"
import { connect } from "../library/store.js"
import Header from "./Header.js"
import Footer from "./Footer.js"
import TodoList from "./TodoList.js"

const connector = connect()

function App({todoList}) {
    return html`
     <section class="todoapp">
        ${Header()}
        ${todoList.length > 0 && TodoList()}
        ${todoList.length > 0 && Footer()}
     </section>
    `
}

export default connector(App)