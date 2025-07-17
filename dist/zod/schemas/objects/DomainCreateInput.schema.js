"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainCreateInputObjectSchema = void 0;
const zod_1 = require("zod");
const UserCreateNestedOneWithoutDomainsInput_schema_1 = require("./UserCreateNestedOneWithoutDomainsInput.schema");
const ProductCreateNestedManyWithoutDomainInput_schema_1 = require("./ProductCreateNestedManyWithoutDomainInput.schema");
const Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    slug: zod_1.z.string(),
    createdAt: zod_1.z.coerce.date().optional(),
    user: zod_1.z.lazy(() => UserCreateNestedOneWithoutDomainsInput_schema_1.UserCreateNestedOneWithoutDomainsInputObjectSchema),
    products: zod_1.z
        .lazy(() => ProductCreateNestedManyWithoutDomainInput_schema_1.ProductCreateNestedManyWithoutDomainInputObjectSchema)
        .optional(),
})
    .strict();
exports.DomainCreateInputObjectSchema = Schema;
