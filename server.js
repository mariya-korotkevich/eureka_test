const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const indexRoutes = require('./routes/index');

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use('/', indexRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on localhost: ${PORT}; Press Ctrl - C to terminate...!`)
});
