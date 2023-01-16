const db = require('../db');

class UserController {
    async registration(req, res) {
        const { email, password } = req.body

        const exist = await db.query('SELECT EXISTS (SELECT * FROM clients WHERE email = ($1))', [email])
        if (!exist.rows[0].exists) {

            console.log('exist', exist.rows[0].exists)
            const newDoc = await db.query('INSERT INTO clients (email, password) values ($1, $2) RETURNING *', [email, password])
            res.send('Пользователь зарегестирирован')

        } else {
            res.send("Пользователь с такой почтой уже существует")
        }


    }
    async login(req, res) {
        const { email, password } = req.body
        const exist = await db.query('SELECT EXISTS (SELECT * FROM clients WHERE email = ($1) AND password = ($2))', [email, password])
        if (!exist.rows[0].exists) {
            res.send({message:"Неправильно введены логин или пароль", id:null})
        } else {
            const user = await db.query('SELECT * FROM clients WHERE email = ($1) AND password = ($2)', [email, password])
            console.log(user)
            res.send({message:'Пользователь залогинен',id:user.rows[0].id})
        }



        // const videokards = await db.query('SELECT * FROM videokards')
        // const motherboards = await db.query('SELECT * FROM motherboards')
        // const memoryes = await db.query('SELECT * FROM memoryes')
        // const processors = await db.query('SELECT * FROM processors')
        
        // let doc = [].concat(videokards.rows,motherboards.rows,memoryes.rows,processors.rows)
        

        
        // res.send(doc)

    }
    
}

module.exports = new UserController()