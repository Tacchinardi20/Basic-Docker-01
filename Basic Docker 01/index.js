const fastify = require('fastify');

const app = fastify ({
    logger: true
});

const nodeEnv = process.env.NODE_ENV || 'development';

app.get('/', async () => {
    return {
        status: 'OK',
        nodeEnv
    }
});

app.listen(3000, '0.0.0.0')