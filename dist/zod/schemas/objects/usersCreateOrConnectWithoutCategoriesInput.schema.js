"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateOrConnectWithoutCategoriesInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersCreateWithoutCategoriesInput_schema_1 = require("./usersCreateWithoutCategoriesInput.schema");
const usersUncheckedCreateWithoutCategoriesInput_schema_1 = require("./usersUncheckedCreateWithoutCategoriesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutCategoriesInput_schema_1.usersCreateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutCategoriesInput_schema_1.usersUncheckedCreateWithoutCategoriesInputObjectSchema),
    ]),
})
    .strict();
exports.usersCreateOrConnectWithoutCategoriesInputObjectSchema = Schema;
