import express from 'express';
import { deleteUser, getTestRoute, getUser, postTestRoute, updateUserbyPatch, updateUserbyPut } from '../../controller/test/testController.js';


const router = express.Router();


router.get('/test', getTestRoute);
router.post('/test', postTestRoute)

router.get('/test/:id', getUser);
router.delete('/test/:id', deleteUser);

router.put('/test/:id', updateUserbyPut)
router.patch('/test/:id', updateUserbyPatch)

export default router;
