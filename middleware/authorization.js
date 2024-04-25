import jwt from 'jsonwebtoken';

export const verifyToken = async(req,res,next)=>{
    try{
        //From the frontEnd we are grabbing the header for Authorization
        let token = req.header("Authorization");

        if(!token){
            return res.status(403).send("Access Denied");
        }

        //If the token starts with Bearer String below condition is get executed
        if(token.startsWith("Bearer ")){
            //The token will slice the first 7 letters and it will trim the "Bearer " word
            token = token.slice(7, token.length).trimLeft();
        }

        //Jwt verify is used to verify the JWT token
        //It contain 2 arguement -> 1) it's the token variable, which presumably contains a JWT generated earlier.
        //                          2) It should match the secret key used when the token was created.
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified;
        next(); // It is used to proceed to the next step of the function. It is passed as an arguement
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
}