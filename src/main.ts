import RobotApp from './robotApp'
import {Processor} from "./Processor/Processor";


const app = new RobotApp(new Processor());
app.start();

