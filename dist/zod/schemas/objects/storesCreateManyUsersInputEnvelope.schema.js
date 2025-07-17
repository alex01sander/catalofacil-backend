"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesCreateManyUsersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const storesCreateManyUsersInput_schema_1 = require("./storesCreateManyUsersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => storesCreateManyUsersInput_schema_1.storesCreateManyUsersInputObjectSchema),
        zod_1.z.lazy(() => storesCreateManyUsersInput_schema_1.storesCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.storesCreateManyUsersInputEnvelopeObjectSchema = Schema;
