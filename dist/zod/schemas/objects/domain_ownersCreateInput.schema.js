"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domain_ownersCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateNestedOneWithoutDomain_ownersInput_schema_1 = require("./usersCreateNestedOneWithoutDomain_ownersInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    domain: zod_1.z.string(),
    created_at: zod_1.z.coerce.date().optional().nullable(),
    updated_at: zod_1.z.coerce.date().optional().nullable(),
    domain_type: zod_1.z.string().optional(),
    users: zod_1.z.lazy(() => usersCreateNestedOneWithoutDomain_ownersInput_schema_1.usersCreateNestedOneWithoutDomain_ownersInputObjectSchema),
})
    .strict();
exports.domain_ownersCreateInputObjectSchema = Schema;
