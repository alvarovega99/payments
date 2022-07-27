import { Injectable, HttpService } from '@nestjs/common';
require('dotenv').config();
import { CreateSellDto } from './dtos/payments.dto';
import { CreateRefundDto } from './dtos/payments-refund.dto';
import { CheckOrderDto } from './dtos/payment-check.dto';
import {PaymentsHelpers} from './helpers/payments.helpers';

@Injectable()
export class PaymentsService {
  constructor(
    private readonly httpService: HttpService
    ) {}
  
  async newSell(data: CreateSellDto) {
    const paymentsHelpers = new PaymentsHelpers();
    const obj = paymentsHelpers.createSellData(data, 'cc:sale');
    const response = await this.httpService
      .post(`${process.env.API_PAYMENTS}`, obj)
      .toPromise();
    return response.data;
  }

  async newOnlyAuth(data: CreateSellDto) {
    const paymentsHelpers = new PaymentsHelpers();
    const obj = paymentsHelpers.createSellData(data, 'cc:AuthOnly');
    const response = await this.httpService
      .post(`${process.env.API_PAYMENTS}`, obj)
      .toPromise();
    return response.data;
  }

  async newCapture(data: CheckOrderDto) {
    const paymentsHelpers = new PaymentsHelpers();
    const obj = paymentsHelpers.createCheckOrder(data, 'cc:capture');
    const response = await this.httpService
      .post(`${process.env.API_PAYMENTS}`, obj)
      .toPromise();
    return response.data;
  }  

  async newRefund(data: CreateRefundDto) {
    const paymentsHelpers = new PaymentsHelpers();
    const obj = paymentsHelpers.createRefundData(data, 'cc:refund');
    const response = await this.httpService
      .post(`${process.env.API_PAYMENTS}`, obj)
      .toPromise();
    return response.data;
  }
  
}
