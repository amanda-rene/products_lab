module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {names, descriptions, price, img_url} = req.body;

        dbInstance.create_product([names, descriptions. price, img_url])
        .then( () => res.sendStatus(200) )
        .catch (err => {
            res.status(500).send({errorMessage: `Well that won't work`});
            console.log(err)
        })
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;

        dbInstance.read_product(id)
        .then( product => res.status(200).send(product) )
        .catch( err => {
            res.status(500).send({errorMessage: `Well that won't work`});
            console.log(err)
        });
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
        .then( () => res.status(200).send(product) )
        .catch( err => {
            res.status(500).send({errorMessage: `Well that won't work`});
            console.log(err)
        });
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;

        dbInstance.update_product()
        .then( () => res.status(200).send(product) )
        .catch( err => {
            res.status(500).send({errorMessage: `Well that won't work`});
            console.log(err)
        });
    },
    
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;

        dbInstance.deleteProduct()
        .then( () => res.status(200).send(product) )
        .catch( err => {
            res.status(500).send({errorMessage: `Well that won't work`});
            console.log(err)
        });
    }
    
};