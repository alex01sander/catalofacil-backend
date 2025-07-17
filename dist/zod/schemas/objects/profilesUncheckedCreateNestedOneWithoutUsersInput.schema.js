"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilesUncheckedCreateNestedOneWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const profilesCreateWithoutUsersInput_schema_1 = require("./profilesCreateWithoutUsersInput.schema");
const profilesUncheckedCreateWithoutUsersInput_schema_1 = require("./profilesUncheckedCreateWithoutUsersInput.schema");
const profilesCreateOrConnectWithoutUsersInput_schema_1 = require("./profilesCreateOrConnectWithoutUsersInput.schema");
const profilesWhereUniqueInput_schema_1 = require("./profilesWhereUniqueInput.schema");
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
    connect: zod_1.z.lazy(() => profilesWhereUniqueInput_schema_1.profilesWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.profilesUncheckedCreateNestedOneWithoutUsersInputObjectSchema = Schema;
