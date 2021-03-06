import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryMongooseModule } from '@nestjs-query/query-mongoose';
import { Module } from '@nestjs/common';
import { IvoyServicesDTO } from '../dtos/ivoy-services.dto';
import {
	IvoyServicesEntity,
	IvoyServicesEntitySchema,
} from '../schemas/ivoy-services.entity';

@Module({
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [
				NestjsQueryMongooseModule.forFeature([
					{
						document: IvoyServicesEntity,
						name: IvoyServicesEntity.name,
						schema: IvoyServicesEntitySchema,
					},
				]),
			],
			resolvers: [
				{ DTOClass: IvoyServicesDTO, EntityClass: IvoyServicesEntity },
			],
		}),
	],
})
export class IvoyServicesModule { }
