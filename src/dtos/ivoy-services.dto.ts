import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, Field, ID } from '@nestjs/graphql';

@ObjectType('IvoyService')
export class IvoyServicesDTO {
	@IDField(() => ID)
	id!: number;

	@FilterableField()
	name!: string;

	@Field(() => GraphQLISODateTime)
	created!: Date;

	@Field(() => GraphQLISODateTime)
	updated!: Date;
}
