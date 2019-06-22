import { GenericRestClient, ApiCallOptions }  from 'simplerestclients';
import SyncTasks  from 'synctasks';

// const voxyFunctionRemote = (text:string):Promise<string> => {
//     var fnc = ()=>text.length.toString();
//     return new Promise<string>((resolve, reject) => resolve(fnc()));
// }

const voxyFunctionRemote = (text:string):SyncTasks.Promise<string> => new VoxyFunction().get(text);
export default voxyFunctionRemote;

class VoxyFunction extends GenericRestClient {
    constructor() {
        super('http://localhost:3000');
    }

    protected _getHeaders(options: ApiCallOptions): { [key: string]: string } {
        let headers = super._getHeaders(options);
        headers["Access-Control-Allow-Origin"] = "*";
        headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";
    
        return headers;
    }

    get(text: string): SyncTasks.Promise<string> {
        return this.performApiGet<string>('/?text=' + text);
    }
}