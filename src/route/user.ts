import express from 'express';
import controller  from '../controller/user';
// import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/sign_in',  controller.signIn);
router.post('/sign_up', controller.signUp);

export default router;