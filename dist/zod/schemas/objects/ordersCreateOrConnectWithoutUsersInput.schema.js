"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersCreateOrConnectWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const ordersCreateWithoutUsersInput_schema_1 = require("./ordersCreateWithoutUsersInput.schema");
const ordersUncheckedCreateWithoutUsersInput_schema_1 = require("./ordersUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ordersCreateWithoutUsersInput_schema_1.ordersCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedCreateWithoutUsersInput_schema_1.ordersUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.ordersCreateOrConnectWithoutUsersInputObjectSchema = Schema;
