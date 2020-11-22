
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
            _id: '1',
            name: 'FLLYSNT Tee',
            image: './images/products/tee.jpg',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 12.00,
            countInStock: 11
        }, 
        {
            _id: '2',
            name: 'FULLYSENT Red Tee',
            image: './images/products/redboxtee.jpg',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 12.00,
            countInStock: 11
        },
        {
            _id: '3',
            name: 'FLLYSNT Box Hoodie',
            image: './images/products/tee.jpg',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 12.00,
            countInStock: 11
        },
        {
            _id: '4',
            name: 'FLLYSNT Hoodie',
            image: './images/products/regularhoodie.jpg',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 12.00,
            countInStock: 11
        },
        {
            _id: '6',
            name: 'FLLYSNT Hat',
            image: './images/products/hat.jpg',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 12.00,
            countInStock: 11
        },
        {
            _id: '7',
            name: 'FULLYSENT Windbreaker',
            image: './images/products/windbreaker.png',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 12.00,
            countInStock: 11
        },
        {
            _id: '8',
            name: 'FLLYSNT Tee',
            image: './images/products/tee.jpg',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 12.00,
            countInStock: 11
        },
        {
            _id: '9',
            name: 'FULYLSENT Yetti',
            image: './images/products/yetti.jpg',
           description: 'Lorem ipsum consectetuer adipiscing',
            price: 12.00,
            countInStock: 11
        },

    ],
};
export default data