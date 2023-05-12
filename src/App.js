import {Form} from "./components/form/Form";
import {List} from "./components/list/List";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteItemAction, updateItemAction} from "./store/actions/list/listAction";

function App() {

    const data = useSelector(state => state.listReducer)
    const localStorageData = JSON.parse(localStorage.getItem('todo'))
    const [state, setState] = useState(localStorageData)
    const dispatch = useDispatch()

    useEffect(() => {
        setState(localStorageData)
    }, [data.state])

    const removeItem = (id) => {
        dispatch(deleteItemAction(id))
    }

    const updateItem = (id) => {
        dispatch(updateItemAction(id))
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Todo
                </h1>
            </header>
            <Form/>
            {!!state?.length &&
            state.map(listItem => (
                    <List key={listItem.id} data={listItem} updateItem={updateItem} removeItem={removeItem} />
                ))
            }
        </div>
    );
}

export default App;
