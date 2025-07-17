"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpsertWithoutCategoriesInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersUpdateWithoutCategoriesInput_schema_1 = require("./usersUpdateWithoutCategoriesInput.schema");
const usersUncheckedUpdateWithoutCategoriesInput_schema_1 = require("./usersUncheckedUpdateWithoutCategoriesInput.schema");
const usersCreateWithoutCategoriesInput_schema_1 = require("./usersCreateWithoutCategoriesInput.schema");
const usersUncheckedCreateWithoutCategoriesInput_schema_1 = require("./usersUncheckedCreateWithoutCategoriesInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => usersUpdateWithoutCategoriesInput_schema_1.usersUpdateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutCategoriesInput_schema_1.usersUncheckedUpdateWithoutCategoriesInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutCategoriesInput_schema_1.usersCreateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutCategoriesInput_schema_1.usersUncheckedCreateWithoutCategoriesInputObjectSchema),
    ]),
})
    .strict();
exports.usersUpsertWithoutCategoriesInputObjectSchema = Schema;
