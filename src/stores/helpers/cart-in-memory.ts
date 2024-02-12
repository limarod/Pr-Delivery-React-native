import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart-store";
import Product from "@/app/product/[id]";


export function add(products: ProductCartProps[], newProduct : ProductProps ){
    const existingProduct = products.find(({id}) => newProduct.id === id)

    if(existingProduct){
        return products.map((product) => 
            product.id === existingProduct.id ? {...product, quantity: product.quantity + 1}
            : product
        )
    }

    return [...products, {... newProduct, quantity: 1}]
}

export function remove(products: ProductCartProps[], productRemoveId: string ){
    const updatedProducts = products.map((item) => item.id === productRemoveId 
        ?{
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 0 
        }
        : item

    )
    return updatedProducts.filter((items) => items.quantity > 0)
}