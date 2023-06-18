import  express  from "express";
import  {dirname, join} from 'path';
import  {fileURLToPath} from 'url';

//== Import routes ==
import indexRoutes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))

app.set('view engine','ejs');


//== Route / == 
app.use(indexRoutes)


app.listen(3000)
console.log('http://localhost:3000')
