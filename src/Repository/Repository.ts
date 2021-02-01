import {GetLocation} from './GetLocation';
import {SetLocation} from './SetLocation';

interface IRepository {
    GetLocation: () => any
    Move: () => any
};


const Repository: IRepository = {
    GetLocation: GetLocation,
    Move: SetLocation
};

export default Repository;
