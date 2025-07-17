"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpsertWithoutSalesInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesUpdateWithoutSalesInput_schema_1 = require("./storesUpdateWithoutSalesInput.schema");
const storesUncheckedUpdateWithoutSalesInput_schema_1 = require("./storesUncheckedUpdateWithoutSalesInput.schema");
const storesCreateWithoutSalesInput_schema_1 = require("./storesCreateWithoutSalesInput.schema");
const storesUncheckedCreateWithoutSalesInput_schema_1 = require("./storesUncheckedCreateWithoutSalesInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => storesUpdateWithoutSalesInput_schema_1.storesUpdateWithoutSalesInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedUpdateWithoutSalesInput_schema_1.storesUncheckedUpdateWithoutSalesInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => storesCreateWithoutSalesInput_schema_1.storesCreateWithoutSalesInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutSalesInput_schema_1.storesUncheckedCreateWithoutSalesInputObjectSchema),
    ]),
})
    .strict();
exports.storesUpsertWithoutSalesInputObjectSchema = Schema;
