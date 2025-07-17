"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutDomainsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const UserCreateWithoutDomainsInput_schema_1 = require("./UserCreateWithoutDomainsInput.schema");
const UserUncheckedCreateWithoutDomainsInput_schema_1 = require("./UserUncheckedCreateWithoutDomainsInput.schema");
const UserCreateOrConnectWithoutDomainsInput_schema_1 = require("./UserCreateOrConnectWithoutDomainsInput.schema");
const UserUpsertWithoutDomainsInput_schema_1 = require("./UserUpsertWithoutDomainsInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const UserUpdateWithoutDomainsInput_schema_1 = require("./UserUpdateWithoutDomainsInput.schema");
const UserUncheckedUpdateWithoutDomainsInput_schema_1 = require("./UserUncheckedUpdateWithoutDomainsInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => UserCreateWithoutDomainsInput_schema_1.UserCreateWithoutDomainsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutDomainsInput_schema_1.UserUncheckedCreateWithoutDomainsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => UserCreateOrConnectWithoutDomainsInput_schema_1.UserCreateOrConnectWithoutDomainsInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => UserUpsertWithoutDomainsInput_schema_1.UserUpsertWithoutDomainsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => UserUpdateWithoutDomainsInput_schema_1.UserUpdateWithoutDomainsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutDomainsInput_schema_1.UserUncheckedUpdateWithoutDomainsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.UserUpdateOneRequiredWithoutDomainsNestedInputObjectSchema = Schema;
