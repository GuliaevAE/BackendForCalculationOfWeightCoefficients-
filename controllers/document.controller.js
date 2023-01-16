const db = require('../db');

class DocumentController {
    async createDocument(req, res) {
        const { title, userId } = req.body
        if (userId === null) {
            return res.json("Неправильно введены данные")
        }
        const exist = await db.query('SELECT EXISTS (SELECT * FROM document WHERE title = ($1) AND user_id=($2))', [title, userId])
        if (!exist.rows[0].exists) {
            console.log('exist', exist.rows[0].exists)
            const newDoc = await db.query('INSERT INTO document (title, user_id) values ($1, $2) RETURNING *', [title, userId])
            res.json('Заявка отправлена')
        } else {
            res.json("Вы уже отправляли заявку на этот документ, она уже была учтена")
        }
    }
    async getDocument(req, res) {
        const videokards = await db.query('SELECT * FROM videokards')
        const motherboards = await db.query('SELECT * FROM motherboards')
        const memoryes = await db.query('SELECT * FROM memoryes')
        const processors = await db.query('SELECT * FROM processors')
        let doc = [].concat(videokards.rows, motherboards.rows, memoryes.rows, processors.rows)
        res.send(doc)
    }
    // async addClientsPart(req, res) {
    //     const { clientid, videokardid } = req.body
    //     const exist = await db.query('SELECT EXISTS (SELECT * FROM clientsvideocards WHERE clientid = ($1) AND videokardid = ($2))', [clientid, videokardid])
    //     if (!exist.rows[0].exists) {
    //         const videokard = await db.query('INSERT INTO clientsvideocards (clientid, videokardid) values ($1, $2)', [clientid, videokardid])
    //         console.log(videokard.rows[0])
    //         res.send({ message: 'Компонент добавлен' })
    //     } else {
    //         res.send({ message: "Комонент добавлен", id: null })
    //     }
    // }
    // async getAllClientParts(req, res) {
    //     const { clientid } = req.body
        

    //     const videokards = await db.query(`select public.videokards.id,             
    //     store,            
    //     type,             
    //     name,             
    //     price,            
    //     link,            
    //     videochipset,     
    //     memory,           
    //     frequency,        
    //     interface,        
    //     frequencymemory,  
    //     processtechnology,
    //     memorybuswidth,   
    //     image,  
    //     typeofmemory  from public.clientsvideocards,public.videokards
    //     where videokards.id=clientsvideocards.videokardid and clientsvideocards.clientid=($1)`, [clientid])
    //     console.log(videokards.rows)
    //     res.send(videokards.rows)

    // }

}

module.exports = new DocumentController()










