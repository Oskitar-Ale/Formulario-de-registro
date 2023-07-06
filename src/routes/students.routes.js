import {Router} from "express";
const  router =  Router();
import {createPanel, getPanel, deletePanel, editPanel} from "../controllers/students.controller.js";


router.get('/panel', getPanel);
router.post('/panel/create/', createPanel);
router.get('/panel/delete/:dni',deletePanel)
router.post('/panel/edit/',editPanel)

export default router