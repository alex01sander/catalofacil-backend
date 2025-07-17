"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpsertWithoutProfilesInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersUpdateWithoutProfilesInput_schema_1 = require("./usersUpdateWithoutProfilesInput.schema");
const usersUncheckedUpdateWithoutProfilesInput_schema_1 = require("./usersUncheckedUpdateWithoutProfilesInput.schema");
const usersCreateWithoutProfilesInput_schema_1 = require("./usersCreateWithoutProfilesInput.schema");
const usersUncheckedCreateWithoutProfilesInput_schema_1 = require("./usersUncheckedCreateWithoutProfilesInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => usersUpdateWithoutProfilesInput_schema_1.usersUpdateWithoutProfilesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutProfilesInput_schema_1.usersUncheckedUpdateWithoutProfilesInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutProfilesInput_schema_1.usersCreateWithoutProfilesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutProfilesInput_schema_1.usersUncheckedCreateWithoutProfilesInputObjectSchema),
    ]),
})
    .strict();
exports.usersUpsertWithoutProfilesInputObjectSchema = Schema;
