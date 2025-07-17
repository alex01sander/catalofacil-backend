"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpsertWithoutSessionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersUpdateWithoutSessionsInput_schema_1 = require("./usersUpdateWithoutSessionsInput.schema");
const usersUncheckedUpdateWithoutSessionsInput_schema_1 = require("./usersUncheckedUpdateWithoutSessionsInput.schema");
const usersCreateWithoutSessionsInput_schema_1 = require("./usersCreateWithoutSessionsInput.schema");
const usersUncheckedCreateWithoutSessionsInput_schema_1 = require("./usersUncheckedCreateWithoutSessionsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => usersUpdateWithoutSessionsInput_schema_1.usersUpdateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutSessionsInput_schema_1.usersUncheckedUpdateWithoutSessionsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutSessionsInput_schema_1.usersCreateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutSessionsInput_schema_1.usersUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
})
    .strict();
exports.usersUpsertWithoutSessionsInputObjectSchema = Schema;
