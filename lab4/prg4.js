import { products } from "./data.js";
import express from "express"

const app = express();

app.get('/',(req,res)=>{
    res.send(`
        <h1>Home Page</h1>
        <a href='/api/products'> Browser Products</a>
        `);
});
app.get("/api/products",(req,res)=>{
    const modiproducts=products.map(({review,description,...rest})=> rest,);
    res.status(200).json({count:iteam.length,data:iteam});
})



app.use((req,res,next)=>{
    res.status(404).send("Page not found");
});
app.listen(3333,()=> console.log("prg4 is running....."));