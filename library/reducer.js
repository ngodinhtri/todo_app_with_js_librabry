import storage from "../util/storage.js"

const init = {
    todoList: storage.get(),
    filters: {
        all: () => true,
        active: todoItem => !todoItem.isCompleted,
        completed: todoItem => todoItem.isCompleted
    },
    filterState: 'all',
    editingIndex: null
}

const actions = {
    addTodoItem({ todoList }, content) {
        if (content.trim())
        {
            todoList.push({
                content,
                isCompleted: false
            })
            storage.set(todoList)
        }
    },
    toggleTodoItem({ todoList },  index) {
        const todoItem = todoList[index]
        todoItem.isCompleted = !todoItem.isCompleted
        storage.set(todoList)
    },
    toggleAllTodoItems({todoList}, isChecked) {
        todoList.forEach(todoItem => todoItem.isCompleted = isChecked);
        storage.set(todoList)
    },
    deleteTodoItem({ todoList },  index) {
        todoList.splice(index, 1)
        storage.set(todoList)
    },
    switchFilter(state, type) {
        state.filterState = type
    },
    clearCompletedTodoItems(state) {
        const activeFilter = state.filters.active

        state.todoList = state.todoList.filter(activeFilter)
        storage.set(state.todoList)
    },
    startEditTodoItem(state, index) {
        state.editingIndex = index
    },
    endEditTodoItem(state, content) {
        if (content.trim()) {
            state.todoList [state.editingIndex].content = content
            storage.set(state.todoList)
        }
        else this.deleteTodoItem(state, state.editingIndex)
        
        state.editingIndex = null
    },
    cancelEditTodoItem(state) {
        state.editingIndex = null
    }
}

export default function reducer(state = init, action, args) {
    actions [action] && actions[action](state, ...args)
    return state
}