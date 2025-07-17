"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersCreateOrConnectWithoutOrdersInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersCreateWithoutOrdersInput_schema_1 = require("./usersCreateWithoutOrdersInput.schema");
const usersUncheckedCreateWithoutOrdersInput_schema_1 = require("./usersUncheckedCreateWithoutOrdersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutOrdersInput_schema_1.usersCreateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutOrdersInput_schema_1.usersUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
})
    .strict();
exports.usersCreateOrConnectWithoutOrdersInputObjectSchema = Schema;
