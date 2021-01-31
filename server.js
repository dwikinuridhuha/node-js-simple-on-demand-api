const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");

const app = express();

const db = require("./model/index");

const Role = db.role;

db.sequelize.sync({force: false, logging: false}).then(() => {
    console.log("db connect");
});
// db.sequelize.sync({force: true}).then(() => {
//     console.log("drop and create again the database");
//     initRole();
// }).then(() => {
//     console.log("succecc postgre");
// });

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("go to '/doc' for documentation")
})

app.use(
    "/doc",
    swaggerUi.serve,
    swaggerUi.setup(require("./doc"))
)

require("./routes/auth")(app);
require("./routes/user")(app);
require("./routes/product")(app);
require("./routes/order")(app);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => console.log(`Run in ${PORT}`));

module.exports = server;

// function initRole() {
//     Role.create({
//         id: 1,
//         name: "super_admin"
//     });

//     Role.create({
//         id: 2,
//         name: "admin"
//     });

//     Role.create({
//         id: 3,
//         name: "customer"
//     });

//     Role.create({
//         id: 4,
//         name: "driver"
//     });

//     Role.create({
//         id: 5,
//         name: "merchant"
//     });
// }