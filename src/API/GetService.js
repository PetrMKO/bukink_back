import axios from "axios"
import data from './clue.json'
export default class getService{
    static async getCLueCities(part){

        // const response = await axios.get('src/API/clue.json')


        // console.log(data);
        return data;
    }
}