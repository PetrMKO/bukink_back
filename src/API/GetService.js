import axios from "axios"
import data from './testDataBases/db.json'
export default class getService{

    static async getCLueCities(part){
        const url = `https://bukink-back.herokuapp.com/cities/part?part=${part}`
        // console.log(url);
        const response = await axios.get(url)
        return response;
    }

    static async getTopCities(count){
        const url = `http://localhost:3030/topCities?_limit=${count}`
        // console.log(url);
        const response = await axios.get(url)
        return response;
    }

    static async getHotels(){
        const url = `http://localhost:3030/hotels`
        const response = await axios.get(url)
        return response;
    }

    static async getHotelById(id){
        const url = `http://localhost:3030/hotels?id=${id}`
        return await axios.get(url)
    }
}

