export const addItemAction = (data) => {
    const list = JSON.parse(localStorage.getItem('todo'))
    if (!list) {
        data.id = new Date().getUTCMilliseconds()
        localStorage.setItem('todo', JSON.stringify([data]))
    } else {
        data.id = new Date().getUTCMilliseconds()
        list.push(data)
        localStorage.setItem('todo', JSON.stringify(list))
    }

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

export const deleteItemAction = (id) => {
    const list = JSON.parse(localStorage.getItem('todo')).filter(item => item.id !== id)
    localStorage.setItem('todo', JSON.stringify(list))
    return {
        type: 'DELETE_ITEM',
        payload: list
    }
}
