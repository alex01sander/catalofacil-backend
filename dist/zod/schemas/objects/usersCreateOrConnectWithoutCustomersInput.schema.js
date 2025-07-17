"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateOrConnectWithoutCustomersInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersCreateWithoutCustomersInput_schema_1 = require("./usersCreateWithoutCustomersInput.schema");
const usersUncheckedCreateWithoutCustomersInput_schema_1 = require("./usersUncheckedCreateWithoutCustomersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutCustomersInput_schema_1.usersCreateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutCustomersInput_schema_1.usersUncheckedCreateWithoutCustomersInputObjectSchema),
    ]),
})
    .strict();
exports.usersCreateOrConnectWithoutCustomersInputObjectSchema = Schema;
