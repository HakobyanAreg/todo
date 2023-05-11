import {Form} from "./components/form/Form";
import {List} from "./components/list/List";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

function App() {

    const data = useSelector(state => state.listReducer)
    const [state, setState] = useState(data)

    useEffect(() => {
        setState(data.state)
    }, [data])

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
                    <List data={listItem} />
                ))
            }

        </div>
    );
}

export default App;
