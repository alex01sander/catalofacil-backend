"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesCreateManyStoresInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesCreateManyStoresInput_schema_1 = require("./categoriesCreateManyStoresInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => categoriesCreateManyStoresInput_schema_1.categoriesCreateManyStoresInputObjectSchema),
        zod_1.z.lazy(() => categoriesCreateManyStoresInput_schema_1.categoriesCreateManyStoresInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.categoriesCreateManyStoresInputEnvelopeObjectSchema = Schema;
