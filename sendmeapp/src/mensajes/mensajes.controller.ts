import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {
  constructor(private mensajesServices: MensajesService) {
    // Inject the service
  }

  @Post() // Instead of using @Req, it's possible to use dedicated decorator as @Body/@Query
  create(@Body() createMensajeDto: CreateMensajeDto, @Res() response) {
    this.mensajesServices
      .createMensaje(createMensajeDto)
      .then(mensaje => { // Since it's async --> We need to wait for the response
        response.status(HttpStatus.CREATED).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la creación del mensaje' });
      });
  }

  @Get()
  getAll(@Res() response) {
    this.mensajesServices
      .getAll()
      .then(mensajesList => {
        response.status(HttpStatus.OK).json(mensajesList);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la obtención de mensajes' });
      });
  }

  @Put(':id') // Send by queryParam
  update(
    @Body() updateMensajeDto: CreateMensajeDto,
    @Res() response,
    @Param('id') idMensaje, // Handle the path param in the url
  ) {
    this.mensajesServices
      .updateMensaje(idMensaje, updateMensajeDto)
      .then(mensaje => {
        response.status(HttpStatus.OK).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la edición del mensaje' });
      });
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') idMensaje) {
    this.mensajesServices
      .deleteMensaje(idMensaje)
      .then(res => {
        response.status(HttpStatus.OK).json(res);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la eliminación del mensaje' });
      });
  }
}
