export interface Task {
    TaskId?:number;
    ProjectId?:number;
    TaskTitle:number;
    TaskDescription:string;
    AssignedTo:number;
    Status:string;
    DueDate:Date;
    StartDate:Date;
    CompletedDate:Date;
    Priority:string

}
