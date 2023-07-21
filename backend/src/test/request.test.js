const supertest = require("supertest");
const app = require("../index");

const request = supertest(app);

describe('Test de las rutas del servidor', () => {
    it('GET / deberia devorver un arreglo de solicitudes', async() => {
        const response = request.get('/api/solicitudes')
        expect((await response).status).toBe(200);
        expect(Array.isArray((await response).body)).toBe(true);
    });

    it('POST / deberia agregar una nueva solicitud', async() => {
        const newRequest = {
            nombre: 'Nombre',
            correo: 'correo@example.com',
            tel: "3006397804",
            solicitud: 'Ejemplo solicitud',
            comentario: 'Comentario de ejemplo'
        }

        const response = await request.post("/api/solicitudes").send(newRequest);
        expect(response.status).toBe(200)
    });

    it('DELETE / deberia eliminar una solicitud', async() => {
        const id = 1;
        const response = await request.delete(`/api/solicitudes/${id}`);
        expect(response.status).toBe(200);
    });

    it('PUT / deberia modificar una solicitud', async() => {
        const id = 1;
        const requestModifyed = {
            solicitud: 'Solicitud modificada',
            commentario: 'Comentario modificado'
        }

        const response = await request.put(`/api/solicitudes/${id}`).send(requestModifyed)
        expect(response.status).toBe(200);
    });
});
