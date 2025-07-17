"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesCreateOrConnectWithoutSalesInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const storesCreateWithoutSalesInput_schema_1 = require("./storesCreateWithoutSalesInput.schema");
const storesUncheckedCreateWithoutSalesInput_schema_1 = require("./storesUncheckedCreateWithoutSalesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => storesCreateWithoutSalesInput_schema_1.storesCreateWithoutSalesInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutSalesInput_schema_1.storesUncheckedCreateWithoutSalesInputObjectSchema),
    ]),
})
    .strict();
exports.storesCreateOrConnectWithoutSalesInputObjectSchema = Schema;
