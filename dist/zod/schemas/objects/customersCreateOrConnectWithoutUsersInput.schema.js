"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersCreateOrConnectWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersWhereUniqueInput_schema_1 = require("./customersWhereUniqueInput.schema");
const customersCreateWithoutUsersInput_schema_1 = require("./customersCreateWithoutUsersInput.schema");
const customersUncheckedCreateWithoutUsersInput_schema_1 = require("./customersUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => customersCreateWithoutUsersInput_schema_1.customersCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => customersUncheckedCreateWithoutUsersInput_schema_1.customersUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.customersCreateOrConnectWithoutUsersInputObjectSchema = Schema;
