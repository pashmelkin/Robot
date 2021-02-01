import express from 'express';

class RobotApp {
    public app: express.Application;
    public port: number;


    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default RobotApp;
