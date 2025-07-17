"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpsertWithoutIdentitiesInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersUpdateWithoutIdentitiesInput_schema_1 = require("./usersUpdateWithoutIdentitiesInput.schema");
const usersUncheckedUpdateWithoutIdentitiesInput_schema_1 = require("./usersUncheckedUpdateWithoutIdentitiesInput.schema");
const usersCreateWithoutIdentitiesInput_schema_1 = require("./usersCreateWithoutIdentitiesInput.schema");
const usersUncheckedCreateWithoutIdentitiesInput_schema_1 = require("./usersUncheckedCreateWithoutIdentitiesInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => usersUpdateWithoutIdentitiesInput_schema_1.usersUpdateWithoutIdentitiesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutIdentitiesInput_schema_1.usersUncheckedUpdateWithoutIdentitiesInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutIdentitiesInput_schema_1.usersCreateWithoutIdentitiesInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutIdentitiesInput_schema_1.usersUncheckedCreateWithoutIdentitiesInputObjectSchema),
    ]),
})
    .strict();
exports.usersUpsertWithoutIdentitiesInputObjectSchema = Schema;
