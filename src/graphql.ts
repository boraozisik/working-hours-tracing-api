
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateWorkingDayInput {
    day: number;
    name: string;
    email: string;
    mobile?: Nullable<string>;
    company?: Nullable<string>;
    message?: Nullable<string>;
    exitedAt?: Nullable<DateTime>;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
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
    abstract workingDays(orderBy?: Nullable<OrderByParams>): Nullable<WorkingDay>[] | Promise<Nullable<WorkingDay>[]>;

    abstract workingDay(id: number): Nullable<WorkingDay> | Promise<Nullable<WorkingDay>>;

    abstract totalWorkingHours(): number | Promise<number>;
}

export abstract class IMutation {
    abstract createWorkingDay(createWorkingDayInput: CreateWorkingDayInput): WorkingDay | Promise<WorkingDay>;
}

export class Result {
    total: number;
}

export abstract class ISubscription {
    abstract totalUpdated(): Nullable<Result> | Promise<Nullable<Result>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
