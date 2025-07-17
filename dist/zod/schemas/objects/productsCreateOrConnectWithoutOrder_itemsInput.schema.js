"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsCreateOrConnectWithoutOrder_itemsInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
const productsCreateWithoutOrder_itemsInput_schema_1 = require("./productsCreateWithoutOrder_itemsInput.schema");
const productsUncheckedCreateWithoutOrder_itemsInput_schema_1 = require("./productsUncheckedCreateWithoutOrder_itemsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => productsCreateWithoutOrder_itemsInput_schema_1.productsCreateWithoutOrder_itemsInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedCreateWithoutOrder_itemsInput_schema_1.productsUncheckedCreateWithoutOrder_itemsInputObjectSchema),
    ]),
})
    .strict();
exports.productsCreateOrConnectWithoutOrder_itemsInputObjectSchema = Schema;
