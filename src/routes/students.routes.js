import {Router} from "express";
const  router =  Router();
import {createPanel, getPanel, deletePanel, editPanel} from "../controllers/students.controller.js";


router.get('/panel', getPanel);
router.post('/panel', createPanel);
router.get('/panel/delete/:dni',deletePanel)
router.get('/panel/edit/:dni',editPanel)

export default router