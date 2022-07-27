import {HttpModule, HttpService} from '@nestjs/axios';
import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import {PaymentsService} from './payments.service';
import { CreateSellDto } from './dtos/payments.dto';
import { CreateRefundDto } from './dtos/payments-refund.dto';
import { CheckOrderDto } from './dtos/payment-check.dto';
@Controller('payments')
export class PaymentsController {
    constructor(
        private paymentsService: PaymentsService,
    ) {}

    @Post('/create-sell')
    createSell(@Body() payload: CreateSellDto) {
        return this.paymentsService.newSell(payload);
    }

    @Post('/create-only-auth')
    createOnlyAuth(@Body() payload: CreateSellDto) {
        return this.paymentsService.newOnlyAuth(payload);
    }

    @Post('/check-order')
    createCapture(@Body() payload: CheckOrderDto) {
        return this.paymentsService.newCapture(payload);
    }

    @Post('/create-refund')
    createRefund(@Body() payload:CreateRefundDto ) {
        return this.paymentsService.newRefund(payload);
    }
}
