import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fashionList: {
    status: "200",
    message: "ok",
    data: {
      fashion: [
        [
          {
            catogery: "fashion",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-02.ecfb36bd.jpg",
            price: "600",
          },
          {
            catogery: "fashion",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-02.ecfb36bd.jpg",
            price: "600",
          },
        ],
        [
          {
            catogery: "fashion",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-06.25fd3e52.jpg",
            price: "1900",
          },
        ],
        [
          {
            catogery: "fashion",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-02.ecfb36bd.jpg",
            price: "600",
          },
          {
            catogery: "fashion",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-02.ecfb36bd.jpg",
            price: "600",
          },
        ],
      ],
      men: [
        [
          {
            catogery: "men",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-05.eb2f8349.jpg",
            price: "600",
          },
          {
            catogery: "men",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-02.ecfb36bd.jpg",
            price: "600",
          },
        ],
        [
          {
            catogery: "men",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-01.dc44f297.jpg",
            price: "1900",
          },
        ],
        [
          {
            catogery: "men",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-02.ecfb36bd.jpg",
            price: "600",
          },
          {
            catogery: "men",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-05.eb2f8349.jpg",
            price: "600",
          },
        ],
      ],
      kids: [
        [
          {
            catogery: "kids",
            title: "Fashion of the weak",
            img:
              "https://m.media-amazon.com/images/I/912XTBN0a+L._AC_UL640_FMwebp_QL65_.jpg",
            price: "600",
          },
          {
            catogery: "kids",
            title: "Fashion of the weak",
            img:
              "https://m.media-amazon.com/images/I/912XTBN0a+L._AC_UL640_FMwebp_QL65_.jpg",
            price: "600",
          },
        ],
        [
          {
            catogery: "kids",
            title: "Fashion of the weak",
            img:
              "https://m.media-amazon.com/images/I/91o0O8NGhnL._AC_UL320_.jpg",
            price: "1499",
          },
        ],
        [
          {
            catogery: "kids",
            title: "Fashion of the weak",
            img:
              "https://m.media-amazon.com/images/I/912XTBN0a+L._AC_UL640_FMwebp_QL65_.jpg",
            price: "599",
          },
          {
            catogery: "kids",
            title: "Fashion of the weak",
            img:
              "https://m.media-amazon.com/images/I/912XTBN0a+L._AC_UL640_FMwebp_QL65_.jpg",
            price: "499",
          },
        ],
      ],
      ladies: [
        [
          {
            catogery: "ladies",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-04.6fe3d5e9.jpg",
            price: "600",
          },
          {
            catogery: "ladies",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-08.f9c91fb2.jpg",
            price: "600",
          },
        ],
        [
          {
            catogery: "ladies",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-03.b3c57e1e.jpg",
            price: "1900",
          },
        ],
        [
          {
            catogery: "ladies",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-08.f9c91fb2.jpg",
            price: "600",
          },
          {
            catogery: "ladies",
            title: "Fashion of the weak",
            img:
              "https://scoda.mocutasorin.com/static/media/product-04.6fe3d5e9.jpg",
            price: "600",
          },
        ],
      ],
      corona: [
        [
          {
            catogery: "Accessories",
            title: "Safety first",
            img:
              "https://m.media-amazon.com/images/I/51k5jW-VCtL._AC_SX269_SY202_.jpg",
            price: "600",
          },
          {
            catogery: "Accessories",
            title: "Safety first",
            img:
              "https://m.media-amazon.com/images/I/61JtZONdWfL._AC_SX360_SY240_QL70_.jpg",
            price: "600",
          },
        ],
        [
          {
            catogery: "Accessories",
            title: "Safety first",
            img:
              "https://m.media-amazon.com/images/I/617ZW3H5diL._AC_UL480_FMwebp_QL65_.jpg",
            price: "1900",
          },
        ],
        [
          {
            catogery: "Accessories",
            title: "Safety first",
            img:
              "https://m.media-amazon.com/images/I/61JtZONdWfL._AC_SX360_SY240_QL70_.jpg",
            price: "600",
          },
          {
            catogery: "Accessories",
            title: "Safety first",
            img:
              "https://m.media-amazon.com/images/I/51k5jW-VCtL._AC_SX269_SY202_.jpg",
            price: "600",
          },
        ],
      ],
    },
  },
};

const fashionSlice = createSlice({
  name: "fashion",
  initialState,
  reducers: {
    notReducer: (state, action) => {},
  },
});

export const { notReducer } = fashionSlice.actions;

export const getFashionData = (state) => state.fashion.fashionList;

export default fashionSlice.reducer;
