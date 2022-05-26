import { knex } from "../config/database";
import * as bcrypt from 'bcryptjs'

export const welcomeFn = (req, res) => {
    return res.status(200).json({"message":"welcome, stranger"})
};

export const getAll = async (req, res) => {
    
        const results = await knex('users')
        
        return res.status(200).json(results)
}

export const getById = async (req, res) => {

    const {user_id}= req.params

    const result = await knex('users').where({id : user_id})

    return res.status(200).json(result)
}

export const createUser = async (req, res) => {

    try {
        const user = req.body;

        const hashedPassword = await bcrypt.hash(user.password, 10);

        const data = {
            email: user.email,
            password: hashedPassword,
        }

        await knex('users').insert(data)

        const registered = await knex('users').where({email: user.email})

        return res.status(201).json(registered)
    } catch (e) {
        return res.status(400).json({erro: "Não foi possivel cadastrar o usuário", error: e})
    }

};

export const updateUser = async (req, res) => {
    try {
        const {user_id } = req.params
        const {email, password} = req.body;

        if (password && email) {
            const hashedPassword = await bcrypt.hash(password, 10);
            
            await knex('users').update({email, password: hashedPassword}).where({id: user_id})

            return res.json({"Message":"User information has been updated successfully"})
        }
        if (password && !email){
            const hashedPassword = await bcrypt.hash(password, 10);
            
            await knex('users').update({password: hashedPassword}).where({id: user_id})

            return res.status(200).json({"Message":"User password has been updated successfully"})
        }

        if (email && !password) {
            
            await knex('users').update({email}).where({id: user_id})

            return res.json({"Message":"User email has been updated successfully"})
        }

    } catch(e){
        return res.status(e.status).json({"Error": "Something went wrong"})
    }
};

export const deleteAll = async (req, res) => {
    
    await knex('users')
                .del()

                return res.status(204).send()
};

export const deleteUser = async (req, res) => {

    const {user_id} = req.params;

    await knex('users')
            .del().where({id: user_id})

            return res.status(204).send()
};
