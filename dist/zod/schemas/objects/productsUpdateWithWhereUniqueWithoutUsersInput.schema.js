"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsUpdateWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const productsWhereUniqueInput_schema_1 = require("./productsWhereUniqueInput.schema");
const productsUpdateWithoutUsersInput_schema_1 = require("./productsUpdateWithoutUsersInput.schema");
const productsUncheckedUpdateWithoutUsersInput_schema_1 = require("./productsUncheckedUpdateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => productsWhereUniqueInput_schema_1.productsWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => productsUpdateWithoutUsersInput_schema_1.productsUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => productsUncheckedUpdateWithoutUsersInput_schema_1.productsUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.productsUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
