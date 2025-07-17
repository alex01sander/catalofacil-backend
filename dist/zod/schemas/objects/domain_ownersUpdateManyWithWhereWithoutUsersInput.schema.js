"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domain_ownersUpdateManyWithWhereWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const domain_ownersScalarWhereInput_schema_1 = require("./domain_ownersScalarWhereInput.schema");
const domain_ownersUpdateManyMutationInput_schema_1 = require("./domain_ownersUpdateManyMutationInput.schema");
const domain_ownersUncheckedUpdateManyWithoutDomain_ownersInput_schema_1 = require("./domain_ownersUncheckedUpdateManyWithoutDomain_ownersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => domain_ownersScalarWhereInput_schema_1.domain_ownersScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => domain_ownersUpdateManyMutationInput_schema_1.domain_ownersUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => domain_ownersUncheckedUpdateManyWithoutDomain_ownersInput_schema_1.domain_ownersUncheckedUpdateManyWithoutDomain_ownersInputObjectSchema),
    ]),
})
    .strict();
exports.domain_ownersUpdateManyWithWhereWithoutUsersInputObjectSchema = Schema;
