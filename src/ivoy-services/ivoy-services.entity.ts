import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: 'created', updatedAt: 'updated' } })
export class IvoyServicesEntity extends Document {
	@Prop({ required: true })
	name!: string;

	@Prop({ default: Date.now })
	created!: Date;

	@Prop({ default: Date.now })
	updated!: Date;
}

export const IvoyServicesEntitySchema = SchemaFactory.createForClass(IvoyServicesEntity);
