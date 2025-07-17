"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpdateOneRequiredWithoutIdentitiesNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutIdentitiesInput_schema_1 = require("./usersCreateWithoutIdentitiesInput.schema");
const usersUncheckedCreateWithoutIdentitiesInput_schema_1 = require("./usersUncheckedCreateWithoutIdentitiesInput.schema");
const usersCreateOrConnectWithoutIdentitiesInput_schema_1 = require("./usersCreateOrConnectWithoutIdentitiesInput.schema");
const usersUpsertWithoutIdentitiesInput_schema_1 = require("./usersUpsertWithoutIdentitiesInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersUpdateWithoutIdentitiesInput_schema_1 = require("./usersUpdateWithoutIdentitiesInput.schema");
const usersUncheckedUpdateWithoutIdentitiesInput_schema_1 = require("./usersUncheckedUpdateWithoutIdentitiesInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutIdentitiesInput_schema_1.usersCreateWithoutIdentitiesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutIdentitiesInput_schema_1.usersUncheckedCreateWithoutIdentitiesInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutIdentitiesInput_schema_1.usersCreateOrConnectWithoutIdentitiesInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => usersUpsertWithoutIdentitiesInput_schema_1.usersUpsertWithoutIdentitiesInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => usersUpdateWithoutIdentitiesInput_schema_1.usersUpdateWithoutIdentitiesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutIdentitiesInput_schema_1.usersUncheckedUpdateWithoutIdentitiesInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.usersUpdateOneRequiredWithoutIdentitiesNestedInputObjectSchema = Schema;
