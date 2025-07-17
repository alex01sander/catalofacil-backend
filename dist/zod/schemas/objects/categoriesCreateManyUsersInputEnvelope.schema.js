"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesCreateManyUsersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const categoriesCreateManyUsersInput_schema_1 = require("./categoriesCreateManyUsersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => categoriesCreateManyUsersInput_schema_1.categoriesCreateManyUsersInputObjectSchema),
        zod_1.z.lazy(() => categoriesCreateManyUsersInput_schema_1.categoriesCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.categoriesCreateManyUsersInputEnvelopeObjectSchema = Schema;
