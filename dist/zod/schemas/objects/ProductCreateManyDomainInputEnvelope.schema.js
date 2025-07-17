"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyDomainInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const ProductCreateManyDomainInput_schema_1 = require("./ProductCreateManyDomainInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => ProductCreateManyDomainInput_schema_1.ProductCreateManyDomainInputObjectSchema),
        zod_1.z.lazy(() => ProductCreateManyDomainInput_schema_1.ProductCreateManyDomainInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.ProductCreateManyDomainInputEnvelopeObjectSchema = Schema;
