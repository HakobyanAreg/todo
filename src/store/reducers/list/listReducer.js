const initialState = {
    state: []
}

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {...state, state: action.payload}
        case 'UPDATE_ITEM':
            return {...state, state: action.payload}
        case 'DELETE_ITEM':
            return {...state, state: action.payload}
        default:
            return state
    }
}
