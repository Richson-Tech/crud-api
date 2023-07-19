import express from "express";
import bodyParser from "body-parser";
import { client } from "./database";

import shopRoutes from "./routes/router";

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));

client
  .connect()
  .then(() => {
    client.query(`Select * from shop`, (err, res) => {
      if (!err) {
        console.log(res.rows);
      } else {
        console.log(err.message);
      }
    });

    console.log("Your Database is connected succesfully");
  })
  .catch(() => {
    console.log("Database connection failed");
    process.exit(1);
  });

app.use("/", shopRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
