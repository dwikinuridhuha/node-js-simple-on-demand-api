const path_get_all_order = {
    "/api/customer/order": {
        "get": {
            "tags": [
                "Orders"
            ],
            "summary": "get all order [customer or admin or super admin] role's can get access",
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
                    "description": "get all order data success",
                   
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

const path_get_total_order = {
    "/api/customer/order/check": {
        "get": {
            "tags": [
                "Orders"
            ],
            "summary": "get total bill of order, [customer] role's can get access",
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
                    "description": "get total bill of order",
                   
                },
                "404": {
                    "description": "when no user data order in the database",
                   
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

const path_post_put_delete_order_by_id = {
    "/api/customer/order/:id": {
        "post": {
            "tags": [
                "Orders"
            ],
            "summary": "create a oder by product id, [customer or super admin] role's can access this",
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
            }, {
                "in": "path",
                "name": "id",
                "description": "id of product",
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
                    "description": "can create products by id",
                   
                },
                "400": {
                    "description": "when no data order",
                   
                },
                "403": {
                    "description": "when no token provided or Unauthorized",
                   
                },
                "500": {
                    "description": "when something wrong",
                   
                }
            }
        },
        "put": {
            "tags": [
                "Orders"
            ],
            "summary": "update a oder quantity by product id, [customer or super admin] role's can access this",
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
            }, {
                "in": "path",
                "name": "id",
                "description": "id of order",
                "required": true,
                "schema": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "integer"
                        }
                    }
                }
            }, {
                "in": "body",
                "name": "body",
                "description": "id of product",
                "required": true,
                "schema": {
                    "type": "object",
                    "properties": {
                        "quantity": {
                            "type": "integer"
                        }
                    }
                }
            }],
            "responses": {
                "200": {
                    "description": "can update of quantity product by id",
                   
                },
                "400": {
                    "description": "when no data order",
                   
                },
                "403": {
                    "description": "when no token provided or Unauthorized",
                   
                },
                "500": {
                    "description": "when something wrong",
                   
                }
            }
        },
        "delete": {
            "tags": [
                "Orders"
            ],
            "summary": "delete a order by id, [customer or super admin] role's can access this",
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
            }, {
                "in": "path",
                "name": "id",
                "description": "id of order",
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
                "400": {
                    "description": "when no data order",
                  
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

const path_cancel_the_order = {
    "/api/customer/order/:id/cancel": {
        "put": {
            "tags": [
                "Orders"
            ],
            "summary": "update a order to cancel by id, [customer or super admin] role's can get access",
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
            }, {
                "in": "path",
                "name": "id",
                "description": "id of order",
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
                    "description": "update of order to cancel",
                  
                },
                "404": {
                    "description": "when no user data order in the database",
                   
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

const path_deliver_the_order = {
    "/api/customer/order/:id/deliver": {
        "put": {
            "tags": [
                "Orders"
            ],
            "summary": "update a order to deliver by id, [driver or super admin] role's can get access",
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
            },{
                "in": "path",
                "name": "id",
                "description": "id of order",
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
                    "description": "update of order to deliver",
                   
                },
                "404": {
                    "description": "when no user data order in the database",

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

const path_done_the_order = {
    "/api/customer/order/:id/done": {
        "put": {
            "tags": [
                "Orders"
            ],
            "summary": "update a order to done by id, [driver or super admin] role's can get access",
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
            }, {
                "in": "path",
                "name": "id",
                "description": "id of order",
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
                    "description": "update of order to done",
                  
                },
                "404": {
                    "description": "when no user data order in the database",
                   
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
const pathOrder = {
        ...path_get_all_order,
        ...path_get_total_order,
        ...path_post_put_delete_order_by_id,
        ...path_cancel_the_order,
        ...path_deliver_the_order,
        ...path_done_the_order,
}

const mergeDocOrder = {
    pathOrder
};

module.exports = mergeDocOrder;