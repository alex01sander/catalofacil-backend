"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller_adminsUpsertWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const controller_adminsUpdateWithoutUsersInput_schema_1 = require("./controller_adminsUpdateWithoutUsersInput.schema");
const controller_adminsUncheckedUpdateWithoutUsersInput_schema_1 = require("./controller_adminsUncheckedUpdateWithoutUsersInput.schema");
const controller_adminsCreateWithoutUsersInput_schema_1 = require("./controller_adminsCreateWithoutUsersInput.schema");
const controller_adminsUncheckedCreateWithoutUsersInput_schema_1 = require("./controller_adminsUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => controller_adminsUpdateWithoutUsersInput_schema_1.controller_adminsUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => controller_adminsUncheckedUpdateWithoutUsersInput_schema_1.controller_adminsUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => controller_adminsCreateWithoutUsersInput_schema_1.controller_adminsCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => controller_adminsUncheckedCreateWithoutUsersInput_schema_1.controller_adminsUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.controller_adminsUpsertWithoutUsersInputObjectSchema = Schema;
