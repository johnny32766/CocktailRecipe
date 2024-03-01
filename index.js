import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/";

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Server started at port: " + port);
});

app.get("/", (req, res) => {
  console.log(API_URL + "random.php");
  axios
    .get(API_URL + "random.php")
    .then(function (response) {
      var obj = response.data.drinks[0];
      var strDrink = obj.strDrink;
      var strDrinkThumb = obj.strDrinkThumb;
      var strInstructions = obj.strInstructions;
      res.render("index.ejs", {
        strDrink: strDrink,
        strDrinkThumb: strDrinkThumb,
        strInstructions: strInstructions,
      });
    })
    .catch(function (error) {
      console.log(error.response.data);
    });
});
