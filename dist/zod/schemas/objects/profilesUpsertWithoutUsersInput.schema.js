"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilesUpsertWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const profilesUpdateWithoutUsersInput_schema_1 = require("./profilesUpdateWithoutUsersInput.schema");
const profilesUncheckedUpdateWithoutUsersInput_schema_1 = require("./profilesUncheckedUpdateWithoutUsersInput.schema");
const profilesCreateWithoutUsersInput_schema_1 = require("./profilesCreateWithoutUsersInput.schema");
const profilesUncheckedCreateWithoutUsersInput_schema_1 = require("./profilesUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => profilesUpdateWithoutUsersInput_schema_1.profilesUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => profilesUncheckedUpdateWithoutUsersInput_schema_1.profilesUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => profilesCreateWithoutUsersInput_schema_1.profilesCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => profilesUncheckedCreateWithoutUsersInput_schema_1.profilesUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.profilesUpsertWithoutUsersInputObjectSchema = Schema;
