"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutDomainInputObjectSchema = void 0;
const zod_1 = require("zod");
const ProductWhereUniqueInput_schema_1 = require("./ProductWhereUniqueInput.schema");
const ProductUpdateWithoutDomainInput_schema_1 = require("./ProductUpdateWithoutDomainInput.schema");
const ProductUncheckedUpdateWithoutDomainInput_schema_1 = require("./ProductUncheckedUpdateWithoutDomainInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => ProductUpdateWithoutDomainInput_schema_1.ProductUpdateWithoutDomainInputObjectSchema),
        zod_1.z.lazy(() => ProductUncheckedUpdateWithoutDomainInput_schema_1.ProductUncheckedUpdateWithoutDomainInputObjectSchema),
    ]),
})
    .strict();
exports.ProductUpdateWithWhereUniqueWithoutDomainInputObjectSchema = Schema;
