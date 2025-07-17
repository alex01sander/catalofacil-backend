"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesCreateNestedOneWithoutCustomersInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesCreateWithoutCustomersInput_schema_1 = require("./storesCreateWithoutCustomersInput.schema");
const storesUncheckedCreateWithoutCustomersInput_schema_1 = require("./storesUncheckedCreateWithoutCustomersInput.schema");
const storesCreateOrConnectWithoutCustomersInput_schema_1 = require("./storesCreateOrConnectWithoutCustomersInput.schema");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => storesCreateWithoutCustomersInput_schema_1.storesCreateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutCustomersInput_schema_1.storesUncheckedCreateWithoutCustomersInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => storesCreateOrConnectWithoutCustomersInput_schema_1.storesCreateOrConnectWithoutCustomersInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.storesCreateNestedOneWithoutCustomersInputObjectSchema = Schema;
