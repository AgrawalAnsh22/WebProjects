const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const app = express();

const day = date.getDate();
const items = [];
const workItems = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  res.render("list", {
    listTite: day,
    newListItems: items
  });
  //today.getDay() gives you a number from 0 to 6
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTite: "Work List",
    newListItems: workItems
  });
});

app.post("/work", function() {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
  console.log(item);
});

app.post("/", function(req, res) {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(3000, function() {
  console.log("Server is running in port 3000");
});
