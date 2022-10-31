// For Add Item to Cart
export const addItem = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

export const delItem = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}
export const getProductsList = (productsArray) => {
    return {
        type: "PRODUCTSARRAY",
        payload: productsArray,
    }
}

export const getProductDetails = (productData) => {
    return {
        type: "PRODUCTDATA",
        payload: productData,
    }
}
