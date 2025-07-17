"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Domain_ownersListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const domain_ownersWhereInput_schema_1 = require("./domain_ownersWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => domain_ownersWhereInput_schema_1.domain_ownersWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => domain_ownersWhereInput_schema_1.domain_ownersWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => domain_ownersWhereInput_schema_1.domain_ownersWhereInputObjectSchema).optional(),
})
    .strict();
exports.Domain_ownersListRelationFilterObjectSchema = Schema;
