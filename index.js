const PORT = process.env.PORT || 8080;
const express = require('express');
const router = require('./routes/index');
const hbs = require('express-handlebars');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => {
//     res.send("<h1>My Portfolio</h1>");
// });

app.use('/', router);
app.use('/aboutme', router);
app.use('/education', router);
app.use('/workexperience', router);
app.use('/skill', router);

//Template engine setting
app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.listen(
    PORT,
    () => {
        console.log(`Listening to port ${PORT}`);
    }
);  