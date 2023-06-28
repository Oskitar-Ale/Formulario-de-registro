import {Router} from "express";
const  router =  Router();
import { getStudents, createStudents, updateStudents, deleteStudents,getStudent2 } from "../controllers/students.controller.js";

router.get('/students', getStudents);
router.get('/students/:id', getStudent2);

router.post('/students', createStudents);
router.put('/students', updateStudents);
router.delete('/students', deleteStudents);

export default router