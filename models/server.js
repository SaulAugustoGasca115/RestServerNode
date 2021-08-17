const express = require('express')
const cors = require('cors')

class Server{

    constructor()
    {
        this.app = express()
        this.port = process.env.PORT
        this.userRoutePath = '/api/users'

        //Middlewares
        this.middlewares()


        //Routes of my app
        this.routes()
    }

    middlewares()
    {   
        //CORS
        this.app.use(cors())

        //Parseo y lecturta body
        this.app.use(express.json())


        //Directorio público
        this.app.use(express.static('public'))
    }

    routes()
    {
       this.app.use(this.userRoutePath,require('../routes/users'))
    }

    listen()
    {
        this.app.listen(this.port,() => {
            console.log("Listen Succcesfuly in PORT: ",this.port)
        })
    }

}

module.exports = Server