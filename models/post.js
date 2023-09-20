const db = require("./banco")

const Cliente = db.sequelize.define('cliente',{
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.INTEGER
    },
    email:{
        type: db.Sequelize.STRING
    },
    idade:{
        type: db.Sequelize.INTEGER
    },
    cep:{
        type: db.Sequelize.STRING
    },
})

module.exports = Cliente