"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsUpdateWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const sessionsWhereUniqueInput_schema_1 = require("./sessionsWhereUniqueInput.schema");
const sessionsUpdateWithoutUsersInput_schema_1 = require("./sessionsUpdateWithoutUsersInput.schema");
const sessionsUncheckedUpdateWithoutUsersInput_schema_1 = require("./sessionsUncheckedUpdateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => sessionsWhereUniqueInput_schema_1.sessionsWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => sessionsUpdateWithoutUsersInput_schema_1.sessionsUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => sessionsUncheckedUpdateWithoutUsersInput_schema_1.sessionsUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.sessionsUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
