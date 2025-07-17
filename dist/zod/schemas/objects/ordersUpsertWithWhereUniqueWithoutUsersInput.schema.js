"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersUpsertWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const ordersWhereUniqueInput_schema_1 = require("./ordersWhereUniqueInput.schema");
const ordersUpdateWithoutUsersInput_schema_1 = require("./ordersUpdateWithoutUsersInput.schema");
const ordersUncheckedUpdateWithoutUsersInput_schema_1 = require("./ordersUncheckedUpdateWithoutUsersInput.schema");
const ordersCreateWithoutUsersInput_schema_1 = require("./ordersCreateWithoutUsersInput.schema");
const ordersUncheckedCreateWithoutUsersInput_schema_1 = require("./ordersUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ordersWhereUniqueInput_schema_1.ordersWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => ordersUpdateWithoutUsersInput_schema_1.ordersUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedUpdateWithoutUsersInput_schema_1.ordersUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ordersCreateWithoutUsersInput_schema_1.ordersCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => ordersUncheckedCreateWithoutUsersInput_schema_1.ordersUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.ordersUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
