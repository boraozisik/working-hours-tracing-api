
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateWorkingDayInput {
    id: number;
    day: number;
    name: string;
    email: string;
    mobile?: Nullable<string>;
    company?: Nullable<string>;
    message?: Nullable<string>;
    exitedAt?: Nullable<DateTime>;
}

export class WorkingDay {
    id: number;
    day: number;
    name: string;
    email: string;
    mobile?: Nullable<string>;
    company?: Nullable<string>;
    message?: Nullable<string>;
    exitedAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract workingDays(): Nullable<WorkingDay>[] | Promise<Nullable<WorkingDay>[]>;

    abstract workingDay(id: number): Nullable<WorkingDay> | Promise<Nullable<WorkingDay>>;
}

export abstract class IMutation {
    abstract createWorkingDay(createWorkingDayInput: CreateWorkingDayInput): WorkingDay | Promise<WorkingDay>;
}

export type DateTime = any;
type Nullable<T> = T | null;
