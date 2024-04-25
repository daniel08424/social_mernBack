import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// REGISTER USER
export const register = async(req,res)=>{
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
          } = req.body;
          /*This is a method provided by the bcrypt library that generates a “salt”.
           A salt is a random string that is used to add additional data to the password 
           before hashing it. This makes the hash more secure.*/
          const salt = await bcrypt.genSalt();

          /* It takes two arguments: the password you want to hash and the salt.
          The salt is combined with the password to create a unique hash, 
          even if the same password is used elsewhere. */
          const passwordHash = await bcrypt.hash(password, salt); // Hash is a function that returns a fixed-size string of bytes

          const newUser = new User({
            firstName,
            lastName,
            email,
            password : passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile : Math.floor(Math.random() * 10000),
            impressions :  Math.floor(Math.random() * 10000)
          });

          const savedUser = await newUser.save(); //save() is used in mongoose as an alternate for the insertOne()
          //if there is no error and send the status code of 201 that something has been created.
          //the frontEnd can receive response from this .json(savedUser).
          res.status(201).json(savedUser);

    }
    catch(err){
        res.status(500).json({error : err.message});
    }
};

//LOGGING IN USER

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        //Find the user with the email id that is written in login page
        //get all the information using findOne mongoDb functiom
        const user = await User.findOne({email : email});

        if(!user) return res.status(400).json({msg : "User does not exist"});

        //Compare the password of the user that is already stored in the mongodb database,
        //with the entered password in the login page
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({msg : "Invalid Credentials. "});

        //JWT token is used here.
        const token = jwt.sign({ id : user._id} , process.env.JWT_SECRET);
        /* jwt.sign(): This is a method from the jsonwebtoken library used to generate a JWT.
         It takes two main arguments:
        *The first argument is the payload that you want to include in the token. 
                In this case, it's an object { id: user._id }, where user._id is likely a unique identifier for a user.
        * The second argument is the secret key used to sign the token. 
                In this case, it's process.env.JWT_SECRET, which suggests that the secret key is stored in an environment variable named JWT_SECRET. It's a good practice to keep the secret key separate from your code for security reasons. */

        //We dont want to send the password to frontEnd so we delete it.
        delete user.password;
        res.status(200).json({token, user});
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
}