import "./Button.scss"
import {useCallback} from "react";
import {addItemAction} from "../../store/actions/list/listAction";
import {useDispatch} from "react-redux";

export const Button = ({title, addItem}) => {


    return (
        <div className="button">
            <button onClick={addItem}>
                {title}
            </button>
        </div>
    )
}
