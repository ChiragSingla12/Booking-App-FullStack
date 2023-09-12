const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const sequelize = require('./util/sequelize');

app.use(express.json())//for handling json data
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({extended: false}));
// app.use(express.static('public'));  // Serve static files from the 'public' directory
// app.set('views', 'views');

const User = require('./models/user');
const cors = require('cors');
app.use(cors());


const userRoute = require('./routers/userroute');
app.use(userRoute);

sequelize
    .sync()
    .then((result) => {//created schema in modal and sync with that
        // console.log(result)//CREATE TABLE IF NOT EXISTS `products` 
        app.listen(3000, (err) => {
            console.log("listening dynamic-routing at port 8000")
        // app.listen(3000);

        });
    })
    .catch((err) => {
        console.log(err)
    })

