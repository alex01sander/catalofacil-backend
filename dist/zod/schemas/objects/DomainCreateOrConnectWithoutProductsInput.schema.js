"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainCreateOrConnectWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const DomainWhereUniqueInput_schema_1 = require("./DomainWhereUniqueInput.schema");
const DomainCreateWithoutProductsInput_schema_1 = require("./DomainCreateWithoutProductsInput.schema");
const DomainUncheckedCreateWithoutProductsInput_schema_1 = require("./DomainUncheckedCreateWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => DomainCreateWithoutProductsInput_schema_1.DomainCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => DomainUncheckedCreateWithoutProductsInput_schema_1.DomainUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
})
    .strict();
exports.DomainCreateOrConnectWithoutProductsInputObjectSchema = Schema;
