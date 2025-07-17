"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUpdateWithWhereUniqueWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const ordersUpdateWithoutStoresInput_schema_1 = require("./ordersUpdateWithoutStoresInput.schema");
const ordersUncheckedUpdateWithoutStoresInput_schema_1 = require("./ordersUncheckedUpdateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => ordersUpdateWithoutStoresInput_schema_1.ordersUpdateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedUpdateWithoutStoresInput_schema_1.ordersUncheckedUpdateWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.ordersUpdateWithWhereUniqueWithoutStoresInputObjectSchema = Schema;
