import requestService from "../../services/request.service";

const LoaderRequestPage = async () =>{
    
    const request = await requestService.getAllRequest(); 

    return request;
}

export default LoaderRequestPage;