import { pool } from "../db/connection.js";

export const getPanel = async(req, res) => {
    const [data] = await pool.query('SELECT * FROM students');
    // console.log(data);
    res.render('panel',{ data })
}

export const createPanel = async (req, res) => {
    try{
        const {nombre, apellidos, dni, celular, email} = (req.body);
        const newData = {
            dni,
            nombre,
            apellidos,
            celular,
            email
        };
        console.log(`
        nombre: ${nombre}
        apellidos: ${apellidos}
        dni: ${dni}
        celular: ${celular}
        email: ${email}
        `)
        if(nombre.trim() === '' || apellidos.trim() === '' || dni.trim() === ''){
            console.log("El nombre y los apellidos no pueden estar vacíos.");
            res.redirect('panel')
        }else{
            console.log(newData);
            await pool.query('INSERT INTO students set ?', [newData]);
            res.redirect('panel')
        }
    }catch(error){
        console.error(error);
        res.redirect('error');
    }
    
};

export const deletePanel = async (req, res) => {
    
    const {dni} = req.params;
    console.log('se elimino el usuario:', dni);
    await pool.query('DELETE FROM students WHERE dni = ?', [dni]);
    res.redirect('/panel');
}
export const editPanel = async (req, res) => {
    
    const {dni} = req.params;
    console.log('se edito el usuario:', dni);
    await pool.query('UPDATE FROM students WHERE dni = ?', [dni]);
    res.redirect('/panel');
}