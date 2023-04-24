import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    visible: false,
    items: [
      {
        id: 1,
        name: "product-1",
        price: 10,
        qty: 1,
      },
    ],
  }),

  getters: {
    getTotalPrice: (state) => {
      return state.items.reduce((acc, item) => acc + item.price * item.qty, 0);
    },
    getTotalQty: (state) => {
      return state.items.reduce((acc, item) => acc + item.qty, 0);
    },
  },

  actions: {
    addProduct(product) {
      this.items.push(product);
    },
    removeProduct(id) {
      this.items = this.items.filter((p) => {
        return p.id !== id;
      });
    },
    toggleVisible(state) {
      if (state) {
        this.visible = state;
        return;
      }
      this.visible = !this.visible;
    },
  },
});
