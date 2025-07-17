"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoresListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const storesWhereInput_schema_1 = require("./storesWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => storesWhereInput_schema_1.storesWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => storesWhereInput_schema_1.storesWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => storesWhereInput_schema_1.storesWhereInputObjectSchema).optional(),
})
    .strict();
exports.StoresListRelationFilterObjectSchema = Schema;
