import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IvoyServicesEntity } from '../schemas/ivoy-services.entity';
import { IvoyServicesDTO } from '../dtos/ivoy-services.dto'
 
@Injectable()
export class IvoyServicesService {
	constructor(@InjectModel(IvoyServicesEntity.name) private ivoyServiceModel: Model<IvoyServicesEntity>) { }

	async create(createIvoyServiceDTO: IvoyServicesDTO): Promise<IvoyServicesEntity> {
		const createdIvoyService = new this.ivoyServiceModel(createIvoyServiceDTO);
		return createdIvoyService.save();
	}

	async findAll(): Promise<IvoyServicesEntity[]> {
		return this.ivoyServiceModel.find().exec();
	}

	async findOne(id : string): Promise<IvoyServicesEntity> {
		return this.ivoyServiceModel.findById(id).exec();
	}
}