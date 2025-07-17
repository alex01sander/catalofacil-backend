"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersCreateManyStoresInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const customersCreateManyStoresInput_schema_1 = require("./customersCreateManyStoresInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => customersCreateManyStoresInput_schema_1.customersCreateManyStoresInputObjectSchema),
        zod_1.z.lazy(() => customersCreateManyStoresInput_schema_1.customersCreateManyStoresInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.customersCreateManyStoresInputEnvelopeObjectSchema = Schema;
