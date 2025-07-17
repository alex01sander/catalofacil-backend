"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeNullableFilterObjectSchema = void 0;
const zod_1 = require("zod");
const NestedDateTimeNullableFilter_schema_1 = require("./NestedDateTimeNullableFilter.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.coerce.date().optional().nullable(),
    in: zod_1.z
        .union([zod_1.z.coerce.date().array(), zod_1.z.coerce.date()])
        .optional()
        .nullable(),
    notIn: zod_1.z
        .union([zod_1.z.coerce.date().array(), zod_1.z.coerce.date()])
        .optional()
        .nullable(),
    lt: zod_1.z.coerce.date().optional(),
    lte: zod_1.z.coerce.date().optional(),
    gt: zod_1.z.coerce.date().optional(),
    gte: zod_1.z.coerce.date().optional(),
    not: zod_1.z
        .union([
        zod_1.z.coerce.date(),
        zod_1.z.lazy(() => NestedDateTimeNullableFilter_schema_1.NestedDateTimeNullableFilterObjectSchema),
    ])
        .optional()
        .nullable(),
})
    .strict();
exports.DateTimeNullableFilterObjectSchema = Schema;
