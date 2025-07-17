"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.One_time_tokensListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const one_time_tokensWhereInput_schema_1 = require("./one_time_tokensWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => one_time_tokensWhereInput_schema_1.one_time_tokensWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => one_time_tokensWhereInput_schema_1.one_time_tokensWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => one_time_tokensWhereInput_schema_1.one_time_tokensWhereInputObjectSchema).optional(),
})
    .strict();
exports.One_time_tokensListRelationFilterObjectSchema = Schema;
