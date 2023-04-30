import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    visible: false,
    items: [
      //{
      // id: 1,
      // title: "product-1",
      // price: 10,
      // qty: 1,
      //},
    ],
  }),

  getters: {
    getTotalPrice: (state) => {
      const total = state.items.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );

      if (total > 0) {
        return Math.round(total);
      }
      
      return 0;
    },
    getTotalQty: (state) => {
      return state.items.reduce((acc, item) => acc + item.qty, 0);
    },
  },

  actions: {
    addProduct(product) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        // Item already exists in cart, increment its quantity
        existingItem.qty += product.qty || 1; // increment by 1 if qty not specified
      } else {
        // Item doesn't exist in cart, add it
        this.items.push(product);
      }
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

    // LocalStorage
    loadCart() {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        this.items = JSON.parse(savedCart);
      }
    },
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    },
  },
});
