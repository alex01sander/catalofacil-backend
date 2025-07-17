"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identitiesUpdateManyWithWhereWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const identitiesScalarWhereInput_schema_1 = require("./identitiesScalarWhereInput.schema");
const identitiesUpdateManyMutationInput_schema_1 = require("./identitiesUpdateManyMutationInput.schema");
const identitiesUncheckedUpdateManyWithoutIdentitiesInput_schema_1 = require("./identitiesUncheckedUpdateManyWithoutIdentitiesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => identitiesScalarWhereInput_schema_1.identitiesScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => identitiesUpdateManyMutationInput_schema_1.identitiesUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => identitiesUncheckedUpdateManyWithoutIdentitiesInput_schema_1.identitiesUncheckedUpdateManyWithoutIdentitiesInputObjectSchema),
    ]),
})
    .strict();
exports.identitiesUpdateManyWithWhereWithoutUsersInputObjectSchema = Schema;
