"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpdateOneRequiredWithoutCategoriesNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutCategoriesInput_schema_1 = require("./usersCreateWithoutCategoriesInput.schema");
const usersUncheckedCreateWithoutCategoriesInput_schema_1 = require("./usersUncheckedCreateWithoutCategoriesInput.schema");
const usersCreateOrConnectWithoutCategoriesInput_schema_1 = require("./usersCreateOrConnectWithoutCategoriesInput.schema");
const usersUpsertWithoutCategoriesInput_schema_1 = require("./usersUpsertWithoutCategoriesInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersUpdateWithoutCategoriesInput_schema_1 = require("./usersUpdateWithoutCategoriesInput.schema");
const usersUncheckedUpdateWithoutCategoriesInput_schema_1 = require("./usersUncheckedUpdateWithoutCategoriesInput.schema");
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
    upsert: zod_1.z
        .lazy(() => usersUpsertWithoutCategoriesInput_schema_1.usersUpsertWithoutCategoriesInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => usersUpdateWithoutCategoriesInput_schema_1.usersUpdateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutCategoriesInput_schema_1.usersUncheckedUpdateWithoutCategoriesInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.usersUpdateOneRequiredWithoutCategoriesNestedInputObjectSchema = Schema;
