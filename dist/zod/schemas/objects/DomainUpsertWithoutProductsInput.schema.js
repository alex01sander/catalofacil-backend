"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainUpsertWithoutProductsInputObjectSchema = void 0;
const zod_1 = require("zod");
const DomainUpdateWithoutProductsInput_schema_1 = require("./DomainUpdateWithoutProductsInput.schema");
const DomainUncheckedUpdateWithoutProductsInput_schema_1 = require("./DomainUncheckedUpdateWithoutProductsInput.schema");
const DomainCreateWithoutProductsInput_schema_1 = require("./DomainCreateWithoutProductsInput.schema");
const DomainUncheckedCreateWithoutProductsInput_schema_1 = require("./DomainUncheckedCreateWithoutProductsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => DomainUpdateWithoutProductsInput_schema_1.DomainUpdateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => DomainUncheckedUpdateWithoutProductsInput_schema_1.DomainUncheckedUpdateWithoutProductsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => DomainCreateWithoutProductsInput_schema_1.DomainCreateWithoutProductsInputObjectSchema),
        zod_1.z.lazy(() => DomainUncheckedCreateWithoutProductsInput_schema_1.DomainUncheckedCreateWithoutProductsInputObjectSchema),
    ]),
})
    .strict();
exports.DomainUpsertWithoutProductsInputObjectSchema = Schema;
