const path_get_board_open = {
    "/api/test/all": {
        "get": {
            "tags": [
                "Pages"
            ],
            "summary": "get page public all role's can get access",
            "responses": {
                "200": {
                    "description": "get public page"
                }
            }
        }
    }
}

const path_get_board_SuperAdmin = {
    "/api/test/super-admin": {
        "get": {
            "tags": [
                "Pages"
            ],
            "summary": "get page super admin [super admin] role's can get access",
            "parameters": [{
                "in": "header",
                "name": "x-access-token",
                "description": "You should pass here",
                "required": true,
                "schema": {
                    "type": "object",
                    "properties": {
                        "token": {
                            "type": "apiKey"
                        }
                    }
                }
            }],
            "responses": {
                "200": {
                    "description": "get public super admin page"
                }
            }
        }
    }
}

const path_get_board_admin = {
    "/api/test/admin": {
        "get": {
            "tags": [
                "Pages"
            ],
            "summary": "get page admin [admin] role's can get access",
            "parameters": [{
                "in": "header",
                "name": "x-access-token",
                "description": "You should pass here",
                "required": true,
                "schema": {
                    "type": "object",
                    "properties": {
                        "token": {
                            "type": "apiKey"
                        }
                    }
                }
            }],
            "responses": {
                "200": {
                    "description": "get public admin page"
                }
            }
        }
    }
}

const path_get_board_customer = {
    "/api/test/customer": {
        "get": {
            "tags": [
                "Pages"
            ],
            "summary": "get page customer [customer] role's can get access",
            "parameters": [{
                "in": "header",
                "name": "x-access-token",
                "description": "You should pass here",
                "required": true,
                "schema": {
                    "type": "object",
                    "properties": {
                        "token": {
                            "type": "apiKey"
                        }
                    }
                }
            }],
            "responses": {
                "200": {
                    "description": "get public customer page"
                }
            }
        }
    }
}

const path_get_board_driver = {
    "/api/test/driver": {
        "get": {
            "tags": [
                "Pages"
            ],
            "summary": "get page driver [driver] role's can get access",
            "parameters": [{
                "in": "header",
                "name": "x-access-token",
                "description": "You should pass here",
                "required": true,
                "schema": {
                    "type": "object",
                    "properties": {
                        "token": {
                            "type": "apiKey"
                        }
                    }
                }
            }],
            "responses": {
                "200": {
                    "description": "get public driver page"
                }
            }
        }
    }
}

const path_get_board_merchant = {
    "/api/test/merchant": {
        "get": {
            "tags": [
                "Pages"
            ],
            "summary": "get page merchant [merchant] role's can get access",
            "parameters": [{
                "in": "header",
                "name": "x-access-token",
                "description": "You should pass here",
                "required": true,
                "schema": {
                    "type": "object",
                    "properties": {
                        "token": {
                            "type": "apiKey"
                        }
                    }
                }
            }],
            "responses": {
                "200": {
                    "description": "get public merchant page"
                }
            }
        }
    }
}
const patUsers = {
    ...path_get_board_SuperAdmin,
    ...path_get_board_admin,
    ...path_get_board_customer,
    ...path_get_board_driver,
    ...path_get_board_merchant,
    ...path_get_board_open
}

const mergeDocPageUsers = {
    patUsers
};

module.exports = mergeDocPageUsers;