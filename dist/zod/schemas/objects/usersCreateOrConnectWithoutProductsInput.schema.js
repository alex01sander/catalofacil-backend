"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateOrConnectWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersCreateWithoutProductsInput_schema_1 = require("./usersCreateWithoutProductsInput.schema");
const usersUncheckedCreateWithoutProductsInput_schema_1 = require("./usersUncheckedCreateWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutProductsInput_schema_1.usersCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutProductsInput_schema_1.usersUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
})
    .strict();
exports.usersCreateOrConnectWithoutProductsInputObjectSchema = Schema;
