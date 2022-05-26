import express from "express";

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

export const authorizedUser = (req, res, next) => {
    if(req.user.uuid != req.params.uuid){
        return res.status(403).json({"Access Denied": "Could not change password."})
    }
    next();
};

export const authenticatedUser = (req, res, next) => {
    if (req.headers.authorization === undefined) {
        return res.status(401).json({"Access Denied": "Unauthorized to access this resource."})
    }
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({"message": "Invalid Token"});
        }
        const user = users.find(user => user.username === decoded.username);
        req.user = user;   
        next();
    });
};

