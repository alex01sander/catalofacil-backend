"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutDomainInputObjectSchema = void 0;
const zod_1 = require("zod");
const ProductWhereUniqueInput_schema_1 = require("./ProductWhereUniqueInput.schema");
const ProductUpdateWithoutDomainInput_schema_1 = require("./ProductUpdateWithoutDomainInput.schema");
const ProductUncheckedUpdateWithoutDomainInput_schema_1 = require("./ProductUncheckedUpdateWithoutDomainInput.schema");
const ProductCreateWithoutDomainInput_schema_1 = require("./ProductCreateWithoutDomainInput.schema");
const ProductUncheckedCreateWithoutDomainInput_schema_1 = require("./ProductUncheckedCreateWithoutDomainInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => ProductUpdateWithoutDomainInput_schema_1.ProductUpdateWithoutDomainInputObjectSchema),
        zod_1.z.lazy(() => ProductUncheckedUpdateWithoutDomainInput_schema_1.ProductUncheckedUpdateWithoutDomainInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => ProductCreateWithoutDomainInput_schema_1.ProductCreateWithoutDomainInputObjectSchema),
        zod_1.z.lazy(() => ProductUncheckedCreateWithoutDomainInput_schema_1.ProductUncheckedCreateWithoutDomainInputObjectSchema),
    ]),
})
    .strict();
exports.ProductUpsertWithWhereUniqueWithoutDomainInputObjectSchema = Schema;
