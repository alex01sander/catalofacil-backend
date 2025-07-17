"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainCreateManyUserInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const DomainCreateManyUserInput_schema_1 = require("./DomainCreateManyUserInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => DomainCreateManyUserInput_schema_1.DomainCreateManyUserInputObjectSchema),
        zod_1.z.lazy(() => DomainCreateManyUserInput_schema_1.DomainCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.DomainCreateManyUserInputEnvelopeObjectSchema = Schema;
