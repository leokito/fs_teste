export const validate = (schema) => async (req, res, next) => {
    const resource = req.body;
    try {
        const validatedData = await schema.validate(resource, {stripUnknown: true});
        console.log(validatedData)
        req.validatedData = validatedData
        next();
    } catch(e) {
        console.log(e)
        res.status(422).json({error: e.errors.join(', ')});
    };
}