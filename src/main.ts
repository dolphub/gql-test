import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from 'app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(ApplicationModule);
    await app.listen(3000);

  } catch (e) {
    // tslint:disable-next-line:no-console
    console.log(e);
  }
}
bootstrap();
