"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsCreateManyOrdersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsCreateManyOrdersInput_schema_1 = require("./order_itemsCreateManyOrdersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => order_itemsCreateManyOrdersInput_schema_1.order_itemsCreateManyOrdersInputObjectSchema),
        zod_1.z.lazy(() => order_itemsCreateManyOrdersInput_schema_1.order_itemsCreateManyOrdersInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.order_itemsCreateManyOrdersInputEnvelopeObjectSchema = Schema;
