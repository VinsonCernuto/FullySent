
import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Lyric',
          email: 'Lyric@fullysent.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'John@fullysent.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products: [
        { 
            name: 'FLLYSNT Tee',
            image: './images/products/tee.jpg',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 25.00,
            countInStock: 11
        }, 
        {
            name: 'FULLYSENT Red Tee',
            image: './images/products/redboxtee.jpg',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 25.00,
            countInStock: 11
        },
        {
            name: 'FLLYSNT Box Hoodie',
            image: './images/products/tee.jpg',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 50.00,
            countInStock: 11
        },
        {
            name: 'FLLYSNT Hoodie',
            image: './images/products/regularhoodie.jpg',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 50.00,
            countInStock: 11
        },
        {
            name: 'FLLYSNT Hat',
            image: './images/products/hat.jpg',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 35.00,
            countInStock: 11
        },
        {
            name: 'FULLYSENT Windbreaker',
            image: './images/products/windbreaker.png',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 65.00,
            countInStock: 11
        },
        {
            name: 'FLLYSNT BlackTee',
            image: './images/products/tee.jpg',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 25.00,
            countInStock: 11
        },
        {

            name: 'FULYLSENT Yetti',
            image: './images/products/yetti.jpg',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 25.00,
            countInStock: 11
        },

    ],
};
export default data