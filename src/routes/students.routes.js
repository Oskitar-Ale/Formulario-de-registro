import {Router} from "express";
const  router =  Router();
import {createPanel, getPanel, deletePanel} from "../controllers/students.controller.js";


router.get('/panel', getPanel);
router.post('/panel', createPanel);
router.post('/delete/:dni',deletePanel)
export default router