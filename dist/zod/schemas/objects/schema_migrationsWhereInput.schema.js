"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema_migrationsWhereInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringFilter_schema_1 = require("./StringFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.schema_migrationsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.schema_migrationsWhereInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.schema_migrationsWhereInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.schema_migrationsWhereInputObjectSchema),
        zod_1.z.lazy(() => exports.schema_migrationsWhereInputObjectSchema).array(),
    ])
        .optional(),
    version: zod_1.z
        .union([zod_1.z.lazy(() => StringFilter_schema_1.StringFilterObjectSchema), zod_1.z.string()])
        .optional(),
})
    .strict();
exports.schema_migrationsWhereInputObjectSchema = Schema;
