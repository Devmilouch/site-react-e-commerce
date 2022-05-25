const INITIAL_STATE = {
    cart: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADDITEM":
            const indexItemAdd = state.cart.findIndex(obj => obj.id === action.payload.id);
            
            if (indexItemAdd !== -1) {
                const newArr = [...state.cart];
                newArr[indexItemAdd].quantity += action.payload.quantity;
                // console.log(state)
                return {
                    cart: newArr
                }
            } else {
                const newArr = [...state.cart];
                newArr.push(action.payload);
                // console.log(newArr)
                return {
                    cart: newArr
                }
            }   
        break;
        case "UPDATEITEM":
            const indexItemUpdate = state.cart.findIndex(obj => obj.id === action.payload.id);

            const newArr = [...state.cart];
            newArr.splice(indexItemUpdate, 1, action.payload);

            return {
                cart: newArr
            }
        break;
        default:
        break;
    }

    return state;
}

export default cartReducer;