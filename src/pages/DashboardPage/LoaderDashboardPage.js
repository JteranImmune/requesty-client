import requestService from "../../services/request.service";

const LoaderDashboardPage = async () =>{
    
    const request = await requestService.getAllRequest(); 

    return request;
}

export default LoaderDashboardPage;