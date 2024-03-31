import clientService from "../../services/client.service";

const LoaderClientPage = async () =>{

    const userClient = await clientService.getAllClient(); 

    return userClient;
}

export default LoaderClientPage;