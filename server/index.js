const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dataRoutes = require("./src/routes/data");

const port = 8000;
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/", dataRoutes);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
