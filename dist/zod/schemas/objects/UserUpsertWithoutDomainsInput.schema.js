"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutDomainsInputObjectSchema = void 0;
const zod_1 = require("zod");
const UserUpdateWithoutDomainsInput_schema_1 = require("./UserUpdateWithoutDomainsInput.schema");
const UserUncheckedUpdateWithoutDomainsInput_schema_1 = require("./UserUncheckedUpdateWithoutDomainsInput.schema");
const UserCreateWithoutDomainsInput_schema_1 = require("./UserCreateWithoutDomainsInput.schema");
const UserUncheckedCreateWithoutDomainsInput_schema_1 = require("./UserUncheckedCreateWithoutDomainsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => UserUpdateWithoutDomainsInput_schema_1.UserUpdateWithoutDomainsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedUpdateWithoutDomainsInput_schema_1.UserUncheckedUpdateWithoutDomainsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => UserCreateWithoutDomainsInput_schema_1.UserCreateWithoutDomainsInputObjectSchema),
        zod_1.z.lazy(() => UserUncheckedCreateWithoutDomainsInput_schema_1.UserUncheckedCreateWithoutDomainsInputObjectSchema),
    ]),
})
    .strict();
exports.UserUpsertWithoutDomainsInputObjectSchema = Schema;
