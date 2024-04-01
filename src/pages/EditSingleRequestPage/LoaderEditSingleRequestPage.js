import teamService from "../../services/team.service";

const LoaderEditRequestSinglePage = async () => {
    try {
        const teamList = await teamService.getAllTeam()
        return teamList;
    } catch (error) {
        console.error("Error loading data", error);
        throw error; 
    }
};
export default LoaderEditRequestSinglePage;