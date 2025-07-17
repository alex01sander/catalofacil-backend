"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUpsertWithWhereUniqueWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const ordersUpdateWithoutStoresInput_schema_1 = require("./ordersUpdateWithoutStoresInput.schema");
const ordersUncheckedUpdateWithoutStoresInput_schema_1 = require("./ordersUncheckedUpdateWithoutStoresInput.schema");
const ordersCreateWithoutStoresInput_schema_1 = require("./ordersCreateWithoutStoresInput.schema");
const ordersUncheckedCreateWithoutStoresInput_schema_1 = require("./ordersUncheckedCreateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => ordersUpdateWithoutStoresInput_schema_1.ordersUpdateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedUpdateWithoutStoresInput_schema_1.ordersUncheckedUpdateWithoutStoresInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ordersCreateWithoutStoresInput_schema_1.ordersCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedCreateWithoutStoresInput_schema_1.ordersUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.ordersUpsertWithWhereUniqueWithoutStoresInputObjectSchema = Schema;
