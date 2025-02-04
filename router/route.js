import { Router } from "express";

const router = Router();

/**import all controllers */
import * as controller from '../controllers/appController.js';
import { registerMail } from '../controllers/mailer.js';
import Auth, { localVariables } from '../middleware/auth.js';


/**POST  */

router.route('/register').post(controller.register); //register user
router.route('/registerMail').post(registerMail); //send an email
router.route('/authenticate').post((req, res) => res.end()); //authenticate user
router.route('/login').post(controller.verifyUser, controller.login); // login in app

/**GET  */
router.route('/user/:username').get(controller.getUser); //find user with username
router.route('/generateOTP').get(localVariables, controller.verifyUser, controller.generateOTP); //generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP); //verify generated OTP
router.route('/createResetSession').get(controller.createResetSession); // reset all the variables


/**PUT  */
router.route('/updateuser').put(Auth, controller.updateUser); //is used to update user profile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); //use to reset password


export default router;