"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsUpsertWithWhereUniqueWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsWhereUniqueInput_schema_1 = require("./order_itemsWhereUniqueInput.schema");
const order_itemsUpdateWithoutProductsInput_schema_1 = require("./order_itemsUpdateWithoutProductsInput.schema");
const order_itemsUncheckedUpdateWithoutProductsInput_schema_1 = require("./order_itemsUncheckedUpdateWithoutProductsInput.schema");
const order_itemsCreateWithoutProductsInput_schema_1 = require("./order_itemsCreateWithoutProductsInput.schema");
const order_itemsUncheckedCreateWithoutProductsInput_schema_1 = require("./order_itemsUncheckedCreateWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => order_itemsUpdateWithoutProductsInput_schema_1.order_itemsUpdateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => order_itemsUncheckedUpdateWithoutProductsInput_schema_1.order_itemsUncheckedUpdateWithoutProductsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => order_itemsCreateWithoutProductsInput_schema_1.order_itemsCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => order_itemsUncheckedCreateWithoutProductsInput_schema_1.order_itemsUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
})
    .strict();
exports.order_itemsUpsertWithWhereUniqueWithoutProductsInputObjectSchema = Schema;
