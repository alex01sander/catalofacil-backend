"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identitiesProvider_idProviderCompoundUniqueInputObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    provider_id: zod_1.z.string(),
    provider: zod_1.z.string(),
})
    .strict();
exports.identitiesProvider_idProviderCompoundUniqueInputObjectSchema = Schema;
