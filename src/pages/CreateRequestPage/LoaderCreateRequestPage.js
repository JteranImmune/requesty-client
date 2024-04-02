import clientService from "../../services/client.service";
import servicesService from "../../services/services.service";
import teamService from "../../services/team.service";

const LoaderCreateRequestPage = async () => {
    try {
        const [clientList, serviceList, teamList] = await Promise.all([
            clientService.getAllClient(),
            servicesService.getAllServices(),
            teamService.getAllTeam(),
        ]);
        return { clientList, serviceList, teamList };
    } catch (error) {
        console.error("Error loading data", error);
        throw error;
    }
};
export default LoaderCreateRequestPage;