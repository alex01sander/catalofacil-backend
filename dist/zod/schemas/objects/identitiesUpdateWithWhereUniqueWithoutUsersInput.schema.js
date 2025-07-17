"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identitiesUpdateWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const identitiesWhereUniqueInput_schema_1 = require("./identitiesWhereUniqueInput.schema");
const identitiesUpdateWithoutUsersInput_schema_1 = require("./identitiesUpdateWithoutUsersInput.schema");
const identitiesUncheckedUpdateWithoutUsersInput_schema_1 = require("./identitiesUncheckedUpdateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => identitiesWhereUniqueInput_schema_1.identitiesWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => identitiesUpdateWithoutUsersInput_schema_1.identitiesUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => identitiesUncheckedUpdateWithoutUsersInput_schema_1.identitiesUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.identitiesUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
