"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsCreateWithoutOrder_itemsInput_schema_1 = require("./productsCreateWithoutOrder_itemsInput.schema");
const productsUncheckedCreateWithoutOrder_itemsInput_schema_1 = require("./productsUncheckedCreateWithoutOrder_itemsInput.schema");
const productsCreateOrConnectWithoutOrder_itemsInput_schema_1 = require("./productsCreateOrConnectWithoutOrder_itemsInput.schema");
const productsUpsertWithoutOrder_itemsInput_schema_1 = require("./productsUpsertWithoutOrder_itemsInput.schema");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
const productsUpdateWithoutOrder_itemsInput_schema_1 = require("./productsUpdateWithoutOrder_itemsInput.schema");
const productsUncheckedUpdateWithoutOrder_itemsInput_schema_1 = require("./productsUncheckedUpdateWithoutOrder_itemsInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => productsCreateWithoutOrder_itemsInput_schema_1.productsCreateWithoutOrder_itemsInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedCreateWithoutOrder_itemsInput_schema_1.productsUncheckedCreateWithoutOrder_itemsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => productsCreateOrConnectWithoutOrder_itemsInput_schema_1.productsCreateOrConnectWithoutOrder_itemsInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => productsUpsertWithoutOrder_itemsInput_schema_1.productsUpsertWithoutOrder_itemsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => productsUpdateWithoutOrder_itemsInput_schema_1.productsUpdateWithoutOrder_itemsInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedUpdateWithoutOrder_itemsInput_schema_1.productsUncheckedUpdateWithoutOrder_itemsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.productsUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema = Schema;
