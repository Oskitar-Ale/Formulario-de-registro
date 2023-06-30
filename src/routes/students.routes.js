import {Router} from "express";
const  router =  Router();
import { getStudents, createStudents, updateStudents, deleteStudents,getStudent2, createPanel } from "../controllers/students.controller.js";

router.get('/students', getStudents);
router.get('/students/:id', getStudent2);

router.post('/students', createStudents);
router.put('/students', updateStudents);
router.delete('/students', deleteStudents);


router.get('/panel', (req, res) => res.render('panel'));
    
router.post('/panel', createPanel);

export default router