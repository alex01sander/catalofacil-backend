"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUpsertWithoutOrder_itemsInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsUpdateWithoutOrder_itemsInput_schema_1 = require("./productsUpdateWithoutOrder_itemsInput.schema");
const productsUncheckedUpdateWithoutOrder_itemsInput_schema_1 = require("./productsUncheckedUpdateWithoutOrder_itemsInput.schema");
const productsCreateWithoutOrder_itemsInput_schema_1 = require("./productsCreateWithoutOrder_itemsInput.schema");
const productsUncheckedCreateWithoutOrder_itemsInput_schema_1 = require("./productsUncheckedCreateWithoutOrder_itemsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => productsUpdateWithoutOrder_itemsInput_schema_1.productsUpdateWithoutOrder_itemsInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedUpdateWithoutOrder_itemsInput_schema_1.productsUncheckedUpdateWithoutOrder_itemsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => productsCreateWithoutOrder_itemsInput_schema_1.productsCreateWithoutOrder_itemsInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedCreateWithoutOrder_itemsInput_schema_1.productsUncheckedCreateWithoutOrder_itemsInputObjectSchema),
    ]),
})
    .strict();
exports.productsUpsertWithoutOrder_itemsInputObjectSchema = Schema;
