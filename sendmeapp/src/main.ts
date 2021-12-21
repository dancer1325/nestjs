import { NestFactory } from '@nestjs/core'; // Add NestJS core librar
import { AppModule } from './app.module';

// main.ts
// 1) Entry file of the NestJs App
// 2) Async function, which will bootstrap the nest application
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Create a Nest application instance
  // const app = await NestFactory.create<NestExpressApplication>(AppModule); // Create a Nest Application with the API of Express
  // const app = await NestFactory.create<NestFastifyApplication>(AppModule); // Create a Nest Application with the API of Fastify
  await app.listen(3000); // Start up the HTTP listener
}
bootstrap();
