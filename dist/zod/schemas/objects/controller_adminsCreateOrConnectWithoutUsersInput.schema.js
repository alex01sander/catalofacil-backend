"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller_adminsCreateOrConnectWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const controller_adminsWhereUniqueInput_schema_1 = require("./controller_adminsWhereUniqueInput.schema");
const controller_adminsCreateWithoutUsersInput_schema_1 = require("./controller_adminsCreateWithoutUsersInput.schema");
const controller_adminsUncheckedCreateWithoutUsersInput_schema_1 = require("./controller_adminsUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => controller_adminsWhereUniqueInput_schema_1.controller_adminsWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => controller_adminsCreateWithoutUsersInput_schema_1.controller_adminsCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => controller_adminsUncheckedCreateWithoutUsersInput_schema_1.controller_adminsUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.controller_adminsCreateOrConnectWithoutUsersInputObjectSchema = Schema;
