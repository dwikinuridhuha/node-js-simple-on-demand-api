const intro = {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "on demand api",
        "description": "simple on demand api <br/><br/> if login with super admin = {username: superAdmin, password=password} <br/> if login with admin = {username: admin, password=password} <br/> if login with customer = {username: customer, password=password} <br/> if login with merchant = {username: merchant, password=password} <br/> if login with driver = {username: driver, password=password} <br><br><strong>Note:</strong>Untuk Mencoba API ini di sarankan mengunakan software API Client seperti insomnia atau postman",
        "license": {
            "name": "GPL 2.0",
            "url": "https://www.gnu.org/licenses/gpl-2.0.html"
        }
    },
    "host": "localhost:8000", //buat local aja
    // "host": `node-js-simple-on-demand-api.herokuapp.com`,
    "basePath": "/",
    "tags": [{
        "name": "on demand",
        "description": "API for simple users in on demand system"
    }],
    "schemes": [
        "http"
    ],
    "consumes": [
        "application/json"
    ],
    "produces": [
        "application/json"
    ]
}

module.exports = intro;