"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const DomainCreateNestedManyWithoutUserInput_schema_1 = require("./DomainCreateNestedManyWithoutUserInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date().optional(),
    domains: zod_1.z
        .lazy(() => DomainCreateNestedManyWithoutUserInput_schema_1.DomainCreateNestedManyWithoutUserInputObjectSchema)
        .optional(),
})
    .strict();
exports.UserCreateInputObjectSchema = Schema;
