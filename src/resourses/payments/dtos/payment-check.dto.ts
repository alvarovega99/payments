import {
    IsOptional,
    IsString,
} from 'class-validator';

export class CheckOrderDto {
    @IsString({ message: 'dto.IS_STRING' })
    refNum: string;

    @IsString({ message: 'dto.IS_STRING' })
    expirationDate : string;

    @IsString({ message: 'dto.IS_STRING' })
    cvv : string;

    @IsString({ message: 'dto.IS_STRING' })
    cardName : string;

    @IsString({ message: 'dto.IS_STRING' })
    cardStreet : string;

    @IsString({ message: 'dto.IS_STRING' })    
    cardZip : string;   

    @IsString({ message: 'dto.IS_STRING' })
    amount : string;

    @IsString({ message: 'dto.IS_STRING' })
    currency : string;

    @IsString({ message: 'dto.IS_STRING' })
    description : string;

    @IsString({ message: 'dto.IS_STRING' })
    firstName : string;

    @IsString({ message: 'dto.IS_STRING' })
    @IsOptional()
    middleName : string;
    @IsString({ message: 'dto.IS_STRING' })
    lastName : string;

    @IsString({ message: 'dto.IS_STRING' })
    company : string;

    @IsString({ message: 'dto.IS_STRING' })
    street : string;

    @IsString({ message: 'dto.IS_STRING' })
    @IsOptional()
    street2 : string;
    @IsString({ message: 'dto.IS_STRING' })
    city : string;

    @IsString({ message: 'dto.IS_STRING' })
    state : string;

    @IsString({ message: 'dto.IS_STRING' })
    zip : string;

    @IsString({ message: 'dto.IS_STRING' })
    country : string;

    @IsString({ message: 'dto.IS_STRING' })
    @IsOptional()
    phone : string;

    @IsString({ message: 'dto.IS_STRING' })
    mobile : string;

    @IsString({ message: 'dto.IS_STRING' })
    email : string;

    @IsString({ message: 'dto.IS_STRING' })
    @IsOptional()
    customData : string;
}