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
        if(nombre.trim() === '' || apellidos.trim() === '' || dni.trim() === ''|| celular.trim() === '' || email.trim() === '' ){
            console.log("El nombre y los apellidos no pueden estar vacíos.");
            res.redirect('/panel')
        }else{
            console.log(newData);
            await pool.query('INSERT INTO students set ?', [newData]);
            req.flash('createSuccess', 'Se registro exitosamente.');
            res.redirect('/panel')
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
    req.flash('deleteSuccess', 'Se elimino exitosamente.');
    res.redirect('/panel');
}
export const editPanel = async (req, res) => {

    const {dni, nombre, apellidos, email, celular } = req.body;
    const newEdit = {dni, nombre, apellidos, email, celular}
    console.log(`
    se edito el usuario: ${dni}
    Nuevos datos actualizados: ${JSON.stringify(newEdit)}`);
    await pool.query('UPDATE students set ? WHERE dni = ?', [newEdit, dni]);
    res.redirect('/panel')

    // const {dni} = req.params;
    // res.redirect('/panel');
}