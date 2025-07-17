"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpsertWithoutCustomersInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesUpdateWithoutCustomersInput_schema_1 = require("./storesUpdateWithoutCustomersInput.schema");
const storesUncheckedUpdateWithoutCustomersInput_schema_1 = require("./storesUncheckedUpdateWithoutCustomersInput.schema");
const storesCreateWithoutCustomersInput_schema_1 = require("./storesCreateWithoutCustomersInput.schema");
const storesUncheckedCreateWithoutCustomersInput_schema_1 = require("./storesUncheckedCreateWithoutCustomersInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => storesUpdateWithoutCustomersInput_schema_1.storesUpdateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedUpdateWithoutCustomersInput_schema_1.storesUncheckedUpdateWithoutCustomersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => storesCreateWithoutCustomersInput_schema_1.storesCreateWithoutCustomersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutCustomersInput_schema_1.storesUncheckedCreateWithoutCustomersInputObjectSchema),
    ]),
})
    .strict();
exports.storesUpsertWithoutCustomersInputObjectSchema = Schema;
