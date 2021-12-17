const INITIAL_STATE = {
    todosList: [],
}
function Reducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case "SAVEDATA":
            return ({
                ...state,
                // todosList:[...state.todosList,action.data]
                todosList:action.data,

            })
        default:
            return state
    }
}


export default Reducer

 