"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainUpdateOneRequiredWithoutProductsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const DomainCreateWithoutProductsInput_schema_1 = require("./DomainCreateWithoutProductsInput.schema");
const DomainUncheckedCreateWithoutProductsInput_schema_1 = require("./DomainUncheckedCreateWithoutProductsInput.schema");
const DomainCreateOrConnectWithoutProductsInput_schema_1 = require("./DomainCreateOrConnectWithoutProductsInput.schema");
const DomainUpsertWithoutProductsInput_schema_1 = require("./DomainUpsertWithoutProductsInput.schema");
const DomainWhereUniqueInput_schema_1 = require("./DomainWhereUniqueInput.schema");
const DomainUpdateWithoutProductsInput_schema_1 = require("./DomainUpdateWithoutProductsInput.schema");
const DomainUncheckedUpdateWithoutProductsInput_schema_1 = require("./DomainUncheckedUpdateWithoutProductsInput.schema");
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
    upsert: zod_1.z
        .lazy(() => DomainUpsertWithoutProductsInput_schema_1.DomainUpsertWithoutProductsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => DomainUpdateWithoutProductsInput_schema_1.DomainUpdateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => DomainUncheckedUpdateWithoutProductsInput_schema_1.DomainUncheckedUpdateWithoutProductsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.DomainUpdateOneRequiredWithoutProductsNestedInputObjectSchema = Schema;
