import teamService from "../../services/team.service";

const LoaderTeamPage = async () =>{

    const userTeam = await teamService.getAllTeam(); 

    return userTeam;
}

export default LoaderTeamPage;