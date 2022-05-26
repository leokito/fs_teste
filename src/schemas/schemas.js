import * as yup from 'yup';

export const userSchema = yup.object().shape({
    username: yup.string().required(),
    age: yup.number().integer().positive().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(4).transform( (value, originalValue) => {
        return bcrypt.hashSync(originalValue, 10);}),
    createdOn: yup.date().default(function () {
        return new Date()
    }),
    uuid: yup.string().default(() => {return uuidv4()}).transform((value, originalValue) => {
        return uuidv4()  
    })
});