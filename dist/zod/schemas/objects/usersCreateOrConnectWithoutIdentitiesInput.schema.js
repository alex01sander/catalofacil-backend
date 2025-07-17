"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateOrConnectWithoutIdentitiesInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersCreateWithoutIdentitiesInput_schema_1 = require("./usersCreateWithoutIdentitiesInput.schema");
const usersUncheckedCreateWithoutIdentitiesInput_schema_1 = require("./usersUncheckedCreateWithoutIdentitiesInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutIdentitiesInput_schema_1.usersCreateWithoutIdentitiesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutIdentitiesInput_schema_1.usersUncheckedCreateWithoutIdentitiesInputObjectSchema),
    ]),
})
    .strict();
exports.usersCreateOrConnectWithoutIdentitiesInputObjectSchema = Schema;
