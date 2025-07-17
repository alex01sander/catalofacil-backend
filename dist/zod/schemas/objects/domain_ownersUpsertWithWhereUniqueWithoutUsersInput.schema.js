"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domain_ownersUpsertWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const domain_ownersWhereUniqueInput_schema_1 = require("./domain_ownersWhereUniqueInput.schema");
const domain_ownersUpdateWithoutUsersInput_schema_1 = require("./domain_ownersUpdateWithoutUsersInput.schema");
const domain_ownersUncheckedUpdateWithoutUsersInput_schema_1 = require("./domain_ownersUncheckedUpdateWithoutUsersInput.schema");
const domain_ownersCreateWithoutUsersInput_schema_1 = require("./domain_ownersCreateWithoutUsersInput.schema");
const domain_ownersUncheckedCreateWithoutUsersInput_schema_1 = require("./domain_ownersUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => domain_ownersWhereUniqueInput_schema_1.domain_ownersWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => domain_ownersUpdateWithoutUsersInput_schema_1.domain_ownersUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => domain_ownersUncheckedUpdateWithoutUsersInput_schema_1.domain_ownersUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => domain_ownersCreateWithoutUsersInput_schema_1.domain_ownersCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => domain_ownersUncheckedCreateWithoutUsersInput_schema_1.domain_ownersUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.domain_ownersUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
