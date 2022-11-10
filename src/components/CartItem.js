export const CartItem = (props) => {
    return (
        <div>{props.quantity}x {props.item.name}</div>
    )
}