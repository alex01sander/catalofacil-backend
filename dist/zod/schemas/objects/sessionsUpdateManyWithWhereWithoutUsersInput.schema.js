"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsUpdateManyWithWhereWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsScalarWhereInput_schema_1 = require("./sessionsScalarWhereInput.schema");
const sessionsUpdateManyMutationInput_schema_1 = require("./sessionsUpdateManyMutationInput.schema");
const sessionsUncheckedUpdateManyWithoutSessionsInput_schema_1 = require("./sessionsUncheckedUpdateManyWithoutSessionsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => sessionsScalarWhereInput_schema_1.sessionsScalarWhereInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => sessionsUpdateManyMutationInput_schema_1.sessionsUpdateManyMutationInputObjectSchema),
        zod_1.z.lazy(() => sessionsUncheckedUpdateManyWithoutSessionsInput_schema_1.sessionsUncheckedUpdateManyWithoutSessionsInputObjectSchema),
    ]),
})
    .strict();
exports.sessionsUpdateManyWithWhereWithoutUsersInputObjectSchema = Schema;
