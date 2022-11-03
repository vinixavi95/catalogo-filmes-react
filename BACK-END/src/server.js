
const GetFilmes = require('./controller').GetFilmes
const cors = require('cors')

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 2001,
        host: 'localhost',
        routes: {
            cors: true
        }
    });

    GetFilmes(server)

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err)=> {

    console.log(err);
    process.exit(1);
});

init();