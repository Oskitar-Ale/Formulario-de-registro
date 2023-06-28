import  express  from "express";
import morgan from "morgan";
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
app.set('views', join(__dirname, 'views'))
app.set('view engine','ejs');

app.use(morgan())


//== Route / == 
app.use(indexRoutes)
app.use('/api',studentsRoutes)
app.use(requestsRoutes) 

//== public  == 
app.use(express.static(join(__dirname, 'public')))




app.listen(3000)
console.log('http://localhost:3000')
