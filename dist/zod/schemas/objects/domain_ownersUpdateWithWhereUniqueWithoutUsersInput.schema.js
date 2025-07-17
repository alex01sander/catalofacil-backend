"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domain_ownersUpdateWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const domain_ownersWhereUniqueInput_schema_1 = require("./domain_ownersWhereUniqueInput.schema");
const domain_ownersUpdateWithoutUsersInput_schema_1 = require("./domain_ownersUpdateWithoutUsersInput.schema");
const domain_ownersUncheckedUpdateWithoutUsersInput_schema_1 = require("./domain_ownersUncheckedUpdateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => domain_ownersWhereUniqueInput_schema_1.domain_ownersWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => domain_ownersUpdateWithoutUsersInput_schema_1.domain_ownersUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => domain_ownersUncheckedUpdateWithoutUsersInput_schema_1.domain_ownersUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.domain_ownersUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
