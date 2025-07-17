"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUpsertWithWhereUniqueWithoutCustomersInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const ordersUpdateWithoutCustomersInput_schema_1 = require("./ordersUpdateWithoutCustomersInput.schema");
const ordersUncheckedUpdateWithoutCustomersInput_schema_1 = require("./ordersUncheckedUpdateWithoutCustomersInput.schema");
const ordersCreateWithoutCustomersInput_schema_1 = require("./ordersCreateWithoutCustomersInput.schema");
const ordersUncheckedCreateWithoutCustomersInput_schema_1 = require("./ordersUncheckedCreateWithoutCustomersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => ordersUpdateWithoutCustomersInput_schema_1.ordersUpdateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedUpdateWithoutCustomersInput_schema_1.ordersUncheckedUpdateWithoutCustomersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ordersCreateWithoutCustomersInput_schema_1.ordersCreateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedCreateWithoutCustomersInput_schema_1.ordersUncheckedCreateWithoutCustomersInputObjectSchema),
    ]),
})
    .strict();
exports.ordersUpsertWithWhereUniqueWithoutCustomersInputObjectSchema = Schema;
