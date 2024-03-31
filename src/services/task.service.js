import AxiosConfig from "./axios";

class TaskService extends AxiosConfig{
    constructor(){
        super('tasks');
    }

    async getAllTask(){
       const response = await this.axios.get('/dashboard');
       return response.data;
    }
     
    async createNewTask(data){
       const response = await this.axios.post('/create', data);
       return response.data;
    }
}

export default new TaskService();