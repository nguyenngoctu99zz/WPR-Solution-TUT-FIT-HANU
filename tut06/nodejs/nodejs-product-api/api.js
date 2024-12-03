const http = require('http');
// Import the getProducts function
const {getProducts} = require("./dataProvider")
// In-memory array to hold products (initially populated from the JSON file)
let products = getProducts();

function findProductById(id){
    for(let i = 0;i<products.lenghth;i++){
        if(products[i] === parseInt(id)){
            return products[i];
        }
    }
}

const server =http.createServer((req,res)=>{
    if(req.method ==="POST", req.url==="/user"){
        let body ="";
        req.on("data",(chunk)=>{
            body+=chunk.toString();
        })
        req.on("end",()=>{
            const user =JSON.parse(body);
            let newUser ={
                name:user.name,
                email:user.email
            }
            res.writeHead(201,{"Content-Type":"application/json"});
            res.end(JSON.stringify(newUser));
        })
        
    }
})

// Start the server on port 3000
server.listen(3000, () => {
    console.log("Server running on port 3000");
  });