"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateOrConnectWithoutStoresInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersCreateWithoutStoresInput_schema_1 = require("./usersCreateWithoutStoresInput.schema");
const usersUncheckedCreateWithoutStoresInput_schema_1 = require("./usersUncheckedCreateWithoutStoresInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutStoresInput_schema_1.usersCreateWithoutStoresInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutStoresInput_schema_1.usersUncheckedCreateWithoutStoresInputObjectSchema),
    ]),
})
    .strict();
exports.usersCreateOrConnectWithoutStoresInputObjectSchema = Schema;
