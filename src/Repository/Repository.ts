import {GetLocation} from './GetLocation';
import {SetLocation} from './SetLocation';
import {ILocation} from "../models/Interfaces/ILocation";

interface IRepository {
    GetLocation: () => string
    Move: () => any
};


export class Repository implements IRepository {
    location: ILocation;
    constructor()
    {
        //this.location = new ILocation("direction", 0, 0);
    }
    Move ()
    {
        SetLocation();
    }

    GetLocation (): string
    {
        return GetLocation();
    }

}

