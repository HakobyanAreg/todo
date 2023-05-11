export const addItemAction = (data) => {
    return {
        type: 'ADD_ITEM',
        payload: data
    }
}

export const updateItemAction = (data) => {
    return {
        type: 'UPDATE_ITEM',
        payload: data
    }
}

export const deleteItemAction = (data) => {
    return {
        type: 'DELETE_ITEM',
        payload: data
    }
}
