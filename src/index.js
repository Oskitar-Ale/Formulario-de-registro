import  express  from 'express';
import morgan from 'morgan';

import bodyParser from 'body-parser';
import flash from 'connect-flash';
import session from 'express-session';
import  {dirname, join} from 'path';
import  {fileURLToPath} from 'url';
import indexRoutes from './routes/index.js'; //== Import index routes ==
import studentsRoutes from './routes/students.routes.js'; //== Import students routes ==
import requestsRoutes from './routes/requests.routes.js'; // == Import requests routes ==

//== Initialization==
const app = express()
app.use(express.json())

//== Settings ==
const __dirname = dirname(fileURLToPath(import.meta.url))

// == Motor ejs ==
app.set('view engine','ejs');
app.set('views', join(__dirname, 'views'))

//== Middleware ==

app.use(session({
    secret: 'mysecret', 
    resave: false,
    saveUninitialized: false
}));

app.use(flash())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

//== Variables ==
app.use((req,res,next) => {
    res.locals.createS = req.flash('createSuccess');
    res.locals.deleteS = req.flash('deleteSuccess');

    res.locals.error = req.flash('error');
    next()
}); 

//== Route  == 
app.use(indexRoutes)
app.use(studentsRoutes)
app.use(requestsRoutes) 

//== public  == 
app.use(express.static(join(__dirname, 'public')))




app.listen(3000)
console.log('http://localhost:3000')
