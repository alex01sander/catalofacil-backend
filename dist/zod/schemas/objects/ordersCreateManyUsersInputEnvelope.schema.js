"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersCreateManyUsersInputEnvelopeObjectSchema = void 0;
const zod_1 = require("zod");
const ordersCreateManyUsersInput_schema_1 = require("./ordersCreateManyUsersInput.schema");
const Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(() => ordersCreateManyUsersInput_schema_1.ordersCreateManyUsersInputObjectSchema),
        zod_1.z.lazy(() => ordersCreateManyUsersInput_schema_1.ordersCreateManyUsersInputObjectSchema).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional(),
})
    .strict();
exports.ordersCreateManyUsersInputEnvelopeObjectSchema = Schema;
