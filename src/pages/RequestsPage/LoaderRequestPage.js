import taskService from "../../services/task.service";

const LoaderRequestPage = async () =>{
    const task = await taskService.getAllTask(); 

    return task;
}

export default LoaderRequestPage;