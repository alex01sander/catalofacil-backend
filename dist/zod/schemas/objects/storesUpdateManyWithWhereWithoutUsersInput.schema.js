"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpdateManyWithWhereWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesScalarWhereInput_schema_1 = require("./storesScalarWhereInput.schema");
const storesUpdateManyMutationInput_schema_1 = require("./storesUpdateManyMutationInput.schema");
const storesUncheckedUpdateManyWithoutStoresInput_schema_1 = require("./storesUncheckedUpdateManyWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => storesScalarWhereInput_schema_1.storesScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => storesUpdateManyMutationInput_schema_1.storesUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedUpdateManyWithoutStoresInput_schema_1.storesUncheckedUpdateManyWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.storesUpdateManyWithWhereWithoutUsersInputObjectSchema = Schema;
