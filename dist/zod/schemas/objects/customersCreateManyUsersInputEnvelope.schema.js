"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersCreateManyUsersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const customersCreateManyUsersInput_schema_1 = require("./customersCreateManyUsersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => customersCreateManyUsersInput_schema_1.customersCreateManyUsersInputObjectSchema),
        zod_1.z.lazy(() => customersCreateManyUsersInput_schema_1.customersCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.customersCreateManyUsersInputEnvelopeObjectSchema = Schema;
