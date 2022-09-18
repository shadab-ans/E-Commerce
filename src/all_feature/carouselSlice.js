import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carouselData : {
        status: "200",
        message: "ok",
        data: [
            {
              img:
                "https://transvelo.github.io/electro-html/2.0/assets/img/416X420/img1.png",
              alt: "...",
              h3: "THE NEW STANDARD",
              p: "Lorem ipsum dolor sit amet.",
              btn: "Buy Now",
            },
            {
              img:
                "https://transvelo.github.io/electro-html/2.0/assets/img/416X420/img3.png",
              alt: "...",
              h3: "THE NEW STANDARD",
              p: "Lorem ipsum dolor sit amet.",
              btn: "Buy Now",
            },
            {
              img:
                "https://transvelo.github.io/electro-html/2.0/assets/img/416X420/img2.png",
              alt: "...",
              h3: "THE NEW STANDARD",
              p: "Lorem ipsum dolor sit amet.",
              btn: "Buy Now",
            },
          ]
    }
}

const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
      carouselReducer: (state, action) => {}
    }
});

export const {carouselReducer} = carouselSlice.actions

export const getCarouselData = state => state.carousel.carouselData

export default carouselSlice.reducer