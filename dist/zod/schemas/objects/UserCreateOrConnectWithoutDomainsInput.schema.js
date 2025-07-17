"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutDomainsInputObjectSchema = void 0;
const zod_1 = require("zod");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const UserCreateWithoutDomainsInput_schema_1 = require("./UserCreateWithoutDomainsInput.schema");
const UserUncheckedCreateWithoutDomainsInput_schema_1 = require("./UserUncheckedCreateWithoutDomainsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => UserWhereUniqueInput_schema_1.UserWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UserCreateWithoutDomainsInput_schema_1.UserCreateWithoutDomainsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutDomainsInput_schema_1.UserUncheckedCreateWithoutDomainsInputObjectSchema),
    ]),
})
    .strict();
exports.UserCreateOrConnectWithoutDomainsInputObjectSchema = Schema;
