import { IsOptional, IsPositive } from "class-validator";

/* eslint-disable prettier/prettier */
export class PaginationQueryDto {
    @IsOptional()
    @IsPositive()
    limit: number;

    @IsOptional()
    @IsPositive()
     offset: number;
}