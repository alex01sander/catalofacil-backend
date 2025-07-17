"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsCreateManyUsersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const productsCreateManyUsersInput_schema_1 = require("./productsCreateManyUsersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => productsCreateManyUsersInput_schema_1.productsCreateManyUsersInputObjectSchema),
        zod_1.z.lazy(() => productsCreateManyUsersInput_schema_1.productsCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.productsCreateManyUsersInputEnvelopeObjectSchema = Schema;
