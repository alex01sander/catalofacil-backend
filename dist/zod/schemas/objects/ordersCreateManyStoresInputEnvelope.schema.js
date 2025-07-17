"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersCreateManyStoresInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const ordersCreateManyStoresInput_schema_1 = require("./ordersCreateManyStoresInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => ordersCreateManyStoresInput_schema_1.ordersCreateManyStoresInputObjectSchema),
        zod_1.z.lazy(() => ordersCreateManyStoresInput_schema_1.ordersCreateManyStoresInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.ordersCreateManyStoresInputEnvelopeObjectSchema = Schema;
