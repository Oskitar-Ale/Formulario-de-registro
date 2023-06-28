import { pool } from "../db/connection.js";

export const getStudents = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM students')
    res.send(rows)
};

export const getStudent2 = async(req,res) =>{
    const [rows] = await pool.query('SELECT * FROM students WHERE dni = ?',[req.params.id])
    console.log(rows)
    
    if (rows.length <= 0) return res.status(404).json({
        message:'Student not found'
    });
    
    res.json(rows[0])
}


export const createStudents = async (req, res) => {
    const {dni, nombre, apellidos, celular, email} = (req.body)
    const [rows] = await pool.query('INSERT INTO students (dni, nombre, apellidos, celular, email) VALUES (?,?,?,?,?)', [dni, nombre, apellidos, celular, email])
    res.send({
        dni, 
        nombre, 
        apellidos, 
        celular, 
        email,
    })
};

export const updateStudents = (req, res) => res.send('actualizando empleados');
export const deleteStudents = (req, res) => res.send('eliminando empleados');