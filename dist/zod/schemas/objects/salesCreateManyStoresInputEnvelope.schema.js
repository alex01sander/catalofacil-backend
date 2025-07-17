"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesCreateManyStoresInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const salesCreateManyStoresInput_schema_1 = require("./salesCreateManyStoresInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => salesCreateManyStoresInput_schema_1.salesCreateManyStoresInputObjectSchema),
        zod_1.z.lazy(() => salesCreateManyStoresInput_schema_1.salesCreateManyStoresInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.salesCreateManyStoresInputEnvelopeObjectSchema = Schema;
