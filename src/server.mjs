import express, { response } from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const products = [{
    id: '123',
    name: 'Running Shoes',
    price: '60.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: './assets/shoesImage1.jpg',
    averageRating: '5.0',
  }, {
    id: '234',
    name: 'Basketball Shoes',
    price: '120.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: './assets/shoesImage2.jpg',
    averageRating: '5.0',
  }, {
    id: '345',
    name: 'Bright Red Shoes',
    price: '90.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: './assets/shoesImage3.jpg',
    averageRating: '5.0',
  }, {
    id: '456',
    name: 'Fancy Shoes',
    price: '190.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: './assets/shoesImage4.jpg',
    averageRating: '5.0',
  }, {
    id: '567',
    name: 'Skateboard Shoes',
    price: '75.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: './assets/shoesImage5.jpg',
    averageRating: '5.0',
  }, {
    id: '678',
    name: 'High Heels',
    price: '200.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: './assets/shoesImage6.jpg',
    averageRating: '5.0',
  }, {
    id: '789',
    name: 'Dark Shoes',
    price: '100.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: './assets/shoesImage7.jpg',
    averageRating: '5.0',
  }, {
    id: '893',
    name: 'Classic Shoes',
    price: '40.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: './assets/shoesImage8.jpg',
    averageRating: '5.0',
  }, {
    id: '901',
    name: 'Plain Shoes',
    price: '54.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: './assets/shoesImage9.jpg',
    averageRating: '5.0',
  },
  {
    id: '902',
    name: 'Teal Dress Shoes',
    price: '330.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: './assets/shoesImage10.jpg',
    averageRating: '5.0',
  },
  {
    id: '788',
    name: 'Fancy Boots',
    price: '230.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: './assets/shoesImage11.jpg',
    averageRating: '5.0',
  }, {
    id: '890',
    name: 'Gold Shoes',
    price: '180.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.',
    imageUrl: './assets/shoesImage12.jpg',
    averageRating: '5.0',
  }];

  export let cartItems = [
    products[0],
    products[2],
    products[3],
  ];
  

const app = express();
app.use(bodyParser.json());

// const client = await MongoClient.connect(
//    "mongodb+srv://goswamiprashansa:qf7lctSJo60T0py5@cluster0.fl9dz6a.mongodb.net/",
//    {useNewUrlParser:true, useUnifiedTopology:true}
// );
// const db = client.db('e-comm');


app.get('/api/products', async(req,res)=>{
    try{  const client = await MongoClient.connect(
        "mongodb+srv://goswamiprashansa:qf7lctSJo60T0py5@cluster0.fl9dz6a.mongodb.net/",
        {useNewUrlParser:true, useUnifiedTopology:true}
     );
     const db = client.db('e-comm');
    
    const products = await db.collection('products').find({}).toArray();
    res.status(200).json(products);
    client.close();
    }
    catch(error){
        console.log(error);
    }
});


app.get('/api/users/:userId/cart', async(req,res)=>{
   try{
    const {userId}=req.params;
    console.log({userId})
    const client = await MongoClient.connect(
    "mongodb+srv://goswamiprashansa:qf7lctSJo60T0py5@cluster0.fl9dz6a.mongodb.net/",
    {useNewUrlParser:true, useUnifiedTopology:true}
    );
     const db = client.db('e-comm');
     const user = await db.collection('users').find({id: userId});
     console.log(user );
     if(!user)return res.status(404).json("Could not find user!");
      const products= await db.collection('products').find({}).toArray();
      const cartItemIds=user.cartItems;
      // console.log(cartItemIds)
      // const cartItems= cartItemIds.map(id =>
      // products.find(product => product.id ===id));
      res.status(200).json(cartItems)
     client.close();}
     catch(error){
      console.log(error)
     }
  });
   
    
    



app.get('/api/products/:productId',async(req ,res)=>{
    let {productId}=req.params;
    productId=parseInt(productId);
     const client = await MongoClient.connect(
    "mongodb+srv://goswamiprashansa:qf7lctSJo60T0py5@cluster0.fl9dz6a.mongodb.net/",
    {useNewUrlParser:true, useUnifiedTopology:true}
    );
     const db = client.db('e-comm');
    const product =await db.collection('products').findOne({id:productId});
    console.log(product);
    if(product){
        res.status(200).json(product);
    
    }else{
        res.status(404).json('Could not find the product');
    }
});

app.post('/api/users/:userId/cart',(req,res)=>{
    const {productId} = req.body;
    const product =products.find(product => product.id === productId)
    if(product){
        cartItems.push(product);
        res.status(200).json(cartItems);    
    }else{
        res.status(404).json('Could not find a product!');
    }
});

app.delete('/api/users/:userId/cart/:productId',(req, res)=>{
    const{productId}= req.params;
    cartItems= cartItems.filter(product => product.id != productId);
    res.status(200).json(cartItems);
})

app.listen(8005,() => {
    console.log('server is listening on port 8001 !!');
})