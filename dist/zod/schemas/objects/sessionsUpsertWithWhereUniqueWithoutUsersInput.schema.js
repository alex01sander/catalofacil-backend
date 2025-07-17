"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsUpsertWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsWhereUniqueInput_schema_1 = require("./sessionsWhereUniqueInput.schema");
const sessionsUpdateWithoutUsersInput_schema_1 = require("./sessionsUpdateWithoutUsersInput.schema");
const sessionsUncheckedUpdateWithoutUsersInput_schema_1 = require("./sessionsUncheckedUpdateWithoutUsersInput.schema");
const sessionsCreateWithoutUsersInput_schema_1 = require("./sessionsCreateWithoutUsersInput.schema");
const sessionsUncheckedCreateWithoutUsersInput_schema_1 = require("./sessionsUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => sessionsUpdateWithoutUsersInput_schema_1.sessionsUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => sessionsUncheckedUpdateWithoutUsersInput_schema_1.sessionsUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => sessionsCreateWithoutUsersInput_schema_1.sessionsCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => sessionsUncheckedCreateWithoutUsersInput_schema_1.sessionsUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.sessionsUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
