import "./Form.scss"
import {Button} from "../button/Button";
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {addItemAction} from "../../store/actions/list/listAction";

export const Form = () => {

    const initialState = {
        title: '',
        description: '',
        deadline: ''
    }
    const dispatch = useDispatch()

    const [state, setState] = useState(initialState)

    const handleTitleChange = useCallback((e) => {
        setState({...state, title: e.target.value})
    }, [state])

    const handleDescChange = useCallback((e) => {
        setState({...state, description: e.target.value})
    }, [state])

    const handleDeadlineChange = useCallback((e) => {
        setState({...state, deadline: e.target.value})
    }, [state])


    const addItem = useCallback(() => {
        dispatch(addItemAction(state))
        setState(initialState)
    }, [state])

    return (
        <div className="form">
            <div className="inputs-wrapper">
                <div className="input-wrapper">
                    <input type="text" placeholder="Title" value={state.title} onChange={handleTitleChange}/>
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Description" value={state.description} onChange={handleDescChange}/>
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Deadline" value={state.deadline} onChange={handleDeadlineChange}/>
                </div>
            </div>
            <div className="button-wrapper">
                <Button title={"Add"} addItem={addItem}/>
            </div>
        </div>
    )
}
