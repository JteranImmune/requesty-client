import AxiosConfig from "./axios";

class RequestService extends AxiosConfig{
    constructor(){
        super('tasks');
    }

    async getAllRequest(){
       const response = await this.axios.get('/dashboard');
       return response.data;
    }
     
    async createNewRequest(data){
       const response = await this.axios.post('/create', data);
       return response.data;
    }

    async getOneRequest(id){
       const response = await this.axios.get(`/getOne/${id}`);
       return response.data;
    }

    async editOneRequest(id, data) {
      const response = await this.axios.put(`/edit/${id}`, data)
      return response.data
    }
}

export default new RequestService();