const products = [
    { id: 1, name: "منتج 1", price: 250 },
    { id: 2, name: "منتج 2", price: 400 },
    { id: 3, name: "منتج 3", price: 180 },
    { id: 4, name: "منتج 4", price: 600 }
];

let cartCount = 0;

const container = document.getElementById("productsContainer");
const cart = document.getElementById("cartCount");

products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
        <h3>${product.name}</h3>
        <p>السعر: ${product.price} جنيه</p>
        <button onclick="addToCart()">أضف للسلة</button>
    `;
    container.appendChild(div);
});

function addToCart() {
    cartCount++;
    cart.innerText = cartCount;
}
