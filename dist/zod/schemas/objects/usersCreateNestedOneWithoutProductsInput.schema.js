"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateNestedOneWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutProductsInput_schema_1 = require("./usersCreateWithoutProductsInput.schema");
const usersUncheckedCreateWithoutProductsInput_schema_1 = require("./usersUncheckedCreateWithoutProductsInput.schema");
const usersCreateOrConnectWithoutProductsInput_schema_1 = require("./usersCreateOrConnectWithoutProductsInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutProductsInput_schema_1.usersCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutProductsInput_schema_1.usersUncheckedCreateWithoutProductsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutProductsInput_schema_1.usersCreateOrConnectWithoutProductsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.usersCreateNestedOneWithoutProductsInputObjectSchema = Schema;
