"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUpdateWithWhereUniqueWithoutCustomersInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const ordersUpdateWithoutCustomersInput_schema_1 = require("./ordersUpdateWithoutCustomersInput.schema");
const ordersUncheckedUpdateWithoutCustomersInput_schema_1 = require("./ordersUncheckedUpdateWithoutCustomersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => ordersUpdateWithoutCustomersInput_schema_1.ordersUpdateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedUpdateWithoutCustomersInput_schema_1.ordersUncheckedUpdateWithoutCustomersInputObjectSchema),
    ]),
})
    .strict();
exports.ordersUpdateWithWhereUniqueWithoutCustomersInputObjectSchema = Schema;
