import {CART_ADD_ITEM} from '../constants/cartConstants';
import Axios from 'axios';


const addToCart = (ProductId, qty) => async (dispatch) => {
    try {
        const { data } = await Axios.get("/api/products/" + ProductId)
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        });

    } catch (error) {

    }
}

export{addToCart}