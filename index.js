const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();

mongoose.set("strictQuery", false);

const mongoDB = "mongodb+srv://adm001:1234554321@server-crud.11edovd.mongodb.net/";


async function main() {
  return await mongoose.connect(mongoDB);

}

app.use(bodyParser.urlencoded({ extended: true}))

app.listen(3000, async function() {
    console.log('server running on port 3000')
    await main().then((response) => console.log(response)).catch((err) => console.log(err));
})

app.get( "/", function(req, res) {
    return res.render('index.ejs');
} )
app.get( "/produtos", function(req, res) {
    return res.render('oi mundo');
} )

app.post( "/show", function(req, res) {
    return res.send(req.body);
} )

app.set('view engine', 'ejs');
