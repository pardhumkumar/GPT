const errorResponse = require("../utils/errorResponse");

const errorHandler = (err ,req, res, next)=>{
    let error = {...err};
    error.message = err.message ;

    // mongoose error
    if(err.name === 'castError'){
        const message = 'Resource not found';
        error = new errorResponse(message, 404);                            // error or err
    }

    // duplicate key error
    if(err.code === 11000){
        const message = 'duplicate field value entered';
        error = new errorResponse(message, 404);
    }

    // mongoose validation
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val=>val.message);
        error = new errorResponse(message ,400);
        res.status(error.statusCode || 500).json({
            success : false,
            error : error.message || 'Server error'
        });
    }
};

module.exports = errorHandler;