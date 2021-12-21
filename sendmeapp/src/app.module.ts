import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './mensajes/mensajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesService } from './mensajes/mensajes.service';
import { Mensaje } from './mensajes/entities/mensaje.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, // Because it's the port used by default by XAMP for MySQL
      username: 'nest', // User to connect to the database
      password: 'app', // Password to connect to the database
      database: 'sendmeapp_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Indicate the directory for the entities
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mensaje]), // Indicate the entities which will be used for the service to access to the database
  ],
  controllers: [AppController, MensajesController], // It can include several controllers
  providers: [AppService, MensajesService], // Services to access to the data --> It's able to access from controller
})
export class AppModule {}
