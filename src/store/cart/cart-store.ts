import type { CartProduct } from "@/interfaces/product.interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface State {
    cart: CartProduct[];
    // addProductCart
    // ProductCart
    addProductToCart: (product: CartProduct) => void
    getTotalItems: () => number;
    getSummaryInfo: () => { subtotal: number, total: number, taxes: number };
    updateProductQty: (product: CartProduct, qty: number) => void;
    removeProductQty: (product: CartProduct) => void;

}

export const useCartStore = create<State>()(

    persist(
        (set, get) => ({
            cart: []
            , addProductToCart: (product: CartProduct) => {
                const { cart } = get();
                const productInCart = cart.some((prod) => prod.size == product.size && prod.id == product.id)
                if (!productInCart) {
                    set({ cart: [...cart, product] })
                    return;
                }
                const updatedCrtProducts = cart.map(prod => {
                    if (prod.id === product.id && prod.size === product.size) {
                        return { ...prod, quantity: prod.quantity + 1 }
                    }
                    return prod;
                })
                set({ cart: updatedCrtProducts })
            },
            getTotalItems: () => {
                const { cart } = get();
                const totalQty = cart.reduce((acum, item) => acum + item.quantity, 0)
                console.log(totalQty);
                return totalQty;
            },

            updateProductQty: (product, qty) => {
                const { cart } = get();
                const updatedCart = cart.map(item => {
                    if (product.id === item.id && product.size === item.size)
                        return { ...item, quantity: qty }
                    return item;
                })
                set({ cart: updatedCart })
            },
            removeProductQty: (product) => {
                const { cart } = get();
                const updatedCart = cart.filter(item =>
                    !(item.id == product.id && item.size == product.size))

                set({ cart: updatedCart })
            },
            getSummaryInfo: () => {

                const { cart } = get();
                const subtotal = cart.reduce((acum, item) => item.quantity * (acum + item.price), 0)
                const taxes = Math.ceil(subtotal * .19);
                const total = Math.ceil(subtotal * 1.19);

                return { subtotal, total, taxes }
            }
        })
        , {
            name: 'shopping-cart'
        }
    )


)