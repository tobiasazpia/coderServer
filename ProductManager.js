class ProductManager {
    static #products = [];
    create(data){
        const product = {
            //id: ProductManager.#products.length+1,
            id: ProductManager.#products.length === 0
                ? 1
                : ProductManager.#products[ProductManager.#products.length-1].id+1,
            photo: data.photo,
            title: data.title,
            category: data.category,
            price: data.price,
            sotck: data.stock
        };
        ProductManager.#products.push(product);
    }

    read(){
        return ProductManager.#products
    }
} 

const productos = new ProductManager();

productos.create({          
    title: "Zapatilla",  
    photo: "zapatila.jpg",
    category: "Calzado",
    price: "100",
    sotck: "25"});

console.log(productos.read())