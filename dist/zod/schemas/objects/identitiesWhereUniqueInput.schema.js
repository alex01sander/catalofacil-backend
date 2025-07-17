"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identitiesWhereUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const identitiesProvider_idProviderCompoundUniqueInput_schema_1 = require("./identitiesProvider_idProviderCompoundUniqueInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    provider_id_provider: zod_1.z
        .lazy(() => identitiesProvider_idProviderCompoundUniqueInput_schema_1.identitiesProvider_idProviderCompoundUniqueInputObjectSchema)
        .optional(),
})
    .strict();
exports.identitiesWhereUniqueInputObjectSchema = Schema;
