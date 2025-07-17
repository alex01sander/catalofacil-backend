"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutDomainInputObjectSchema = void 0;
const zod_1 = require("zod");
const ProductWhereUniqueInput_schema_1 = require("./ProductWhereUniqueInput.schema");
const ProductCreateWithoutDomainInput_schema_1 = require("./ProductCreateWithoutDomainInput.schema");
const ProductUncheckedCreateWithoutDomainInput_schema_1 = require("./ProductUncheckedCreateWithoutDomainInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ProductCreateWithoutDomainInput_schema_1.ProductCreateWithoutDomainInputObjectSchema),
        zod_1.z.lazy(() => ProductUncheckedCreateWithoutDomainInput_schema_1.ProductUncheckedCreateWithoutDomainInputObjectSchema),
    ]),
})
    .strict();
exports.ProductCreateOrConnectWithoutDomainInputObjectSchema = Schema;
