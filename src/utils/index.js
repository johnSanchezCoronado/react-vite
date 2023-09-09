/**
 * Esta función calcula el total de precios en la orden
 * @param {Array} products  cartProduct: Array de objetos
 * @returns Precio total
 */
export const totalPrice = (products) => {
    var sum = 0;
    for(var product of products){
        sum += product.price;
    }
    return sum;
}