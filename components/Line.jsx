import MiniSquare from "./MiniSquare";

export default function Line(props) {
    return (
        <div className="line">
            <MiniSquare blackSquare={props.blackStart} />
            <MiniSquare blackSquare={!props.blackStart} />
            <MiniSquare blackSquare={props.blackStart} />
            <MiniSquare blackSquare={!props.blackStart} />
            <MiniSquare blackSquare={props.blackStart} />
            <MiniSquare blackSquare={!props.blackStart} />
            <MiniSquare blackSquare={props.blackStart} />
            <MiniSquare blackSquare={!props.blackStart} />
        </div>
    )
}