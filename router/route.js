import { Router } from "express";

const router = Router();

/**import all controllers */
import * as controller from '../controllers/appController.js';

/**POST  */

router.route('/register').post(controller.register); //register user
router.route('/registerMail').post(); //send an email
router.route('/authenticate').post(); //authenticate user
router.route('/login').post(); // login in app

/**GET  */
router.route('/user/:username').get(); //find user with username
router.route('/generateOTP').get(); //generate random OTP
router.route('/verifyOTP').get(); //verify generated OTP
router.route('/createResetSession').get(); // reset all the variables


/**PUT  */
router.route('/updateuser').put(); //is used to update user profile
router.route('/resetPassword').put(); //use to reset password


export default router;