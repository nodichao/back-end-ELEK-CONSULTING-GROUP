const jwt = require('jsonwebtoken');

const AuthMiddleware = (req, res, next)=>{

    const token = req.cookies.jwt;

    if(token){
            jwt.verify(token,'jojosecret',(err,decodedToken)=>{
                    if(err){
                        console.log(err);
                        res.status(400).json(err)
                    }else{
                             console.log(decodedToken);
                            next();
                    }
            })
    }else{
        console.log('user is not authenticated');
            res.status(400).json({error :'user is not authenticated'});
    }
}
module.exports = {AuthMiddleware};