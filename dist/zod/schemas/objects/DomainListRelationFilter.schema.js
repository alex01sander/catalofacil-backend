"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const DomainWhereInput_schema_1 = require("./DomainWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => DomainWhereInput_schema_1.DomainWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => DomainWhereInput_schema_1.DomainWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => DomainWhereInput_schema_1.DomainWhereInputObjectSchema).optional(),
})
    .strict();
exports.DomainListRelationFilterObjectSchema = Schema;
