"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersCreateOrConnectWithoutCustomersInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const ordersCreateWithoutCustomersInput_schema_1 = require("./ordersCreateWithoutCustomersInput.schema");
const ordersUncheckedCreateWithoutCustomersInput_schema_1 = require("./ordersUncheckedCreateWithoutCustomersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ordersCreateWithoutCustomersInput_schema_1.ordersCreateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedCreateWithoutCustomersInput_schema_1.ordersUncheckedCreateWithoutCustomersInputObjectSchema),
    ]),
})
    .strict();
exports.ordersCreateOrConnectWithoutCustomersInputObjectSchema = Schema;
