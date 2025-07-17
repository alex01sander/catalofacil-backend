"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilesCreateOrConnectWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const profilesWhereUniqueInput_schema_1 = require("./profilesWhereUniqueInput.schema");
const profilesCreateWithoutUsersInput_schema_1 = require("./profilesCreateWithoutUsersInput.schema");
const profilesUncheckedCreateWithoutUsersInput_schema_1 = require("./profilesUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => profilesWhereUniqueInput_schema_1.profilesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => profilesCreateWithoutUsersInput_schema_1.profilesCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => profilesUncheckedCreateWithoutUsersInput_schema_1.profilesUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.profilesCreateOrConnectWithoutUsersInputObjectSchema = Schema;
