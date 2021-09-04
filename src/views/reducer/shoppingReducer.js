 
export const shpppingInitialState = {
    cart: []
}
export const actionTypes = {
    ADD_TO_CART: 'ADD_TO_CART'
}

export default function shoppingReducer(state,action){
    console.log(action);
    switch(action.type){
        case "ADD_TO_CART":
        return {
            ...state,
            cart: [...state.cart, action.item]
        };
        default: return state;
    }
}


