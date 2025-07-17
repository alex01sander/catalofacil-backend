"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolNullableFilterObjectSchema = void 0;
const zod_1 = require("zod");
const NestedBoolNullableFilter_schema_1 = require("./NestedBoolNullableFilter.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.boolean().optional().nullable(),
    not: zod_1.z
        .union([zod_1.z.boolean(), zod_1.z.lazy(() => NestedBoolNullableFilter_schema_1.NestedBoolNullableFilterObjectSchema)])
        .optional()
        .nullable(),
})
    .strict();
exports.BoolNullableFilterObjectSchema = Schema;
