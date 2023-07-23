import User from '../model/userSchema.js';;


export const userSignUp = async (request, response) => {

        
        try {
            const exist = await User.findOne({ username: request.body.username });
            if(exist) {
                return response.status(401).json({ message: 'User already exist'});
            }


        const user = request.body;

        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({ msg: 'Signup successfull' });
    } catch (error) {
        return response.status(500).json({ msg: 'Error while signing up user' });
    }
}


export const userLogin = async (request, response) => {
    try {

        const username =request.body.username;
        const password = request.body.password;
        let user = await User.findOne({ username: username, password: password });
        if(user) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        return response.status(500).json('Error: ', error.message);        
    }
}