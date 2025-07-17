"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateOrConnectWithoutController_adminsInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersCreateWithoutController_adminsInput_schema_1 = require("./usersCreateWithoutController_adminsInput.schema");
const usersUncheckedCreateWithoutController_adminsInput_schema_1 = require("./usersUncheckedCreateWithoutController_adminsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutController_adminsInput_schema_1.usersCreateWithoutController_adminsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutController_adminsInput_schema_1.usersUncheckedCreateWithoutController_adminsInputObjectSchema),
    ]),
})
    .strict();
exports.usersCreateOrConnectWithoutController_adminsInputObjectSchema = Schema;
