import "./List.scss"

export const List = ({data, updateItem, removeItem}) => {
    return (
        <div className="list">
            <div className="">
                <input type="checkbox"/>
            </div>
            <div className="">
                {data.title}
            </div>
            <div className="">
                {data.description}
            </div>
            <div className="">
                {data.deadline}
            </div>
            <div className="">
                <button onClick={(e) => updateItem(data.id)}>
                    Edit
                </button>
            </div>
            <div className="">
                <button onClick={(e) => removeItem(data.id)}>
                    X
                </button>
            </div>
        </div>
    )
}
