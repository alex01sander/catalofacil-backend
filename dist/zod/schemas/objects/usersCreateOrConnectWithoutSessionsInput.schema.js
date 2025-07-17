"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateOrConnectWithoutSessionsInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersCreateWithoutSessionsInput_schema_1 = require("./usersCreateWithoutSessionsInput.schema");
const usersUncheckedCreateWithoutSessionsInput_schema_1 = require("./usersUncheckedCreateWithoutSessionsInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutSessionsInput_schema_1.usersCreateWithoutSessionsInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutSessionsInput_schema_1.usersUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
})
    .strict();
exports.usersCreateOrConnectWithoutSessionsInputObjectSchema = Schema;
