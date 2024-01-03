export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

function updateLocalStorage(state){
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export function cartReducer(state,action){
    switch(action.actionType){
        case 'ADD':{
            let inCart = state.findIndex(item => item.product.id == action.product.id)
            if(inCart >= 0){  
                let newCart = state.map(item => {
                    if (item.product.id === action.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                    });
                return newCart
            }
            let newCart = [...state]
            newCart.push({
                product: action.product,
                quantity: 1
            })
            updateLocalStorage(newCart)
            return newCart
        }
        case 'REMOVE':{
            let newCart = state.filter(item => item.product.id != action.id)
            updateLocalStorage(newCart)
            return newCart;
        }
        case 'CLEAR':
            return []
        default:
            return state
    }
}