export interface Task {
    taskId?:number;
    projectId?:number;
    taskTitle:number;
    taskDescription:string;
    assignedTo:number;
    status:string;
    dueDate:Date;
    startDate:Date;
    completedDate:Date;
    priority:string
    

}
