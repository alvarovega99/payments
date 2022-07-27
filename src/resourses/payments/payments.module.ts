import { Module, HttpModule} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
@Module({
  providers: [PaymentsService],
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [PaymentsController]
})
export class PaymentsModule {}
