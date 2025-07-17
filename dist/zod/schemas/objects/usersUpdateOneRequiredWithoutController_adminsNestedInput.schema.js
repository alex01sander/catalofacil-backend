"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpdateOneRequiredWithoutController_adminsNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutController_adminsInput_schema_1 = require("./usersCreateWithoutController_adminsInput.schema");
const usersUncheckedCreateWithoutController_adminsInput_schema_1 = require("./usersUncheckedCreateWithoutController_adminsInput.schema");
const usersCreateOrConnectWithoutController_adminsInput_schema_1 = require("./usersCreateOrConnectWithoutController_adminsInput.schema");
const usersUpsertWithoutController_adminsInput_schema_1 = require("./usersUpsertWithoutController_adminsInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersUpdateWithoutController_adminsInput_schema_1 = require("./usersUpdateWithoutController_adminsInput.schema");
const usersUncheckedUpdateWithoutController_adminsInput_schema_1 = require("./usersUncheckedUpdateWithoutController_adminsInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutController_adminsInput_schema_1.usersCreateWithoutController_adminsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutController_adminsInput_schema_1.usersUncheckedCreateWithoutController_adminsInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutController_adminsInput_schema_1.usersCreateOrConnectWithoutController_adminsInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => usersUpsertWithoutController_adminsInput_schema_1.usersUpsertWithoutController_adminsInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => usersUpdateWithoutController_adminsInput_schema_1.usersUpdateWithoutController_adminsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutController_adminsInput_schema_1.usersUncheckedUpdateWithoutController_adminsInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.usersUpdateOneRequiredWithoutController_adminsNestedInputObjectSchema = Schema;
