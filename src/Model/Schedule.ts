export type Schedule = {
    ID?: number;
    CreatedAt?: Date;
    UpdatedAt?: Date;
    DeletedAt?: Date;
    description?: string;
    schedule_type_id: number;
    deadline: string;
    user_id: number;
};
