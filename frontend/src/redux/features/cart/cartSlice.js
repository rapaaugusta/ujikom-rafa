import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers:{
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item._id === action.payload._id);
      if(!existingItem) {
        state.cartItems.push(action.payload)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Ditambahkan ke Keranjang",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          title: "Sudah ada di Keranjang",
          icon: "warning",
          // showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: "OK!",
        })
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
    },
    clearCart: (state) => {
      state.cartItems = []
    }
  }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;