import AxiosConfig from "./axios";

class ClientService extends AxiosConfig{
    constructor(){
        super('clients');
    }

    async getAllClient(){
       const response = await this.axios.get('/all');
       
       return response.data;
    }
}

export default new ClientService();