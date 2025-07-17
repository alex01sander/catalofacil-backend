"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema_migrationsScalarWhereWithAggregatesInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.schema_migrationsScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.schema_migrationsScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.schema_migrationsScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.schema_migrationsScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z
            .lazy(() => exports.schema_migrationsScalarWhereWithAggregatesInputObjectSchema)
            .array(),
    ])
        .optional(),
    version: zod_1.z
        .union([
        zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema),
        zod_1.z.string(),
    ])
        .optional(),
})
    .strict();
exports.schema_migrationsScalarWhereWithAggregatesInputObjectSchema = Schema;
