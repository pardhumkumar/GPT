const express=require('express');
const { registerController, loginController, logoutController } = require('../controller/authController');
 
const router=express();
// router.post('/register',registerController)
// router.post('/login',loginController)
// router.post('/logout',logoutController)
router.post('/register', registerController);
router.post('/login', loginController);
router.post('/logout', logoutController);

 
module.exports=router