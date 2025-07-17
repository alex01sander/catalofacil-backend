"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const salesWhereInput_schema_1 = require("./salesWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => salesWhereInput_schema_1.salesWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => salesWhereInput_schema_1.salesWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => salesWhereInput_schema_1.salesWhereInputObjectSchema).optional(),
})
    .strict();
exports.SalesListRelationFilterObjectSchema = Schema;
