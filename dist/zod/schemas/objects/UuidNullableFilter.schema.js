"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidNullableFilterObjectSchema = void 0;
const zod_1 = require("zod");
const QueryMode_schema_1 = require("../enums/QueryMode.schema");
const NestedUuidNullableFilter_schema_1 = require("./NestedUuidNullableFilter.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.string().optional().nullable(),
    in: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional().nullable(),
    notIn: zod_1.z.union([zod_1.z.string().array(), zod_1.z.string()]).optional().nullable(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(() => QueryMode_schema_1.QueryModeSchema).optional(),
    not: zod_1.z
        .union([zod_1.z.string(), zod_1.z.lazy(() => NestedUuidNullableFilter_schema_1.NestedUuidNullableFilterObjectSchema)])
        .optional()
        .nullable(),
})
    .strict();
exports.UuidNullableFilterObjectSchema = Schema;
