import express from 'express';
import controller from '../controller/author';
// import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/create',  controller.createAuthor);
router.get('/get/:authorId', controller.getAuthorDetail);
router.get('/get/', controller.getAllAuthors);
router.patch('/update/:authorId', controller.updateAuthor);
router.delete('/delete/:authorId', controller.removeAuthor);

export default router;