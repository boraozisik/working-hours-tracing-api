import { registerEnumType } from '@nestjs/graphql';

export enum WorkingDayScalarFieldEnum {
    id = "id",
    day = "day",
    exitedAt = "exitedAt",
    name = "name",
    email = "email",
    mobile = "mobile",
    message = "message",
    company = "company"
}


registerEnumType(WorkingDayScalarFieldEnum, { name: 'WorkingDayScalarFieldEnum', description: undefined })
