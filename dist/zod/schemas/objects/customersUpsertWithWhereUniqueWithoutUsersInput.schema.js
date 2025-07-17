"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersUpsertWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersWhereUniqueInput_schema_1 = require("./customersWhereUniqueInput.schema");
const customersUpdateWithoutUsersInput_schema_1 = require("./customersUpdateWithoutUsersInput.schema");
const customersUncheckedUpdateWithoutUsersInput_schema_1 = require("./customersUncheckedUpdateWithoutUsersInput.schema");
const customersCreateWithoutUsersInput_schema_1 = require("./customersCreateWithoutUsersInput.schema");
const customersUncheckedCreateWithoutUsersInput_schema_1 = require("./customersUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => customersUpdateWithoutUsersInput_schema_1.customersUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => customersUncheckedUpdateWithoutUsersInput_schema_1.customersUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => customersCreateWithoutUsersInput_schema_1.customersCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => customersUncheckedCreateWithoutUsersInput_schema_1.customersUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.customersUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
