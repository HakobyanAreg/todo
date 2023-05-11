import "./List.scss"

export const List = ({data}) => {
    return (
        <div className="list">
            <div className="">
                "{data.title}"
            </div>
            <div className="">
                "{data.description}"
            </div>
            <div className="">
                "{data.deadline}"
            </div>
        </div>
    )
}
