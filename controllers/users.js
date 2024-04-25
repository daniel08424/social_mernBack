import User from '../models/User.js'

//Read the user
export const getUser = async(req,res)=>{
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    }
    catch(err){
        res.status(404).json({message : err.message});
    }
}

//Read the Users Friends
export const getUserFriends = async(req,res) =>{
    try{
        const { id} = req.params;
        const user = await User.findById(id);

        /* user.friends is an array that holds the IDs of the user's friends. 
           user.friends.map((id) => This line maps over each ID in the user.friends array and retrieves corresponding user objects */
        const friends = await Promise.all( // Promise.all => It allows you to execute multiple promises concurrently.
            user.friends.map((id)=> User.findById(id))
        )

        //WE have to format the friends data to get accessed by the FRONTEND 
        const formattedFriends = friends.map(
            ({_id, firstName, lastName, occupation, location, picturePath}) =>{
                return {_id, firstName, lastName, occupation, location, picturePath};
            }
        );

        res.status(200).json(formattedFriends);
    }
    catch(err){
        res.status(404).json({message : err.message});
    }
}

//Update the users friend by adding and removing
export const addRemoveFriend = async(req,res) =>{
    try{
        const { id, friendId} = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        if(user.friends.includes(friendId)){ //This condition checks if the friendId is already present in the user's list of friends
            //This code filters out the friendId from user.friends and id from friend.friends, effectively removing the friendship relationship between the two users.
            user.friends = user.friends.filter((id) => id !== friendId); 
            friend.friends = friend.friends.filter((id) => id !== id); 
        }
        else{
            //If they are not yet friends, it adds the friendId to user's list of friends and the id to friend's list of friends:
            user.friends.push(friendId);
            friend.friends.push(id);
        }

        await user.save();
        await friend.save();

        /* user.friends is an array that holds the IDs of the user's friends. 
           user.friends.map((id) => This line maps over each ID in the user.friends array and retrieves corresponding user objects */
        const friends = await Promise.all( // Promise.all => It allows you to execute multiple promises concurrently.
            user.friends.map((id)=> User.findById(id))
        )

        //WE have to format the friends data to get accessed by the FRONTEND 
        const formattedFriends = friends.map(
            ({_id, firstName, lastName, occupation, location, picturePath}) =>{
                return {_id, firstName, lastName, occupation, location, picturePath};
            }
        );

        res.status(200).json(formattedFriends);
    }
    catch(err){
        res.status(404).json({message : err.message});
    }
}