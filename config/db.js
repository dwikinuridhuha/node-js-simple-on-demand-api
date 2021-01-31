// if use postgres
// module.exports = {
//     HOST: "localhost",
//     USER: "postgres",
//     PASSWORD: "toor",
//     DB: "nodejs_on_deman",
//     dialect: "postgres",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };

// if use sqlite
module.exports = {
    host: 'localhost',
    dialect: 'sqlite',
    operatorsAliases: false,
    storage: './data/database.db',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
};
