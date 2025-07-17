"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateNestedOneWithoutCategoriesInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutCategoriesInput_schema_1 = require("./usersCreateWithoutCategoriesInput.schema");
const usersUncheckedCreateWithoutCategoriesInput_schema_1 = require("./usersUncheckedCreateWithoutCategoriesInput.schema");
const usersCreateOrConnectWithoutCategoriesInput_schema_1 = require("./usersCreateOrConnectWithoutCategoriesInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutCategoriesInput_schema_1.usersCreateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutCategoriesInput_schema_1.usersUncheckedCreateWithoutCategoriesInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutCategoriesInput_schema_1.usersCreateOrConnectWithoutCategoriesInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.usersCreateNestedOneWithoutCategoriesInputObjectSchema = Schema;
