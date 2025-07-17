"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsCreateOrConnectWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
const productsCreateWithoutUsersInput_schema_1 = require("./productsCreateWithoutUsersInput.schema");
const productsUncheckedCreateWithoutUsersInput_schema_1 = require("./productsUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => productsCreateWithoutUsersInput_schema_1.productsCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedCreateWithoutUsersInput_schema_1.productsUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.productsCreateOrConnectWithoutUsersInputObjectSchema = Schema;
