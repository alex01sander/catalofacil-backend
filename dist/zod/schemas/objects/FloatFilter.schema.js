"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatFilterObjectSchema = void 0;
const zod_1 = require("zod");
const NestedFloatFilter_schema_1 = require("./NestedFloatFilter.schema");
const Schema = zod_1.z
    .object({
    equals: zod_1.z.number().optional(),
    in: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional(),
    notIn: zod_1.z.union([zod_1.z.number().array(), zod_1.z.number()]).optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z
        .union([zod_1.z.number(), zod_1.z.lazy(() => NestedFloatFilter_schema_1.NestedFloatFilterObjectSchema)])
        .optional(),
})
    .strict();
exports.FloatFilterObjectSchema = Schema;
