"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersCreateManyCustomersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const ordersCreateManyCustomersInput_schema_1 = require("./ordersCreateManyCustomersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => ordersCreateManyCustomersInput_schema_1.ordersCreateManyCustomersInputObjectSchema),
        zod_1.z.lazy(() => ordersCreateManyCustomersInput_schema_1.ordersCreateManyCustomersInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.ordersCreateManyCustomersInputEnvelopeObjectSchema = Schema;
