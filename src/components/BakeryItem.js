// TODO: create a component that displays a single bakery item
export const BakeryItem = (props) => {
    return (
        <div className="BakeryItem">
            <img src={props.item.image} alt={props.item.name} loading="lazy"/>
            <div className="BakeryItemContent">
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
                <h3>{props.item.price}</h3>
                <button className="button" onClick={() => props.addToCart(props.item)}>Add to Cart</button>
            </div>
        </div>
    )
}