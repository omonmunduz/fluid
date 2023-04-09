import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cat1 from "../../../images/catbanner-01.jpg";
import cat2 from "../../../images/catbanner-02.jpg";
import cat3 from "../../../images/catbanner-03.jpg";
import cat4 from "../../../images/catbanner-04.jpg";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    id: 12345456767,
    userName: 'Mithrandir',
    firstName: 'Gandalf',
    lastName: 'The Grey',
    email: 'youshallnotpass@middleEarth.com',
    siteName: 'Example Site',
    navigationItems: [
        {
          name: 'Home',
          link: '/',
          componentList: [
            { 
                type: 'promotionsHero',
                id: 1, 
                children: [
                                {
                                productName: "Laptops Max",
                                description:"From.",
                                image: 'https://picsum.photos/200/300',
                                cardSize: "large",
                                price: 1699.00,
                                id: 1,
                                },
                                {
                                    productName: "Laptops Max",
                                    description:"From .",
                                    image: 'https://picsum.photos/200/300',
                                    cardSize: "small",
                                    price: 1699.00,
                                    id: 2,
                                },
                                {
                                    productName: "Laptops Max",
                                    description:"From .",
                                    image: 'https://picsum.photos/200/300',
                                    cardSize: "small",
                                    price: 1699.00,
                                    id: 3,
                                },
                                {
                                    productName: "Laptops Max",
                                    description:"From .",
                                    image: 'https://picsum.photos/200/300',
                                    cardSize: "small",
                                    price: 1699.00,
                                    id: 4,
                                },
                                {
                                    productName: "Laptops Max",
                                    description:"From .",
                                    image: 'https://picsum.photos/200/300',
                                    cardSize: "small",
                                    price: 1699.00,
                                    id: 5,
                                },],
            },
            /*{ 
                type: 'textPromo', 
                id: 2, 
                title: 'This is a text component', 
                description:"This is a description of the text component",
                image: 'https://picsum.photos/200/300',
                imageAlignment: "left",
            },*/
            {
                type:"productList",
              subType: 'popularItems',
              id: 2,
              children: [
                {
                productName: "Laptops Max",
                description:"From.",
                image: 'https://picsum.photos/200/300',
                cardSize: "large",
                id: 6,
                price: 1699.00,
                },
                {
                    productName: "Laptops Max",
                    description:"From.",
                    image: 'https://picsum.photos/200/300',
                    cardSize: "large",
                    id: 7,
                    price: 1699.00,
                    },
                    {
                        productName: "Laptops Max",
                        description:"From.",
                        image: 'https://picsum.photos/200/300',
                        cardSize: "large",
                        id: 8,
                        price: 1699.00,
                        },
                        {
                            productName: "Laptops Max",
                            description:"From.",
                            image: 'https://picsum.photos/200/300',
                            cardSize: "large",
                            price: 1699.00,
                            id: 9,
                            },
                            {
                                productName: "Laptops Max",
                                description:"From.",
                                image: 'https://picsum.photos/200/300',
                                cardSize: "large",
                                price: 1699.00,
                                id: 10,
                                },
                                {
                                    productName: "Laptops Max",
                                    description:"From.",
                                    image: 'https://picsum.photos/200/300',
                                    cardSize: "large",
                                    price: 1699.00,
                                    id: 11,
                                    },
                {
                    productName: "Laptops Max",
                    description:"From .",
                    image: 'https://picsum.photos/200/300',
                    cardSize: "small",
                    price: 1699.00,
                    id: 12,
                },
                {
                    productName: "Laptops Max",
                    description:"From .",
                    image: 'https://picsum.photos/200/300',
                    cardSize: "small",
                    price: 1699.00,
                    id: 13,
                },
                {
                    productName: "Laptops Max",
                    description:"From .",
                    image: 'https://picsum.photos/200/300',
                    cardSize: "small",
                    price: 1699.00,
                    id: 14,
                },
                {
                    productName: "Laptops Max",
                    description:"From .",
                    image: 'https://picsum.photos/200/300',
                    cardSize: "small",
                    price: 1699.00,
                    id: 15,
                },],
            },
            {
                type:"productList",
                subType: 'bestSellers',
              id: 3,
              children: [
                {
                productName: "Laptops Max",
                description:"From.",
                image: 'https://picsum.photos/200/300',
                cardSize: "large",
                id: 16,
                price: 1699.00,
                },
                {
                    productName: "Laptops Max",
                    description:"From .",
                    image: 'https://picsum.photos/200/300',
                    cardSize: "small",
                    id: 17,
                    price: 1699.00,
                },
                {
                    productName: "Laptops Max",
                    description:"From .",
                    image: 'https://picsum.photos/200/300',
                    cardSize: "small",
                    id: 18,
                    price: 1699.00,
                },
                {
                    productName: "Laptops Max",
                    description:"From .",
                    image: 'https://picsum.photos/200/300',
                    cardSize: "small",
                    id: 19,
                    price: 1699.00,
                },
                {
                    productName: "Laptops Max",
                    description:"From .",
                    id: 20,
                    image: 'https://picsum.photos/200/300',
                    cardSize: "small",
                    price: 1699.00,
                },],
            },
            {
                type:"categoryListing",
                name: 'Categories',
                children: [
                    {img: 'https://picsum.photos/200/300', promoType:"Best sale", productTitle:"Laptops Max", description:"From $1699.00 or $64.62/mo."},
                    {img: 'https://picsum.photos/200/300', promoType:"new arrival", productTitle:"Buy Ipad Air", description:"From $1699.00 or $64.62/mo."},
                    {img: 'https://picsum.photos/200/300', promoType:"15% off", productTitle:"Smartwatch 7", description:"From $1699.00 or $64.62/mo."},
                    {img: 'https://picsum.photos/200/300', promoType:"free engraving", productTitle:"Air-Pod Max", description:"From $1699.00 or $64.62/mo."},
                    {img: 'https://picsum.photos/200/300', promoType:"Best sale", productTitle:"Laptops Max", description:"From $1699.00 or $64.62/mo."},
                    {img: 'https://picsum.photos/200/300', promoType:"new arrival", productTitle:"Buy Ipad Air", description:"From $1699.00 or $64.62/mo."},
                ],
            },
          ],
        },
        {
          name: 'Products',
          link: '/products',
          componentList: [
            {
                type:"productList",
                subType: 'allProducts',
              id: 3,
              children: [
                {
                productName: "Laptops Max",
                description:"From.",
                id: 22,
                image: 'https://picsum.photos/200/300',
                cardSize: "large",
                price: 1699.00,
                },
                {
                    productName: "Laptops Max",
                    description:"From .",
                    image: 'https://picsum.photos/200/300',
                    cardSize: "small",
                    price: 1699.00,
                    id: 23,
                },
                {
                    productName: "Laptops Max",
                    description:"From .",
                    image: 'https://picsum.photos/200/300',
                    cardSize: "small",
                    price: 1699.00,
                    id: 24,
                },
                {
                    productName: "Laptops Max",
                    description:"From .",
                    image: 'https://picsum.photos/200/300',
                    cardSize: "small",
                    id: 25,
                    price: 1699.00,
                },
                {
                    productName: "Laptops Max",
                    description:"From .",
                    image: 'https://picsum.photos/200/300',
                    cardSize: "small",
                    id: 26,
                    price: 1699.00,
                },],
            },
          ],
        },
        {
          name: 'About',
          link: '/about',
          componentList: [
            {
              type: 'banner',
              backgroundImage: 'https://picsum.photos/200/300',
              id: 1,
              title: 'About the Owners',
              description: 'Learn more about the people behind this site',
            },
            {
                type: 'textPromo', 
                id: 2, 
                title: 'This is a text component', 
                description:"This is a description of the text component",
                image: 'https://picsum.photos/200/300',
                imageAlignment: "left",
            },
            {
                type: 'textPromo', 
                id: 2, 
                title: 'This is a text component', 
                description:"This is a description of the text component",
                image: 'https://picsum.photos/200/300',
                imageAlignment: "right",
            },
          ],
        },
        {
          name: 'Contact',
          link: '/contact',
          componentList: [
            {
                type: 'banner',
                backgroundImage: 'https://picsum.photos/200/300',
                id: 1,
                title: 'About the Owners',
                description: 'Learn more about the people behind this site',
              },
            {
              type: 'contactForm',
              id: 1,
              title: 'Get in Touch',
              description: 'Send us a message and we will get back to you',
            },
          ],
        },
      ],
  };
  
  const siteSlice = createSlice({
    name: 'site',
    initialState,
    reducers: {
      // Add your reducers here
    },
    // You can also add extraReducers if needed, e.g., to handle async actions
  });
  
  // Export the action creators and the reducer
  export const { /* Add your action creators here */ } = siteSlice.actions;
  export default siteSlice.reducer;