"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutDomainsInputObjectSchema = void 0;
const zod_1 = require("zod");
const UserCreateWithoutDomainsInput_schema_1 = require("./UserCreateWithoutDomainsInput.schema");
const UserUncheckedCreateWithoutDomainsInput_schema_1 = require("./UserUncheckedCreateWithoutDomainsInput.schema");
const UserCreateOrConnectWithoutDomainsInput_schema_1 = require("./UserCreateOrConnectWithoutDomainsInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
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
    connect: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema).optional(),
})
    .strict();
exports.UserCreateNestedOneWithoutDomainsInputObjectSchema = Schema;
