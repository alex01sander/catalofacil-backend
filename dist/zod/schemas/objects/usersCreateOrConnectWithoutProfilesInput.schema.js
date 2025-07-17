"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateOrConnectWithoutProfilesInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersCreateWithoutProfilesInput_schema_1 = require("./usersCreateWithoutProfilesInput.schema");
const usersUncheckedCreateWithoutProfilesInput_schema_1 = require("./usersUncheckedCreateWithoutProfilesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutProfilesInput_schema_1.usersCreateWithoutProfilesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutProfilesInput_schema_1.usersUncheckedCreateWithoutProfilesInputObjectSchema),
    ]),
})
    .strict();
exports.usersCreateOrConnectWithoutProfilesInputObjectSchema = Schema;
