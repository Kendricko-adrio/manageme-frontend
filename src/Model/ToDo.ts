export type ToDo = {
    ID?: number;
    CreatedAt?: Date;
    UpdatedAt?: Date;
    DeletedAt?: Date;
    task_title?: string;
    task_description?: string;
    task_type_id?: number;
    user_id?:number;
};
