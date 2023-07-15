import passport from 'passport';

export const getlogin = (req,res) =>{
    res.render('auth/login');
}
export const postlogin = (req,res, next) => {
    passport.authenticate('local.login', {
        successRedirect: '/panel',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);

}
export const getLogout = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error(err);
        }
        res.redirect('/login');
    })
}
export const getRegister = (req,res) => {
    res.render('auth/register');
}

export const postRegister = passport.authenticate('local.register', {
    successRedirect: '/panel',
    failureRedirect: '/register',
    failureFlash: true
})