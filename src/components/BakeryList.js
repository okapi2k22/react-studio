import { BakeryItem } from "./BakeryItem";

export const BakeryList = (props) => {
    return (
        <main className="BakeryListContainer">
            <h1>Nico's Bakery</h1>

            <div className="BakeryList">
                {props.data.map((item, index) => (
                <BakeryItem key={index} item={item} addToCart={props.onAddToCart} />
                ))}
            </div>
        </main>
    )
}