
import mysql from "mysql2";

const connection  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'form_data',
    password: '123',

});

connection.connect((err)=> {
    if (err){
        console.log('Error al conectar a la DB:',err.message)
    }else{
        console.log('Conexion Exitosa a la DB.')
    }

})

connection.execute(
    'SELECT * FROM  `users`',(err,results,fields) => {
        console.log(results)
        // console.log(fields)
    }
);


export default connection;
