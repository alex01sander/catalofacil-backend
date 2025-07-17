"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema_migrationsOrderByWithRelationInputObjectSchema = void 0;
const zod_1 = require("zod");
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const Schema = zod_1.z
    .object({
    version: zod_1.z.lazy(() => SortOrder_schema_1.SortOrderSchema).optional(),
})
    .strict();
exports.schema_migrationsOrderByWithRelationInputObjectSchema = Schema;
