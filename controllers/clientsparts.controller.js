const db = require('../db');

class ClientsPartsController {

    async addClientsPart(req, res) {
        const { clientid, moduleid, type } = req.body
        switch (type) {
            case 'Видеокарта':
                const videokardExist = await db.query('SELECT EXISTS (SELECT * FROM clientsvideocards WHERE clientid = ($1) AND videokardid = ($2))', [clientid, moduleid])
                if (!videokardExist.rows[0].exists) {
                    const videokard = await db.query('INSERT INTO clientsvideocards (clientid, videokardid) values ($1, $2)', [clientid, moduleid])
                    console.log('videokard', videokard.rows[0])
                    res.send({ message: 'Компонент добавлен!' })
                } else {
                    res.send({ message: "Компонент уже был добавлен раньше!" })
                }
                break;
            case 'Процессор':
                const processorExist = await db.query('SELECT EXISTS (SELECT * FROM clientsprocessors WHERE clientid = ($1) AND processorid = ($2))', [clientid, moduleid])
                if (!processorExist.rows[0].exists) {
                    const processor = await db.query('INSERT INTO clientsprocessors (clientid, processorid) values ($1, $2)', [clientid, moduleid])
                    console.log('processor', processor.rows[0])
                    res.send({ message: 'Компонент добавлен' })
                } else {
                    res.send({ message: "Компонент уже был добавлен раньше!" })
                }
                break;
            case 'Оперативная память':
                const memoryExist = await db.query('SELECT EXISTS (SELECT * FROM clientsmemoryes WHERE clientid = ($1) AND memoryid = ($2))', [clientid, moduleid])
                if (!memoryExist.rows[0].exists) {
                    const memory = await db.query('INSERT INTO clientsmemoryes (clientid, memoryid) values ($1, $2)', [clientid, moduleid])
                    console.log('memory', memory.rows[0])
                    res.send({ message: 'Компонент добавлен' })
                } else {
                    res.send({ message: "Компонент уже был добавлен раньше!" })
                }
                break;
            case 'Материнская плата':
                const motherboardExist = await db.query('SELECT EXISTS (SELECT * FROM clientsmotherboards WHERE clientid = ($1) AND motherboardid = ($2))', [clientid, moduleid])
                if (!motherboardExist.rows[0].exists) {
                    const motherboard = await db.query('INSERT INTO clientsmotherboards (clientid, motherboardid) values ($1, $2)', [clientid, moduleid])
                    console.log('motherboard', motherboard.rows[0])
                    res.send({ message: 'Компонент добавлен' })
                } else {
                    res.send({ message: "Компонент уже был добавлен раньше!" })
                }
                break;

            default:
                break;
        }

    }
    async getAllClientParts(req, res) {
        const { clientid } = req.body
        const videokards = await db.query(`select public.videokards.id,             
        store,            
        type,             
        name,             
        price,            
        link,            
        videochipset,     
        memory,           
        frequency,        
        interface,        
        frequencymemory,  
        processtechnology,
        memorybuswidth,   
        image,  
        typeofmemory  from public.clientsvideocards,public.videokards
        where videokards.id=clientsvideocards.videokardid and clientsvideocards.clientid=($1)`, [clientid])
        // console.log('videokards.rows', videokards.rows)


        const processors = await db.query(`select public.processors.id,             
        store,            
        type,             
        name,             
        price,            
        link,            
        nucleus,                           
        frequency,                           
        socket ,                           
        numberofthreads,                           
        heatdissipation ,                           
        memorytype,                           
        maxmemory,                           
        numberofcores,                           
        numberofchannels,                           
        processtechnology,                           
        graphicscorefrequency,                           
        modelgraphickernel,                           
        frequencymemory,                           
        image from public.clientsprocessors,public.processors
        where processors.id=clientsprocessors.processorid and clientsprocessors.clientid=($1)`, [clientid])
        // console.log('processors.rows', processors.rows)



        const memoryes = await db.query(`select public.memoryes.id,             
        store,            
        type,             
        name,             
        price,            
        link,            
        capacity,                                      
        frequency,                                     
        latency,                                       
        delays,                                        
        formfactor,                                    
        memorytype,                                    
        numberofmodules,                               
        volumemodule,                                  
        image  from public.clientsmemoryes,public.memoryes
        where memoryes.id=clientsmemoryes.memoryid and clientsmemoryes.clientid=($1)`, [clientid])
        // console.log('memoryes.rows', memoryes.rows)


        const motherboards = await db.query(`select public.motherboards.id,             
        store,            
        type,             
        name,             
        price,            
        link,            
        socket,
        chipset,
        memorytype,
        maxmemoryfrequency,
        maxmemory,
        numberofmemorychannels,
        numberofslotspcie1,
        formfactor,
        supportedmemorytype,
        numberofmemoryslots,
        image from public.clientsmotherboards,public.motherboards
        where motherboards.id=clientsmotherboards.motherboardid and clientsmotherboards.clientid=($1)`, [clientid])
        // console.log('memoryes.rows', motherboards.rows)



        let doc = [].concat(videokards.rows, motherboards.rows, memoryes.rows, processors.rows)
        console.log('doc',doc)
        res.send(doc)
        // res.send(motherboards.rows)

    }

}

module.exports = new ClientsPartsController()









    
