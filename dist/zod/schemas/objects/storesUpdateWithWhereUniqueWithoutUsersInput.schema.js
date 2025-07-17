"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpdateWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const storesUpdateWithoutUsersInput_schema_1 = require("./storesUpdateWithoutUsersInput.schema");
const storesUncheckedUpdateWithoutUsersInput_schema_1 = require("./storesUncheckedUpdateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema),
    data: zod_1.z.union([
        zod_1.z.lazy(() => storesUpdateWithoutUsersInput_schema_1.storesUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedUpdateWithoutUsersInput_schema_1.storesUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.storesUpdateWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
