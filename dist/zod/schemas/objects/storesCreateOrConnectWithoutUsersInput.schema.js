"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesCreateOrConnectWithoutUsersInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const storesCreateWithoutUsersInput_schema_1 = require("./storesCreateWithoutUsersInput.schema");
const storesUncheckedCreateWithoutUsersInput_schema_1 = require("./storesUncheckedCreateWithoutUsersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => storesCreateWithoutUsersInput_schema_1.storesCreateWithoutUsersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutUsersInput_schema_1.storesUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
})
    .strict();
exports.storesCreateOrConnectWithoutUsersInputObjectSchema = Schema;
