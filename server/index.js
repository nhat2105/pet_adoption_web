const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");

const app = express();
app.use(cors());
app.use(express.json())
app.use("/", routes)

app.listen(process.env.PORT, () =>{
    console.log(`Server running on port ${process.env.PORT}`);
})