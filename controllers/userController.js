const User = require('../models/userModel');
const { use } = require('../routes/userRoutes');

const createUser = async (req, res) => {
    const { firstName, lastName, email, age } = req.body;

    if(!firstName || !lastName || !email || !age){
        return res.status(400).send("Missing data!");
    }

    try{
        const user = await User.create({
            firstName,
            lastName,
            email,
            age
        });

        res.status(201).send("User created successfully!");

    } catch(error) {
        res.status(500).send("User creation unsuccessful. Error: ", error);
    }
}

const getAllUsers = async (req, res) => {
    try{
        const users = await User.findAll({
            attributes : { exclude : ['id', 'createdAt', 'updatedAt']}
        });
        res.status(200).send(users);

    } catch(error){
        res.status(500).send("Error: ", error);
    }
}

const getOneUser = async(req, res) => {
    const { id } = req.params;

    if(!id){
        return res.status(400).send("User Identification Missing!");
    }

    try{
        const user = await User.findOne({
            where : {id : id},
            attributes : {exclude : ['id', 'createdAt', 'updatedAt']}
        });

        if(!user){
            return res.status(404).send("User not found");
        }

        res.status(200).send(user);

    } catch(error){
        res.status(500).send(error);
    }
}

const updateUser = async(req, res) => {
    const { id } = req.params;
    const updates = req.body;

    if(!id || !updates){
        return res.status(400).send("Data missing");
    }

    console.log("updates: ", updates);

    try{
        const [updated] = await User.update(updates, {
            where : { id : id }
        });

        if(!updated){
            return res.status(400).send("user not found");
        }

        res.status(200).send("User updated successfully");

    } catch(error){
        res.status(500).send(error);
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    if(!id){
        return res.status(400).send("Data missing!");
    }

    try{
        const user = await User.findOne({
            where : { id : id }
        });

        if(!user){
            return res.status(404).send("User not found");
        }

        await user.destroy();

        res.status(200).send("User deleted successfully");

    } catch(error) {
        res.status(500).send(error);
    }
}

module.exports = { createUser, getAllUsers, getOneUser, updateUser, deleteUser };