import { getShoppingCart } from "../utilities/fakedb";
const loadData = async () => {
    const dataFetch = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    const dataJson = await dataFetch.json();
    const getCart = getShoppingCart();
    const saveCart = [];
    for (const id in getCart) {
        const checkProduct = dataJson.find(pd => pd.id === id)
        if (checkProduct) {
            const quantity = getCart[id];
            checkProduct.quantity = quantity;
        }
        saveCart.push(checkProduct)
    }
    return saveCart;


}

export default loadData;