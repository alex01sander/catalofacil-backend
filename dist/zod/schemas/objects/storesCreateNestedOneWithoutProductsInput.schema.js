"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesCreateNestedOneWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesCreateWithoutProductsInput_schema_1 = require("./storesCreateWithoutProductsInput.schema");
const storesUncheckedCreateWithoutProductsInput_schema_1 = require("./storesUncheckedCreateWithoutProductsInput.schema");
const storesCreateOrConnectWithoutProductsInput_schema_1 = require("./storesCreateOrConnectWithoutProductsInput.schema");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => storesCreateWithoutProductsInput_schema_1.storesCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutProductsInput_schema_1.storesUncheckedCreateWithoutProductsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => storesCreateOrConnectWithoutProductsInput_schema_1.storesCreateOrConnectWithoutProductsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.storesCreateNestedOneWithoutProductsInputObjectSchema = Schema;
