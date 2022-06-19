export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.dir("PrevState:", prevState)
        console.log("Arguments:", args)

        const nextState = reducer(prevState, action, args)

        console.dir("NextState:", nextState)
        console.groupEnd()
        return nextState
    }
}