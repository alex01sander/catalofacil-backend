"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesUpsertWithWhereUniqueWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const storesUpdateWithoutUsersInput_schema_1 = require("./storesUpdateWithoutUsersInput.schema");
const storesUncheckedUpdateWithoutUsersInput_schema_1 = require("./storesUncheckedUpdateWithoutUsersInput.schema");
const storesCreateWithoutUsersInput_schema_1 = require("./storesCreateWithoutUsersInput.schema");
const storesUncheckedCreateWithoutUsersInput_schema_1 = require("./storesUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => storesUpdateWithoutUsersInput_schema_1.storesUpdateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedUpdateWithoutUsersInput_schema_1.storesUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => storesCreateWithoutUsersInput_schema_1.storesCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutUsersInput_schema_1.storesUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.storesUpsertWithWhereUniqueWithoutUsersInputObjectSchema = Schema;
