"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesUpsertWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesWhereUniqueInput_schema_1 = require("./categoriesWhereUniqueInput.schema");
const categoriesUpdateWithoutUsersInput_schema_1 = require("./categoriesUpdateWithoutUsersInput.schema");
const categoriesUncheckedUpdateWithoutUsersInput_schema_1 = require("./categoriesUncheckedUpdateWithoutUsersInput.schema");
const categoriesCreateWithoutUsersInput_schema_1 = require("./categoriesCreateWithoutUsersInput.schema");
const categoriesUncheckedCreateWithoutUsersInput_schema_1 = require("./categoriesUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => categoriesUpdateWithoutUsersInput_schema_1.categoriesUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => categoriesUncheckedUpdateWithoutUsersInput_schema_1.categoriesUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => categoriesCreateWithoutUsersInput_schema_1.categoriesCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => categoriesUncheckedCreateWithoutUsersInput_schema_1.categoriesUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.categoriesUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
