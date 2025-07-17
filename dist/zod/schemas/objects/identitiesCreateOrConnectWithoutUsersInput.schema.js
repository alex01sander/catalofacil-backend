"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identitiesCreateOrConnectWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const identitiesWhereUniqueInput_schema_1 = require("./identitiesWhereUniqueInput.schema");
const identitiesCreateWithoutUsersInput_schema_1 = require("./identitiesCreateWithoutUsersInput.schema");
const identitiesUncheckedCreateWithoutUsersInput_schema_1 = require("./identitiesUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => identitiesWhereUniqueInput_schema_1.identitiesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => identitiesCreateWithoutUsersInput_schema_1.identitiesCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => identitiesUncheckedCreateWithoutUsersInput_schema_1.identitiesUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.identitiesCreateOrConnectWithoutUsersInputObjectSchema = Schema;
