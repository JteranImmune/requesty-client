import AxiosConfig from "./axios";

class ServicesService extends AxiosConfig{
    constructor(){
        super('service');
    }

    async getAllServices(){
       const response = await this.axios.get('/list');
       return response.data;
    }
}

export default new ServicesService();