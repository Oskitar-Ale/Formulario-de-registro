import {Router} from "express";
const  router =  Router();
import {createPanel, getPanel, deletePanel, editPanel} from "../controllers/students.controller.js";
import { isLoggedIn } from '../lib/auth.js';


router.get('/panel', isLoggedIn, getPanel);
router.post('/panel/create/', createPanel);
router.get('/panel/delete/:dni',deletePanel)
router.post('/panel/edit/',editPanel)

export default router