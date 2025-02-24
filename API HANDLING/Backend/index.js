import express from 'express';

const app = express();

const port = process.env.PORT || 3000;


app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'table good',
            price: '230',
            image: 'https://m.media-amazon.com/images/I/61PIxh9AX1L.jpg'
        },
        {
            id: 2,
            name: 'table glass',
            price: '100',
            image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/IU/OD/ZM/58617914/center-table-glass.jpg'
        },
        {
            id: 3,
            name: 'table plastic',
            price: '200',
            image: 'https://italica.com/cdn/shop/files/horizental_0001_9508-Green_Black.jpg?v=1718277898&width=533'  
        },
        {
            id: 4,
            name: 'table metal',
            price: '300',
            image: 'https://5.imimg.com/data5/TE/XA/DT/SELLER-7478615/steel-office-table.jpg'
        },
        {
            id: 5,
            name: 'table polyster',
            price: '450',
            image: 'https://static.wixstatic.com/media/435cce_19be8a1ff75342ad832f98d1aa0a1987~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/435cce_19be8a1ff75342ad832f98d1aa0a1987~mv2.jpg'
        }
    ]

    if (req.query.search) {
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
})


app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});

