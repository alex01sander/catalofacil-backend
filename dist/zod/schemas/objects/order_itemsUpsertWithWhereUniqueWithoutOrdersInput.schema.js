"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsWhereUniqueInput_schema_1 = require("./order_itemsWhereUniqueInput.schema");
const order_itemsUpdateWithoutOrdersInput_schema_1 = require("./order_itemsUpdateWithoutOrdersInput.schema");
const order_itemsUncheckedUpdateWithoutOrdersInput_schema_1 = require("./order_itemsUncheckedUpdateWithoutOrdersInput.schema");
const order_itemsCreateWithoutOrdersInput_schema_1 = require("./order_itemsCreateWithoutOrdersInput.schema");
const order_itemsUncheckedCreateWithoutOrdersInput_schema_1 = require("./order_itemsUncheckedCreateWithoutOrdersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => order_itemsUpdateWithoutOrdersInput_schema_1.order_itemsUpdateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => order_itemsUncheckedUpdateWithoutOrdersInput_schema_1.order_itemsUncheckedUpdateWithoutOrdersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => order_itemsCreateWithoutOrdersInput_schema_1.order_itemsCreateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => order_itemsUncheckedCreateWithoutOrdersInput_schema_1.order_itemsUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
})
    .strict();
exports.order_itemsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema = Schema;
