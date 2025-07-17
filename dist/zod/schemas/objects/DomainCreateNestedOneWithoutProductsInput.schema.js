"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainCreateNestedOneWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const DomainCreateWithoutProductsInput_schema_1 = require("./DomainCreateWithoutProductsInput.schema");
const DomainUncheckedCreateWithoutProductsInput_schema_1 = require("./DomainUncheckedCreateWithoutProductsInput.schema");
const DomainCreateOrConnectWithoutProductsInput_schema_1 = require("./DomainCreateOrConnectWithoutProductsInput.schema");
const DomainWhereUniqueInput_schema_1 = require("./DomainWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainCreateWithoutProductsInput_schema_1.DomainCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => DomainUncheckedCreateWithoutProductsInput_schema_1.DomainUncheckedCreateWithoutProductsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => DomainCreateOrConnectWithoutProductsInput_schema_1.DomainCreateOrConnectWithoutProductsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.DomainCreateNestedOneWithoutProductsInputObjectSchema = Schema;
