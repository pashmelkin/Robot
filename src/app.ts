import dotenv from 'dotenv';
import express from 'express';

dotenv.config({
    path: '.env'
});


class Server {
    public app = express();
}

// initialize server app
const server = new Server();

// make server listen on some port
((port = process.env.APP_PORT || 4000) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
