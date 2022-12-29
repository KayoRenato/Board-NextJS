export default function MiniSquare(props) {
    const classSquare = props.blackSquare ? 'blackSquare' : 'whiteSquare';

    return (
        <div className={classSquare}>
        </div>
    );
}