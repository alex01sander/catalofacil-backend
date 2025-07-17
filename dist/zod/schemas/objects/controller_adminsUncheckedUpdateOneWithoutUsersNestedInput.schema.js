"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller_adminsUncheckedUpdateOneWithoutUsersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const controller_adminsCreateWithoutUsersInput_schema_1 = require("./controller_adminsCreateWithoutUsersInput.schema");
const controller_adminsUncheckedCreateWithoutUsersInput_schema_1 = require("./controller_adminsUncheckedCreateWithoutUsersInput.schema");
const controller_adminsCreateOrConnectWithoutUsersInput_schema_1 = require("./controller_adminsCreateOrConnectWithoutUsersInput.schema");
const controller_adminsUpsertWithoutUsersInput_schema_1 = require("./controller_adminsUpsertWithoutUsersInput.schema");
const controller_adminsWhereUniqueInput_schema_1 = require("./controller_adminsWhereUniqueInput.schema");
const controller_adminsUpdateWithoutUsersInput_schema_1 = require("./controller_adminsUpdateWithoutUsersInput.schema");
const controller_adminsUncheckedUpdateWithoutUsersInput_schema_1 = require("./controller_adminsUncheckedUpdateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => controller_adminsCreateWithoutUsersInput_schema_1.controller_adminsCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => controller_adminsUncheckedCreateWithoutUsersInput_schema_1.controller_adminsUncheckedCreateWithoutUsersInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => controller_adminsCreateOrConnectWithoutUsersInput_schema_1.controller_adminsCreateOrConnectWithoutUsersInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => controller_adminsUpsertWithoutUsersInput_schema_1.controller_adminsUpsertWithoutUsersInputObjectSchema)
        .optional(),
    disconnect: zod_1.z.boolean().optional(),
    delete: zod_1.z.boolean().optional(),
    connect: zod_1.z
        .lazy(() => controller_adminsWhereUniqueInput_schema_1.controller_adminsWhereUniqueInputObjectSchema)
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => controller_adminsUpdateWithoutUsersInput_schema_1.controller_adminsUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => controller_adminsUncheckedUpdateWithoutUsersInput_schema_1.controller_adminsUncheckedUpdateWithoutUsersInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.controller_adminsUncheckedUpdateOneWithoutUsersNestedInputObjectSchema = Schema;
