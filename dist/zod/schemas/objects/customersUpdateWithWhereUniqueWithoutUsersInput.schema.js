"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersUpdateWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersWhereUniqueInput_schema_1 = require("./customersWhereUniqueInput.schema");
const customersUpdateWithoutUsersInput_schema_1 = require("./customersUpdateWithoutUsersInput.schema");
const customersUncheckedUpdateWithoutUsersInput_schema_1 = require("./customersUncheckedUpdateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => customersUpdateWithoutUsersInput_schema_1.customersUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => customersUncheckedUpdateWithoutUsersInput_schema_1.customersUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.customersUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
