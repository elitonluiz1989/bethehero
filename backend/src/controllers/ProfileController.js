const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        try {            
            const ngo_id = request.headers.authorization;
            const incidents = await connection('incidents')
                .where('ngo_id', ngo_id)
                .select('*');

            return response.json(incidents);
        } catch(ex) {
            return response.status(401)
                .json({ error: ex });
        }
    }
}