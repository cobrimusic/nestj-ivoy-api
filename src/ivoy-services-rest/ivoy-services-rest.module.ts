import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IvoyServiceController } from './ivoy-services-rest.controller';
import { IvoyServicesService } from './ivoy-services-rest.service';
import {
	IvoyServicesEntity,
	IvoyServicesEntitySchema,
} from '../schemas/ivoy-services.entity';

@Module({
    imports: [
		MongooseModule.forFeature([
			{ 
				name: IvoyServicesEntity.name, 
				schema: IvoyServicesEntitySchema 
			}
		])
	],
	controllers: [IvoyServiceController],
  	providers: [IvoyServicesService],
})
export class IvoyServicesRestModule {}
