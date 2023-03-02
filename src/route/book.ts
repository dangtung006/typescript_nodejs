import express from 'express';
import controller from '../controller/book';
// import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/create',  controller.createBook);
router.get('/get/:bookId', controller.getBookDetail);
router.get('/get/', controller.getAllBook);
router.patch('/update/:bookId', controller.updateBook);
router.delete('/delete/:bookId', controller.removeBook);

export default router;