import "./Form.scss"
import {Button} from "../button/Button";
import {useCallback, useState} from "react";

export const Form = () => {

    const initialState = {
        title: null,
        description: null,
        deadline: null
    }

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


    return (
        <div className="form">
            <div className="inputs-wrapper">
                <div className="input-wrapper">
                    <input type="text" placeholder="Title" onChange={handleTitleChange}/>
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Description" onChange={handleDescChange}/>
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Deadline" onChange={handleDeadlineChange}/>
                </div>
            </div>
            <div className="button-wrapper">
                <Button title={"Add"} formData={state}/>
            </div>
        </div>
    )
}
