"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainUpdateManyWithWhereWithoutUserInputObjectSchema = void 0;
const zod_1 = require("zod");
const DomainScalarWhereInput_schema_1 = require("./DomainScalarWhereInput.schema");
const DomainUpdateManyMutationInput_schema_1 = require("./DomainUpdateManyMutationInput.schema");
const DomainUncheckedUpdateManyWithoutDomainsInput_schema_1 = require("./DomainUncheckedUpdateManyWithoutDomainsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => DomainScalarWhereInput_schema_1.DomainScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => DomainUpdateManyMutationInput_schema_1.DomainUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => DomainUncheckedUpdateManyWithoutDomainsInput_schema_1.DomainUncheckedUpdateManyWithoutDomainsInputObjectSchema),
    ]),
})
    .strict();
exports.DomainUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
