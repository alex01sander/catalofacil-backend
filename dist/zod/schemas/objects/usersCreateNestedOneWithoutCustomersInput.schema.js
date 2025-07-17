"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateNestedOneWithoutCustomersInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutCustomersInput_schema_1 = require("./usersCreateWithoutCustomersInput.schema");
const usersUncheckedCreateWithoutCustomersInput_schema_1 = require("./usersUncheckedCreateWithoutCustomersInput.schema");
const usersCreateOrConnectWithoutCustomersInput_schema_1 = require("./usersCreateOrConnectWithoutCustomersInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutCustomersInput_schema_1.usersCreateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutCustomersInput_schema_1.usersUncheckedCreateWithoutCustomersInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutCustomersInput_schema_1.usersCreateOrConnectWithoutCustomersInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.usersCreateNestedOneWithoutCustomersInputObjectSchema = Schema;
