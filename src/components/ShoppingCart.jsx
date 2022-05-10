import { useDispatch, useSelector } from "react-redux";
import { actions } from "../features/shoppingCart";

const ShoppingCart = () => {
const items = useSelector( state => state.shoppingCart);
const dispatch = useDispatch()

const addToCart = () => dispatch(actions.addToCart());

return(
    <button>Add to fgffgdfdfg cart</button>
)

}

export default ShoppingCart;