class ProductManager {
  static #products = [];
  create(data) {
    const product = {
      //id: ProductManager.#products.length+1,
      id:
        ProductManager.#products.length === 0
          ? 1
          : ProductManager.#products[ProductManager.#products.length - 1].id +
            1,
      photo: data.photo,
      title: data.title,
      category: data.category,
      price: data.price,
      sotck: data.stock,
    };
    ProductManager.#products.push(product);
  }

  read() {
    return ProductManager.#products;
  }
}

const productos = new ProductManager();

productos.create({
  title: "Zapatilla",
  photo: "zapatila.jpg",
  category: "Calzado",
  price: "100",
  sotck: "25",
});

productos.create({
  title: "Campera",
  photo: "campera.jpg",
  category: "Abrigo",
  price: "200",
  sotck: "13",
});

productos.create({
  title: "Remera",
  photo: "remera.jpg",
  category: "Vestimenta",
  price: "50",
  sotck: "3",
});

productos.create({
  title: "Zapato",
  photo: "zapato.jpg",
  category: "Calzado",
  price: "125",
  sotck: "40",
});

productos.create({
  title: "Sweater",
  photo: "sweater.jpg",
  category: "abrigo",
  price: "150",
  sotck: "3",
});

console.log(productos.read());
console.log("Testing?");
//Net commit to test new branch
