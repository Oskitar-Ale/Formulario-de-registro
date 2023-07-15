import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local';
import { pool } from "../db/connection.js";
import { helper }  from './helpers.js'

passport.use('local.login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true


}, async(req, username, password, done) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username])
    if (rows.length > 0) {
        const user = rows[0];
        const validPassword = await helper.matchPassword(password, user.password);
        console.log(validPassword)
        console.log (user.password)
        if(validPassword) {
            done(null, user, req.flash('loginSuccess', 'Bienvenido' + user.username));
        }else {
            done(null, false, req.flash('loginMessage', 'Contraseña incorrecta'));
        }
    }else {
        return done(null, false, req.flash('loginMessage', 'El username no existe'))
    }
}));



passport.use('local.register', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const { nombre, apellidos, telefono, email } = req.body;
    const Info = {
        nombre,
        apellidos,
        telefono,
        email,
    }
    const newUser = {
        username,
        password,
    }

    newUser.password = await helper.encryptPassword(password);
    // console.log('datos:',newUser,':datos:',nombre,apellidos,telefono,email )
    const result = await pool.query('INSERT INTO users SET ?',{...newUser, ...Info});
    newUser.id = result[0].insertId;
    // console.log('f:',newUser.id)
    return done(null, newUser);
}));


passport.serializeUser((user, done) => {
    // console.log('a:',user)

    done(null, user.id)
});

passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    // console.log('c:',rows)
    done(null, rows[0])
})