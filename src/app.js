const express = require("express");
const path = require("path");
const app = express();


/*const ruta_public = path.resolve(__dirname, "./public");
app.use(express.static(ruta_public));*/
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

app.set('view engine',  'ejs');

app.set('views', path.join(__dirname, '/views'));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`)
})

/*app.get("/shopping-cart", (req, res) => {
    const path_shopping_cart = path.resolve(__dirname, "views/shopping-cart.ejs");
    res.render(path_shopping_cart);
});*/

const rutaShoppingCart = require("./routes/shopping-cartRoute.js");
app.use("/shopping-cart", rutaShoppingCart);

/*app.get("/login", (req, res) => {
    const path_login = path.resolve(__dirname, "views/login.ejs");
    res.render(path_login);
});*/

/*app.get("/register", (req, res) => {
    const path_register = path.resolve(__dirname, "views/registro.ejs");
    res.render(path_register);
})*/

const rutaUser = require("./routes/userRoute.js");
app.use("/user", rutaUser);

/*app.get("/", (req, res) => {
    const path_home = path.resolve(__dirname, "views/home.ejs");
    res.render(path_home);
});*/

const rutaHome = require("./routes/homeRoute.js");
app.use("/", rutaHome);

/*app.get("/product-detail", (req, res) => {
    const path_register = path.resolve(__dirname, "views/product-detail.ejs");
    res.render(path_register);
})*/

const rutaProducts = require("./routes/product-detailRoute.js");
app.use("/product-detail", rutaProducts );

// /Create-product


