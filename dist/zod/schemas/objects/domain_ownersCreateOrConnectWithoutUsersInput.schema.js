"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domain_ownersCreateOrConnectWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const domain_ownersWhereUniqueInput_schema_1 = require("./domain_ownersWhereUniqueInput.schema");
const domain_ownersCreateWithoutUsersInput_schema_1 = require("./domain_ownersCreateWithoutUsersInput.schema");
const domain_ownersUncheckedCreateWithoutUsersInput_schema_1 = require("./domain_ownersUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => domain_ownersWhereUniqueInput_schema_1.domain_ownersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => domain_ownersCreateWithoutUsersInput_schema_1.domain_ownersCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => domain_ownersUncheckedCreateWithoutUsersInput_schema_1.domain_ownersUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.domain_ownersCreateOrConnectWithoutUsersInputObjectSchema = Schema;
