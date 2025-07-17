"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsCreateManyProductsInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsCreateManyProductsInput_schema_1 = require("./order_itemsCreateManyProductsInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => order_itemsCreateManyProductsInput_schema_1.order_itemsCreateManyProductsInputObjectSchema),
        zod_1.z.lazy(() => order_itemsCreateManyProductsInput_schema_1.order_itemsCreateManyProductsInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.order_itemsCreateManyProductsInputEnvelopeObjectSchema = Schema;
