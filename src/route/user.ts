import express from 'express';
import passport from 'passport';
import controller  from '../controller/user';
// import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/sign_in',  controller.signIn);
router.post('/sign_in/local',  passport.authenticate("local"), function(req, res) {
    return res.send("ok");
});
router.post('/sign_up', controller.signUp);

export default router;