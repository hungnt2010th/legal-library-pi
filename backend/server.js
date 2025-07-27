
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const lawRoutes = require("./app/routes/laws");
app.use("/api/laws", lawRoutes);

app.listen(3001, () => {
    console.log("Backend running on http://localhost:3001");
});
