"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refresh_tokensListRelationFilterObjectSchema = void 0;
const zod_1 = require("zod");
const refresh_tokensWhereInput_schema_1 = require("./refresh_tokensWhereInput.schema");
const Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(() => refresh_tokensWhereInput_schema_1.refresh_tokensWhereInputObjectSchema).optional(),
    some: zod_1.z.lazy(() => refresh_tokensWhereInput_schema_1.refresh_tokensWhereInputObjectSchema).optional(),
    none: zod_1.z.lazy(() => refresh_tokensWhereInput_schema_1.refresh_tokensWhereInputObjectSchema).optional(),
})
    .strict();
exports.Refresh_tokensListRelationFilterObjectSchema = Schema;
