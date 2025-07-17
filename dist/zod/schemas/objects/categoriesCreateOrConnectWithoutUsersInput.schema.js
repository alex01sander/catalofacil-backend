"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesCreateOrConnectWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesWhereUniqueInput_schema_1 = require("./categoriesWhereUniqueInput.schema");
const categoriesCreateWithoutUsersInput_schema_1 = require("./categoriesCreateWithoutUsersInput.schema");
const categoriesUncheckedCreateWithoutUsersInput_schema_1 = require("./categoriesUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => categoriesWhereUniqueInput_schema_1.categoriesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => categoriesCreateWithoutUsersInput_schema_1.categoriesCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => categoriesUncheckedCreateWithoutUsersInput_schema_1.categoriesUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.categoriesCreateOrConnectWithoutUsersInputObjectSchema = Schema;
