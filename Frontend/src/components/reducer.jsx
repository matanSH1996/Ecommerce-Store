
//empty array called "basket".
//"basket" array, will hold the items data.
export const initialState = {
    basket: [],
    user: null
};

//reduce method will iterate throught "basket" array, extracts the "price" property and sum it up, starts from an initial price value of "0".
export const getBasketTotal = (basket) => basket?.reducer((previousItemPrice, currentItemPrice) => previousItemPrice + currentItemPrice.price, 0)

//gets two parameters - "state" and "action".
//when the function is being activated, it will spread "basket" array (define with "...state.basket") and than it will add the new item in the array (define with ", action")
//the ""
const reducer = (state, action) => {
    // console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action]
            };

        case 'REMOVE_FROM_BASKET':

        //becasuse we didnt implemented unique ID for each product when it added to the checkout stage, we need to find the index of the item which we want to remove

        //we will run "findIndex( )" on state.basket, which represent all the items that already in the basket, and we will find the first item in the basket, that hes ID matches the "action" ID
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            //after we've found the specific item's location in basket's Array, we will copy the Array.
            let newBasket = [...state.basket]

            //because all of the item's id are positive integers, we will check if there is any "index" which was found.

            //if we found an index, go to the exact location (described by "index") and splice 1 element, starts from "index"
            if(index >= 0){
                newBasket.splice(index, 1)
                }

                //return basket's Array, without the item removed
                return {
                    ...state,
                    basket: newBasket
            }

            //the type that we dispatched from the app
        case "SET_USER":
            return{
                //returning everything thats currently on state (define by "...state").
                //then we will add in the user's info (inserted from the dispatching which happening, the moment user is log in or out from the app)
                ...state,
                user:action.user
            }

                

        default:
            return state;
    }
}

export default reducer