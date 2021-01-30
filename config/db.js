module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "toor",
    DB: "nodejs_on_deman",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};