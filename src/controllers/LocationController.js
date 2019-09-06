// const Manicure = require('./../models/Manicure')
const sequelize = require('./../models/sequilize');
const Manicure = sequelize.import('./../models/Manicure');


module.exports = {
    async index(req, res) {
        // Retorna Paginado
        // const manicures = await Manicure.findAndCountAll();
        const manicures = await Manicure.findAll({
            order: [ [ 'username', 'ASC' ]],
        });
        return res.status(200)
            .json(manicures);
    },
    async store(req, res) {

        const manicureRequest = req.body;
        

        // Verifica se existe o E-mail
        const existsManicure = await Manicure.findOne({
            where : {email: manicureRequest.email}
        });

        if(existsManicure) {
            return res.status(401)
                .json({
                    status : false,
                    message: `Opss, o email: '${manicureRequest.email}' já está cadastrado`,
                });
        }
        const data = await Manicure.create(manicureRequest);

        return res.status(200)
            .json(data);
        
    },
    async getManicure(req, res) {
        const { id } = req.params;
        const manicure = await Manicure.findByPk(id);
        return res.status(200)
            .json(manicure);
    },
    async deleteManicure(req, res) {
        const { id } = req.params;
        const manicure = await Manicure.findByPk(id);
        console.log(manicure)
        return res.status(200)
            .json(manicure);
    },
   



};