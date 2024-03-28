import AxiosConfig from "./axios";

class TaskService extends AxiosConfig{
    constructor(){
        super('tasks');
    }

    async getAllTask(){
       const response = await this.axios.get('/dashboard');
       return response.data;
    }
}

export default new TaskService();