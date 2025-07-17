"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpsertWithoutCategoriesInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesUpdateWithoutCategoriesInput_schema_1 = require("./storesUpdateWithoutCategoriesInput.schema");
const storesUncheckedUpdateWithoutCategoriesInput_schema_1 = require("./storesUncheckedUpdateWithoutCategoriesInput.schema");
const storesCreateWithoutCategoriesInput_schema_1 = require("./storesCreateWithoutCategoriesInput.schema");
const storesUncheckedCreateWithoutCategoriesInput_schema_1 = require("./storesUncheckedCreateWithoutCategoriesInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => storesUpdateWithoutCategoriesInput_schema_1.storesUpdateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedUpdateWithoutCategoriesInput_schema_1.storesUncheckedUpdateWithoutCategoriesInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => storesCreateWithoutCategoriesInput_schema_1.storesCreateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutCategoriesInput_schema_1.storesUncheckedCreateWithoutCategoriesInputObjectSchema),
    ]),
})
    .strict();
exports.storesUpsertWithoutCategoriesInputObjectSchema = Schema;
