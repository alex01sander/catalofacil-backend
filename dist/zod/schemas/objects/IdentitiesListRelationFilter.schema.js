"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentitiesListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const identitiesWhereInput_schema_1 = require("./identitiesWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => identitiesWhereInput_schema_1.identitiesWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => identitiesWhereInput_schema_1.identitiesWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => identitiesWhereInput_schema_1.identitiesWhereInputObjectSchema).optional(),
})
    .strict();
exports.IdentitiesListRelationFilterObjectSchema = Schema;
