"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedBoolNullableFilterObjectSchema = void 0;
const zod_1 = require("zod");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.boolean().optional().nullable(),
    not: zod_1.z
        .union([zod_1.z.boolean(), zod_1.z.lazy(() => exports.NestedBoolNullableFilterObjectSchema)])
        .optional()
        .nullable(),
})
    .strict();
exports.NestedBoolNullableFilterObjectSchema = Schema;
