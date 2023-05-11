import "./Button.scss"
import {useCallback} from "react";
import {addItemAction} from "../../store/actions/list/listAction";
import {useDispatch} from "react-redux";

export const Button = ({title, formData}) => {
    const dispatch = useDispatch()

    const addItem = useCallback(() => {
        dispatch(addItemAction(formData))
    }, [formData])

    return (
        <div className="button">
            <button onClick={addItem}>
                {title}
            </button>
        </div>
    )
}
