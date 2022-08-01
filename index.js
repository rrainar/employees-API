const Koa = require ("koa");
const app = new Koa();

const bodyParser = require("koa-bodyparser");
app.use(bodyParser());

const router = require("./src/routes/employees-router");
app.use(router.routes());

app.listen(5000, () => 
console.log("Server is running at http://localhost:5000")
);