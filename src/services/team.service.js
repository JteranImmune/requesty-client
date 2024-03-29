import AxiosConfig from "./axios";

class TeamService extends AxiosConfig{
    constructor(){
        super('team');
    }

    async getAllTeam(){
       const response = await this.axios.get('/all');
       return response.data;
    }
}

export default new TeamService();