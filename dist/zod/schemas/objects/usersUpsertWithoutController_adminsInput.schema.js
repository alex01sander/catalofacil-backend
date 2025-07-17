"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpsertWithoutController_adminsInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersUpdateWithoutController_adminsInput_schema_1 = require("./usersUpdateWithoutController_adminsInput.schema");
const usersUncheckedUpdateWithoutController_adminsInput_schema_1 = require("./usersUncheckedUpdateWithoutController_adminsInput.schema");
const usersCreateWithoutController_adminsInput_schema_1 = require("./usersCreateWithoutController_adminsInput.schema");
const usersUncheckedCreateWithoutController_adminsInput_schema_1 = require("./usersUncheckedCreateWithoutController_adminsInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => usersUpdateWithoutController_adminsInput_schema_1.usersUpdateWithoutController_adminsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutController_adminsInput_schema_1.usersUncheckedUpdateWithoutController_adminsInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutController_adminsInput_schema_1.usersCreateWithoutController_adminsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutController_adminsInput_schema_1.usersUncheckedCreateWithoutController_adminsInputObjectSchema),
    ]),
})
    .strict();
exports.usersUpsertWithoutController_adminsInputObjectSchema = Schema;
