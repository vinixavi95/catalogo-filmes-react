
const arrayFilmes = require('./model/arrayFilmes');

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 2000,
        host: 'localhost',

    });

    server.route({
        method: 'GET', // 2 - method - This is the HTTP method that is associated with the route. The methods include GET, POST, PUT, DELETE, and PATCH
        path: '/', // 1 - path - This is the route that will be specified on a URL.
        handler: (req, res) => { // 3 - handler function - This is the function that will run when the route is called. This function takes two parameters, req, and reply. 

            return (arrayFilmes.filmes)
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err)=> {

    console.log(err);
    process.exit(1);
});

init();