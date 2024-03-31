import clientService from "../../services/client.service";
import servicesService from "../../services/services.service";

const LoaderCreateRequestPage = async () => {
    try {
        const [clientList, serviceList] = await Promise.all([
            clientService.getAllClient(),
            servicesService.getAllServices(),
        ]);
        return { clientList, serviceList };
    } catch (error) {
        console.error("Error loading data", error);
        throw error; // Re-throw the error if you want to handle it outside
    }
};
export default LoaderCreateRequestPage;