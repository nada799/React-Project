import React from 'react'
import product1 from '../assets/images/product/product1-1.jpg'
import product1_1 from '../assets/images/product/product2.jpg'
import product2 from '../assets/images/product/product2-1.jpg'
import product2_1 from '../assets/images/product/product3.jpg'
import product3 from '../assets/images/product/product3-1.jpg'
import product3_1 from '../assets/images/product/product4.jpg'
import product4 from '../assets/images/product/product4-1.jpg'
import product4_1 from '../assets/images/product/product5.jpg'
import product5 from '../assets/images/product/product5-1.jpg'
import product5_1 from '../assets/images/product/product6.jpg'
import product6 from '../assets/images/product/product8.jpg'
import product6_1 from '../assets/images/product/product8-1.jpg'
import product7 from '../assets/images/product/product10.jpg'
import product7_1 from '../assets/images/product/product10-1.jpg'
import product8 from '../assets/images/product/product7.jpg'
import product8_1 from '../assets/images/product/product7-1.jpg'
import product9 from '../assets/images/product/product9.jpg'
import product9_1 from '../assets/images/product/product9-1.jpg'
import product10 from '../assets/images/product/product6-1.jpg'
import product10_1 from '../assets/images/product/product1.jpg'



export const allProducts = [
    {
        id:1,
        title:'Product One',
        img:product1,
        category:'Casio',
        price:70.00,
        count:17,
        rating:90,
        description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
        images:[
            product1_1,
            product3_1,
            product5_1,
            product2_1
        ]
    },
    {
        id:2,
        title:'Product Two',
        img:product2,
        category:'Casio',
        price:120.00,
        count:13,
        rating:48,
        description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
        images:[
            product2_1,
            product6_1,
        ]
    },
    {
        id:3,
        title:'Product Three',
        img:product3,
        category:'Casio',
        price:433.00,
        count:5,
        rating:72,
        description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
        images:[
            product3_1,
            product9_1,
            product10_1,
        ]
    },
    {
        id:4,
        title:'Product Four',
        img:product4,
        category:'Rolex',
        price:305.00,
        count:4,
        rating:95,
        description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
        images:[
            product4_1,
            product7_1
        ]
    },
    {
        id:5,
        title:'Product Five',
        img:product5,
        category:'Rolex',
        price:263.00,
        count:10,
        rating:100,
        description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
        images:[
            product5_1,
            product3_1,
        ]
    },
    {
        id:6,
        title:'Product Six',
        img:product6,
        category:'Tommy',
        price:136.00,
        count:17,
        rating:78,
        description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
        images:[
            product6_1,
            product3_1,
            product8_1,
            product2_1
        ]
    },
    {
        id:7,
        title:'Product Seven',
        img:product7,
        category:'Tommy',
        price:302.00,
        count:8,
        rating:50,
        description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
        images:[
            product7_1,
            product8_1,

        ]
    },
    {
        id:8,
        title:'Product Eight',
        img:product8,
        category:'Fossil',
        price:80.00,
        count:3,
        rating:64,
        description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
        images:[
            product8_1,
            product9_1,
            product6_1,
            product1_1,
            product10_1
        ]
    },
    {
        id:9,
        title:'Product Nine',
        img:product9,
        category:'Mini Focus',
        price:135.00,
        count:11,
        rating:99,
        description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
        images:[
            product9_1,
            product4_1,
            product3_1,
        ]
    },
    {
        id:10,
        title:'Product Ten',
        img:product10,
        category:'Mini Focus',
        price:80.00,
        count:2,
        rating:97,
        description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
        images:[
            product10_1,
            product9_1,
            product5_1,
        ]
    },
]
export const spcificCategory = [
{
    category : 'Casio' ,
    products :[
        {
            id:1,
            title:'Product One',
            img:product1,
            category:'Casio',
            price:70.00,
            count:17,
            rating:90,
            description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
            images:[
                product1_1,
                product3_1,
                product5_1,
                product2_1
            ]
        },
        {
            id:2,
            title:'Product Two',
            img:product2,
            category:'Casio',
            price:120.00,
            count:13,
            rating:48,
            description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
            images:[
                product2_1,
                product6_1,
            ]
        },
        {
            id:3,
            title:'Product Three',
            img:product3,
            category:'Casio',
            price:433.00,
            count:5,
            rating:72,
            description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
            images:[
                product3_1,
                product9_1,
                product10_1,
            ]
        },
    ]
},
{
    category : 'Rolex',
    products :[
        {
            id:4,
            title:'Product Four',
            img:product4,
            category:'Rolex',
            price:305.00,
            count:4,
            rating:95,
            description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
            images:[
                product4_1,
                product7_1
            ]
        },
        {
            id:5,
            title:'Product Five',
            img:product5,
            category:'Rolex',
            price:263.00,
            count:10,
            rating:100,
            description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
            images:[
                product5_1,
                product3_1,
            ]
        },
    ]
},
{
    category : 'Tommy' ,
    products :[
        {
            id:7,
            title:'Product Seven',
            img:product7,
            category:'Tommy',
            price:302.00,
            count:8,
            rating:50,
            description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
            images:[
                product7_1,
                product8_1,
    
            ]
        }
    ]
},
{
    category :'Fossil',
    products: [
        {
            id:8,
            title:'Product Eight',
            img:product8,
            category:'Fossil',
            price:80.00,
            count:3,
            rating:64,
            description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
            images:[
                product8_1,
                product9_1,
                product6_1,
                product1_1,
                product10_1
            ]
        },
    ]
},
{
    category : 'Mini Focus',
    products :[
        {
            id:9,
            title:'Product Nine',
            img:product9,
            category:'Mini Focus',
            price:135.00,
            count:11,
            rating:99,
            description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
            images:[
                product9_1,
                product4_1,
                product3_1,
            ]
        },
        {
            id:10,
            title:'Product Ten',
            img:product10,
            category:'Mini Focus',
            price:80.00,
            count:2,
            rating:97,
            description:'More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..',
            images:[
                product10_1,
                product9_1,
                product5_1,
            ]
        },
    ]
}
]
