import requestService from "../../services/request.service";
import clientService from "../../services/client.service";

const LoaderDashboardPage = async () =>{

    try {
        
        const [ request, clientList  ]= await await Promise.all([
            requestService.getAllRequest(),
            clientService.getAllClient(),
        ]);
        return {request, clientList};
        
    } catch (error) {

        console.error("Error loading data", error);
        throw error; 
        
    }

}

export default LoaderDashboardPage;