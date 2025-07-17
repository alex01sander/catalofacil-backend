"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const customersWhereInput_schema_1 = require("./customersWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => customersWhereInput_schema_1.customersWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => customersWhereInput_schema_1.customersWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => customersWhereInput_schema_1.customersWhereInputObjectSchema).optional(),
})
    .strict();
exports.CustomersListRelationFilterObjectSchema = Schema;
