import taskService from "../../services/task.service";

const LoaderDashboardPage = async () =>{
    const task = await taskService.getAllTask(); 

    return task;
}

export default LoaderDashboardPage;