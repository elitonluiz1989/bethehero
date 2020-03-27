const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        try {
            const { page = 1 } = request.query;
            const offset = (page - 1) * 5;

            const [total] = await connection('incidents')
                .count();

            const incidents = await connection('incidents')
                .join('ngos', 'ngos.id', '=', 'incidents.ngo_id')
                .limit(5)
                .offset(offset)
                .select([
                    'incidents.*', 
                    'ngos.name', 
                    'ngos.email', 
                    'ngos.whatsapp', 
                    'ngos.city', 
                    'ngos.state'
                ]);

            response.header('X-Total-Count', total['count(*)']);
            return response.json(incidents);
        } catch (ex) {
            return response.status(401)
                .json({ error: ex });
        }
    },

    async store(request, response) {
        try {
            const { title, description, value } = request.body;
            const ngo_id = request.headers.authorization;

            const [id] = await connection('incidents').insert({
                title,
                description,
                value,
                ngo_id
            });

            return response.json({ id });
        } catch (ex) {
            return response.status(401)
                .json({ error: ex });
        }
    },

    async delete(request, response) {
        try {
            const { id } = request.params;
            const ngo_id = request.headers.authorization;

            const incident = await connection('incidents')
                .where('id', id)
                .select('ngo_id')
                .first();

            if (incident.ngo_id != ngo_id) {
                return response.status(401)
                    .json({ error: 'Operation not permitted.' });
            }

            await connection('incidents').where('id', id).delete()

            return response.status(204).send();
        } catch (ex) {
            return response.status(401)
                .json({ error: ex });
        }
    }
}