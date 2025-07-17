"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpsertWithoutOrdersInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesUpdateWithoutOrdersInput_schema_1 = require("./storesUpdateWithoutOrdersInput.schema");
const storesUncheckedUpdateWithoutOrdersInput_schema_1 = require("./storesUncheckedUpdateWithoutOrdersInput.schema");
const storesCreateWithoutOrdersInput_schema_1 = require("./storesCreateWithoutOrdersInput.schema");
const storesUncheckedCreateWithoutOrdersInput_schema_1 = require("./storesUncheckedCreateWithoutOrdersInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => storesUpdateWithoutOrdersInput_schema_1.storesUpdateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedUpdateWithoutOrdersInput_schema_1.storesUncheckedUpdateWithoutOrdersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => storesCreateWithoutOrdersInput_schema_1.storesCreateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutOrdersInput_schema_1.storesUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
})
    .strict();
exports.storesUpsertWithoutOrdersInputObjectSchema = Schema;
