
import {createPool} from "mysql2/promise";

export const pool  = createPool({
    host: 'localhost',
    user: 'root',
    database: 'schooldb',
    password: '',

});

// pool.connection((err)=> {
//     if (err){
//         console.log('Error al conectar a la DB:',err.message)
//     }else{
//         console.log('Conexion Exitosa a la DB.')
//     }

// })

// connection.execute(
//     'SELECT * FROM  `users`',(err,results,fields) => {
//         console.log(results)
//         console.log(fields)
//     }
// );

