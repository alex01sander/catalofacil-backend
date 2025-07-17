"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesCreateOrConnectWithoutCategoriesInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const storesCreateWithoutCategoriesInput_schema_1 = require("./storesCreateWithoutCategoriesInput.schema");
const storesUncheckedCreateWithoutCategoriesInput_schema_1 = require("./storesUncheckedCreateWithoutCategoriesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => storesCreateWithoutCategoriesInput_schema_1.storesCreateWithoutCategoriesInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutCategoriesInput_schema_1.storesUncheckedCreateWithoutCategoriesInputObjectSchema),
    ]),
})
    .strict();
exports.storesCreateOrConnectWithoutCategoriesInputObjectSchema = Schema;
