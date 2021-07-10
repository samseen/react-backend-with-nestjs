import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { CarsService } from "./cars.service";

@Module({
    imports: [GraphQLModule.forRoot({
        installSubscriptionHandlers: true,
        autoSchemaFile: true,
    })],
    providers: [CarsService],
    exports: [CarsService]
})
export class CarsModule {}