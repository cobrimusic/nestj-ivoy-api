import { Body, Controller, Get, Param, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { IvoyServicesDTO } from '../dtos/ivoy-services.dto'
import { IvoyServicesEntity } from '../schemas/ivoy-services.entity';
import { IvoyServicesService } from './ivoy-services-rest.service';

interface CreatedResponse {
	'message': string,
	'status': number,
	'data': IvoyServicesEntity
}

@Controller('services')
export class IvoyServiceController {
	constructor(private readonly iVoyServicesService: IvoyServicesService) { }

	@Get()
	getAllServices() : Promise<IvoyServicesEntity[]> {
		return this.iVoyServicesService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id : string) : Promise<IvoyServicesEntity> {
		return this.iVoyServicesService.findOne(id);
	}

	@Post()
	createService(
		@Body() iVoyServicesDTO: IvoyServicesDTO, 
		@Res() res: Response
	) {
		this.iVoyServicesService.create(iVoyServicesDTO)
			.then(created => {
				const _res : CreatedResponse = {
					'message': 'created',
					'status': HttpStatus.CREATED,
					'data': created
				}
				
				res.status(HttpStatus.CREATED).send(_res);
		})
	}
}
