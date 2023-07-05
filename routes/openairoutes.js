const express=require('express')
const { summaryController,paragraphController, chabotController,jsconverterController,scifiImageController } = require('../controller/openaicontroller')
const router=express.Router()

router.post('/summary',summaryController)
router.post('/paragraph',paragraphController)
router.post('/chatbot',chabotController)
router.post('js-converter/',jsconverterController)
router.post('image/',scifiImageController)

module.exports=router
