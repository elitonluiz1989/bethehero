const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        try {            
            const { id } = request.body;
            const ngo = await connection('ngos')
                .where('id', id)
                .select('name')
                .first();

            if (!ngo) {
                return response()
                    .status(400)
                    .json({ error: "NO NGO found with this ID." });
            }

            return response.json(ngo);
        } catch(ex) {
            return response.status(401)
                .json({ error: ex });
        }
    }
}