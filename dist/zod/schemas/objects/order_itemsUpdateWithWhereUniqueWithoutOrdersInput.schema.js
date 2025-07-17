"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_itemsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema = void 0;
const zod_1 = require("zod");
const order_itemsWhereUniqueInput_schema_1 = require("./order_itemsWhereUniqueInput.schema");
const order_itemsUpdateWithoutOrdersInput_schema_1 = require("./order_itemsUpdateWithoutOrdersInput.schema");
const order_itemsUncheckedUpdateWithoutOrdersInput_schema_1 = require("./order_itemsUncheckedUpdateWithoutOrdersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => order_itemsWhereUniqueInput_schema_1.order_itemsWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => order_itemsUpdateWithoutOrdersInput_schema_1.order_itemsUpdateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => order_itemsUncheckedUpdateWithoutOrdersInput_schema_1.order_itemsUncheckedUpdateWithoutOrdersInputObjectSchema),
    ]),
})
    .strict();
exports.order_itemsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema = Schema;
