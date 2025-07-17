"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesCreateNestedOneWithoutSalesInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesCreateWithoutSalesInput_schema_1 = require("./storesCreateWithoutSalesInput.schema");
const storesUncheckedCreateWithoutSalesInput_schema_1 = require("./storesUncheckedCreateWithoutSalesInput.schema");
const storesCreateOrConnectWithoutSalesInput_schema_1 = require("./storesCreateOrConnectWithoutSalesInput.schema");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => storesCreateWithoutSalesInput_schema_1.storesCreateWithoutSalesInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutSalesInput_schema_1.storesUncheckedCreateWithoutSalesInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => storesCreateOrConnectWithoutSalesInput_schema_1.storesCreateOrConnectWithoutSalesInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.storesCreateNestedOneWithoutSalesInputObjectSchema = Schema;
