const express = require('express');
const app = express();




//Setting up View engine
app.set('view engine', 'ejs');

//Static files
app.use(express.static('/public'));

//Routes
app.get('/', (req, res) => {
    res.render('index')
});

app.listen(4000, () => {
    console.log('server running on port 4000')
})