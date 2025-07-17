"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersUpsertWithoutOrdersInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersUpdateWithoutOrdersInput_schema_1 = require("./customersUpdateWithoutOrdersInput.schema");
const customersUncheckedUpdateWithoutOrdersInput_schema_1 = require("./customersUncheckedUpdateWithoutOrdersInput.schema");
const customersCreateWithoutOrdersInput_schema_1 = require("./customersCreateWithoutOrdersInput.schema");
const customersUncheckedCreateWithoutOrdersInput_schema_1 = require("./customersUncheckedCreateWithoutOrdersInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => customersUpdateWithoutOrdersInput_schema_1.customersUpdateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => customersUncheckedUpdateWithoutOrdersInput_schema_1.customersUncheckedUpdateWithoutOrdersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => customersCreateWithoutOrdersInput_schema_1.customersCreateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => customersUncheckedCreateWithoutOrdersInput_schema_1.customersUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
})
    .strict();
exports.customersUpsertWithoutOrdersInputObjectSchema = Schema;
