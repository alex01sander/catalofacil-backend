"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilesUpdateOneWithoutUsersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const profilesCreateWithoutUsersInput_schema_1 = require("./profilesCreateWithoutUsersInput.schema");
const profilesUncheckedCreateWithoutUsersInput_schema_1 = require("./profilesUncheckedCreateWithoutUsersInput.schema");
const profilesCreateOrConnectWithoutUsersInput_schema_1 = require("./profilesCreateOrConnectWithoutUsersInput.schema");
const profilesUpsertWithoutUsersInput_schema_1 = require("./profilesUpsertWithoutUsersInput.schema");
const profilesWhereUniqueInput_schema_1 = require("./profilesWhereUniqueInput.schema");
const profilesUpdateWithoutUsersInput_schema_1 = require("./profilesUpdateWithoutUsersInput.schema");
const profilesUncheckedUpdateWithoutUsersInput_schema_1 = require("./profilesUncheckedUpdateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => profilesCreateWithoutUsersInput_schema_1.profilesCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => profilesUncheckedCreateWithoutUsersInput_schema_1.profilesUncheckedCreateWithoutUsersInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => profilesCreateOrConnectWithoutUsersInput_schema_1.profilesCreateOrConnectWithoutUsersInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => profilesUpsertWithoutUsersInput_schema_1.profilesUpsertWithoutUsersInputObjectSchema)
        .optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z.lazy(() => profilesWhereUniqueInput_schema_1.profilesWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => profilesUpdateWithoutUsersInput_schema_1.profilesUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => profilesUncheckedUpdateWithoutUsersInput_schema_1.profilesUncheckedUpdateWithoutUsersInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.profilesUpdateOneWithoutUsersNestedInputObjectSchema = Schema;
