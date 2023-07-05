const dotenv=require('dotenv')
dotenv.config(); 
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
exports.summaryController=async (req,res)=>{
    try {
        const {text}=req.body
        const {data} = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `summarize this \n ${text}`,
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
        if(data){
        if(data.choice[0].text){
            return res.status(200).json(data.choices[0].text)
        }
    }
    } catch (err) {
        console.log(err)
        return res.status(404).json({
            message:err.message
        })
        
    }
}
exports.paragraphController=async (req,res)=>{
    try {
        const {text}=req.body
        const {data} = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `write a detail paragraph about \n ${text}`,
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
        if(data){
        if(data.choice[0].text){
            return res.status(200).json(data.choices[0].text)
        }
    }
    } catch (err) {
        console.log(err)
        return res.status(404).json({
            message:err.message
        })
        
    }
}
exports.chabotController=async (req,res)=>{
    try {
        const {text}=req.body
        const {data} = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Answer question llike a personal assistant.
            Me:'what is your name?'
            personalassistant:'personalassistant'
            Me:${text}`,
            
            temperature: 0.5,
            max_tokens: 300,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
        if(data){
        if(data.choice[0].text){
            return res.status(200).json(data.choices[0].text)
        }
    }
    } catch (err) {
        console.log(err)
        return res.status(404).json({
            message:err.message
        })
        
    }
}
exports.jsconverterController=async (req,res)=>{
    try {
        const {text}=req.body
        const {data} = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: `/*convert these instruction into javascript code \n ${text}`,
            temperature: 2.5,
            max_tokens: 400,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
        if(data){
        if(data.choice[0].text){
            return res.status(200).json(data.choices[0].text)
        }
    }
    } catch (err) {
        console.log(err)
        return res.status(404).json({
            message:err.message
        })
        
    }
}
exports.scifiImageController=async (req,res)=>{
    try {
        const {text}=req.body
        const {data} = await openai.createImage({
         
            prompt: `generate a scific image of\n ${text}`,
            n: 1,
            size: "1024x1024",
        });
        if(data){
        if(data.data[0].url){
            return res.status(200).json(data.data[0].url)
        }
    }
    } catch (err) {
        console.log(err)
        return res.status(404).json({
            message:err.message
        })
        
    }
}