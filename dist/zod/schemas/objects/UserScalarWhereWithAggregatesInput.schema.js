"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarWhereWithAggregatesInputObjectSchema = void 0;
const zod_1 = require("zod");
const StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
const DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
const Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UserScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.UserScalarWhereWithAggregatesInputObjectSchema).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(() => exports.UserScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(() => exports.UserScalarWhereWithAggregatesInputObjectSchema),
        zod_1.z.lazy(() => exports.UserScalarWhereWithAggregatesInputObjectSchema).array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    email: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    password: zod_1.z
        .union([zod_1.z.lazy(() => StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema), zod_1.z.string()])
        .optional(),
    createdAt: zod_1.z
        .union([
        zod_1.z.lazy(() => DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema),
        zod_1.z.coerce.date(),
    ])
        .optional(),
})
    .strict();
exports.UserScalarWhereWithAggregatesInputObjectSchema = Schema;
