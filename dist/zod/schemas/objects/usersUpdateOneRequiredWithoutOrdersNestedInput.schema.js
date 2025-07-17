"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpdateOneRequiredWithoutOrdersNestedInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersCreateWithoutOrdersInput_schema_1 = require("./usersCreateWithoutOrdersInput.schema");
const usersUncheckedCreateWithoutOrdersInput_schema_1 = require("./usersUncheckedCreateWithoutOrdersInput.schema");
const usersCreateOrConnectWithoutOrdersInput_schema_1 = require("./usersCreateOrConnectWithoutOrdersInput.schema");
const usersUpsertWithoutOrdersInput_schema_1 = require("./usersUpsertWithoutOrdersInput.schema");
const usersWhereUniqueInput_schema_1 = require("./usersWhereUniqueInput.schema");
const usersUpdateWithoutOrdersInput_schema_1 = require("./usersUpdateWithoutOrdersInput.schema");
const usersUncheckedUpdateWithoutOrdersInput_schema_1 = require("./usersUncheckedUpdateWithoutOrdersInput.schema");
const Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(() => usersCreateWithoutOrdersInput_schema_1.usersCreateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutOrdersInput_schema_1.usersUncheckedCreateWithoutOrdersInputObjectSchema),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(() => usersCreateOrConnectWithoutOrdersInput_schema_1.usersCreateOrConnectWithoutOrdersInputObjectSchema)
        .optional(),
    upsert: zod_1.z
        .lazy(() => usersUpsertWithoutOrdersInput_schema_1.usersUpsertWithoutOrdersInputObjectSchema)
        .optional(),
    connect: zod_1.z.lazy(() => usersWhereUniqueInput_schema_1.usersWhereUniqueInputObjectSchema).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(() => usersUpdateWithoutOrdersInput_schema_1.usersUpdateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutOrdersInput_schema_1.usersUncheckedUpdateWithoutOrdersInputObjectSchema),
    ])
        .optional(),
})
    .strict();
exports.usersUpdateOneRequiredWithoutOrdersNestedInputObjectSchema = Schema;
