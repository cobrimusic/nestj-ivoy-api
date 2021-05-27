import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IvoyServicesModule } from './ivoy-services/ivoy-services.module';
import { IvoyServicesRestModule } from './ivoy-services-rest/ivoy-services-rest.module';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://mongo/ivoy'),
		GraphQLModule.forRoot({
			autoSchemaFile: true,
		}),
		IvoyServicesModule,
		IvoyServicesRestModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
