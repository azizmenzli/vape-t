const intialState = {
    productList: [],
    selectedProduct: {},
};

const ProductReducer = (state = intialState, action) => {
    switch (action.type) {
        case "PRODUCTSARRAY":
            state = { ...state, productList: action.payload }
            return state;
        case "PRODUCTDATA":
            state = { ...state, selectedProduct: action.payload }
            return state;
        default:
            return state
    }
}
export default ProductReducer;