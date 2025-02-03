import UserModel from "../models/User.model.js";
import bcrypt from 'bcryptjs';


/*  POST http://localhost:8080/api/register 
 * @param: {
 *  "username": "example123",
 * "password": "password123",
 * "email": "example@gmail.com",
 * "firstName": "john",
 * "lastName": "doe",
 * "phone": "1234567890",
 * "address": "123, abc street, xyz city",
 * "profilePic": "http://example.com/pic.jpg"
 * }
*/
export async function register(req, res) {
    try {
        const { username, password, profilePic, email } = req.body;

        // Check the existing user
        const existingUsername = await UserModel.findOne({ username });
        if (existingUsername) {
            return res.status(400).send({ error: 'Username already exists' });
        }

        // Check for existing email
        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) {
            return res.status(400).send({ error: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new UserModel({
            username,
            password: hashedPassword,
            profilePic: profilePic || '',
            email,
        });

        // Save the user and return response
        const result = await user.save();
        return res.status(201).send({ msg: "User Registered Successfully", user: result });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

/* POST: http://localhost:8080/api/login */
export async function login(req, res) {
    res.json('login route');
};

/* GET: http://localhost:8080/api/user/example123 */
export async function getUser(req, res) {
    res.json('getUser route');
}


/*  POST http://localhost:8080/api/updateuser
 * @param: {
    "id": "userid",
},
body: {
 *  "username": "example123",
 * "password": "password123",
 * "email": "example@gmail.com",
 * "firstName": "john",
 * "lastName": "doe",
 * "phone": "1234567890",
 * "address": "123, abc street, xyz city",
 * "profilePic": "http://example.com/pic.jpg"
 *  }
 * }
*/
export async function updateUser(req, res) {
    res.json('updateUser route');
}

/* GET: http://localhost:8080/api/generateOTP */
export async function generateOTP(req, res) {
    res.json('generateOTP route');
}

/* GET: http://localhost:8080/api/verifyOTP */
export async function verifyOTP(req, res) {
    res.json('verifyOTP route');
}

/* GET: http://localhost:8080/api/createResetSession */
export async function createResetSession(req, res) {
    res.json('createResetSession route');
}

/* PUT: http://localhost:8080/api/resetPassword */
export async function resetPassword(req, res) {
    res.json('resetPassword route');
}