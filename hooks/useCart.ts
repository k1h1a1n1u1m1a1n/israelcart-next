import {create} from 'zustand';
import {persist} from "zustand/middleware";
import {IProductSimple} from "@/types/data";

// Define the structure of a cart item
interface ICartItemUser {
  id: number;
  quantity: number;
}

export interface ICartItem {
  id: number;
  key: string;
  quantity: number;
  total: number;
  subtotal: number;
  name: string;
  image: string;
  slug: string;
}

// Define the state and actions for the cart
interface CartState {
  items: ICartItem[];
  userItems: ICartItemUser[];
  total: number;
  subtotal: number;
  isCartOpen: boolean;
  isSyncing: boolean;
  recommendedProducts: IProductSimple[];
  addItem: (item: ICartItemUser) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  isProductInCart: (id: number) => boolean;
  openCart: () => void;
  closeCart: () => void;
  syncCart: () => void;
}

const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      userItems: [],
      isCartOpen: false,
      total: 0,
      subtotal: 0,
      isSyncing: false,
      recommendedProducts: [],

      // Add an item to the cart
      addItem: (item) => {
        set((state) => {
          const existingItem = state.userItems.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              userItems: state.userItems.map((i) =>
                i.id === item.id
                  ? {...i, quantity: i.quantity + item.quantity}
                  : i
              ),
            };
          }
          return {
            userItems: [...state.userItems, item],
          };
        })
        useCart.getState().syncCart();
      },

      // Remove an item from the cart
      removeItem: (id) => {
        set((state) => {
          const itemToRemove = state.userItems.find((i) => i.id === id);
          if (!itemToRemove) return state;
          return {
            userItems: state.userItems.filter((i) => i.id !== id),
          };
        })
        useCart.getState().syncCart();
      },

      // Update the quantity of an item
      updateQuantity: (id, quantity) => {
        set((state) => {
          const itemToUpdate = state.userItems.find((i) => i.id === id);
          if (!itemToUpdate || quantity <= 0) return state;
          return {
            userItems: state.userItems.map((i) =>
              i.id === id ? {...i, quantity} : i
            ),
          };
        })
        useCart.getState().syncCart();
      },

      // Clear the cart
      clearCart: () => set(() => ({items: [], userItems: []})),

      isProductInCart: (id): boolean => {
        return !!useCart.getState().userItems?.find((i: ICartItemUser) => i.id === id);
      },

      openCart: () => {
        document.body.classList.add('mini-cart-open');
        set(() => ({isCartOpen: true}));
      },
      closeCart: () => {
        document.body.classList.remove('mini-cart-open');
        set(() => ({isCartOpen: false}));
      },

      syncCart: async () => {
        set(() => ({isSyncing: true}));

        const data = {cart: useCart.getState().userItems};
        const response = await fetch('https://rc.israelcart.com/wp-json/next/calculate-cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        type Response = {
          total: number,
          subtotal: number,
          items: ICartItem[],
          relatedProducts: IProductSimple[],
          userCart: ICartItemUser[]
        }

        const cartData: Response = await response.json();

        const updateData = {
          items: cartData.items,
          total: cartData.total,
          subtotal: cartData.subtotal,
          isSyncing: false,
          recommendedProducts: cartData.relatedProducts,
          userItems: cartData.userCart,
        };

        set(() => (updateData));
      },
    }),
    {
      name: 'cart',
      partialize: (state): { userItems: ICartItemUser[] } => ({userItems: state.userItems}),
    }
  )
);

useCart.getState().syncCart();

export default useCart;
