const path_signup = {
    "/api/auth/signup": {
        "post": {
            "tags": [
                "Auth"
            ],
            "summary": "register user in system",
            "parameters": [{
                "in": "body",
                "name": "body",
                "description": "You should pass here",
                "required": true,
                "schema": {
                    "type": "object",
                    "properties": {
                        "username": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "password": {
                            "type": "string"
                        }
                    }
                }
            }],
            "responses": {
                "200": {
                    "description": "register user success"
                },
                "400": {
                    "description": "user or email is exist and role does not exist"
                }
            }
        }
    }
}

const path_signin = {
    "/api/auth/signin": {
        "post": {
            "tags": [
                "Auth"
            ],
            "summary": "log in/sign in user in system",
            "parameters": [{
                "in": "body",
                "name": "body",
                "description": "You should pass here",
                "required": true,
                "schema": {
                    "type": "object",
                    "properties": {
                        "username": {
                            "type": "string"
                        },
                        "password": {
                            "type": "string"
                        }
                    }
                }
            }],
            "responses": {
                "200": {
                    "description": "log in/sign in user success"
                },
                "404": {
                    "description": "when user not found if username does not exist"
                },
                "401": {
                    "description": "when password is invalid if password not same with in the database"
                },
                "500": {
                    "description": "when error in database or sever"
                }
            }
        }
    }
}


const pathAuth = {
    ...path_signup,
    ...path_signin
}

const mergeDocAuth = {
    pathAuth
};

module.exports = mergeDocAuth;