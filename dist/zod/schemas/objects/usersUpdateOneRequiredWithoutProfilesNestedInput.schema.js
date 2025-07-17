"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpdateOneRequiredWithoutProfilesNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutProfilesInput_schema_1 = require("./usersCreateWithoutProfilesInput.schema");
const usersUncheckedCreateWithoutProfilesInput_schema_1 = require("./usersUncheckedCreateWithoutProfilesInput.schema");
const usersCreateOrConnectWithoutProfilesInput_schema_1 = require("./usersCreateOrConnectWithoutProfilesInput.schema");
const usersUpsertWithoutProfilesInput_schema_1 = require("./usersUpsertWithoutProfilesInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersUpdateWithoutProfilesInput_schema_1 = require("./usersUpdateWithoutProfilesInput.schema");
const usersUncheckedUpdateWithoutProfilesInput_schema_1 = require("./usersUncheckedUpdateWithoutProfilesInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutProfilesInput_schema_1.usersCreateWithoutProfilesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutProfilesInput_schema_1.usersUncheckedCreateWithoutProfilesInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutProfilesInput_schema_1.usersCreateOrConnectWithoutProfilesInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => usersUpsertWithoutProfilesInput_schema_1.usersUpsertWithoutProfilesInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => usersUpdateWithoutProfilesInput_schema_1.usersUpdateWithoutProfilesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutProfilesInput_schema_1.usersUncheckedUpdateWithoutProfilesInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.usersUpdateOneRequiredWithoutProfilesNestedInputObjectSchema = Schema;
