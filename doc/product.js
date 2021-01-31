const path_get_all_product = {
    "/api/merchant/product": {
        "get": {
            "tags": [
                "Products"
            ],
            "summary": "get all product every roles can get access",
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
                    "description": "get products data success"
                },
                "403": {
                    "description": "when no token provided or Unauthorized"
                },
                "500": {
                    "description": "when something wrong"
                }
            }
        },
        "post": {
            "tags": [
                "Products"
            ],
            "summary": "create a product, [merchant] role's can access this",
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
                        },
                        "name": {
                            "type": "string"
                        },
                        "price": {
                            "type": "integer"
                        },
                        "status": {
                            "type": "boolean"
                        }
                    }
                }
            },{
                "in": "body",
                "name": "body",
                "description": "You should pass here",
                "required": true,
                "schema": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string"
                        },
                        "price": {
                            "type": "integer"
                        },
                        "status": {
                            "type": "boolean"
                        }
                    }
                }
            }],
            "responses": {
                "200": {
                    "description": "can create products data success"
                },
                "403": {
                    "description": "when no token provided or Unauthorized"
                },
                "500": {
                    "description": "when something wrong"
                }
            }
        },
        "delete": {
            "tags": [
                "Products"
            ],
            "summary": "delete all product, [merchant or super admin] role's can access this",
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
                    "description": "can delete all products data success"
                },
                "403": {
                    "description": "when no token provided or Unauthorized"
                },
                "500": {
                    "description": "when something wrong"
                }
            }
        }
    }
}

const path_get_open_product = {
    "/api/merchant/product/open": {
        "get": {
            "tags": [
                "Products"
            ],
            "summary": "get open product, [merchant or admin or super admin] role's can access this",
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
                    "description": "can get open products data success",

                },
                "403": {
                    "description": "when no token provided or Unauthorized",

                },
                "500": {
                    "description": "when something wrong",
                }
            }
        }
    }
}

const path_get_close_product = {
    "/api/merchant/product/close": {
        "get": {
            "tags": [
                "Products"
            ],
            "summary": "get close product, [merchant or admin or super admin] role's can access this",
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
                    "description": "can get close products data success"
                },
                "403": {
                    "description": "when no token provided or Unauthorized"
                },
                "500": {
                    "description": "when something wrong"
                }
            }
        }
    }
}

const path_get_put_delete_product_by_id = {
    "/api/merchant/product/:id": {
        "get": {
            "tags": [
                "Products"
            ],
            "summary": "get a product by id, [merchant or admin or super admin] role's can access this",
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
            },
            {
                "in": "path",
                "name": "id",
                "description": "You should pass here",
                "required": true,
                "schema": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        }
                    }
                }
            }],
            "responses": {
                "200": {
                    "description": "can get products by id",
                },
                "403": {
                    "description": "when no token provided or Unauthorized"
                },
                "500": {
                    "description": "when something wrong"
                }
            }
        },
        "put": {
            "tags": [
                "Products"
            ],
            "summary": "update a product by id, [merchant or super admin] role's can access this",
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
            },
            {
                "in": "path",
                "name": "id",
                "description": "You should pass here",
                "required": true,
                "schema": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        }
                    }
                }
            },
            {
                "in": "body",
                "name": "body",
                "description": "You should pass here",
                "required": false,
                "schema": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string"
                        },
                        "price": {
                            "type": "integer"
                        },
                        "status": {
                            "type": "boolean"
                        }
                    }
                }
            }],
            "responses": {
                "200": {
                    "description": "can update products by id"
                },
                "403": {
                    "description": "when no token provided or Unauthorized"
                },
                "500": {
                    "description": "when something wrong"
                }
            }
        },
        "delete": {
            "tags": [
                "Products"
            ],
            "summary": "delete a product by id, [merchant or super admin] role's can access this",
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
            },
            {
                "in": "path",
                "name": "id",
                "description": "You should pass here",
                "required": true,
                "schema": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        }
                    }
                }
            }],
            "responses": {
                "200": {
                    "description": "can delete products by id",
                },
                "403": {
                    "description": "when no token provided or Unauthorized",
                },
                "500": {
                    "description": "when something wrong",
                }
            }
        }
    }
}

const pathProduct = {
        ...path_get_all_product,
        ...path_get_open_product,
        ...path_get_close_product,
        ...path_get_put_delete_product_by_id
}

const mergeDocProducts = {
    pathProduct
};

module.exports = mergeDocProducts;