"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersUpsertWithoutOrdersInputObjectSchema = void 0;
const zod_1 = require("zod");
const usersUpdateWithoutOrdersInput_schema_1 = require("./usersUpdateWithoutOrdersInput.schema");
const usersUncheckedUpdateWithoutOrdersInput_schema_1 = require("./usersUncheckedUpdateWithoutOrdersInput.schema");
const usersCreateWithoutOrdersInput_schema_1 = require("./usersCreateWithoutOrdersInput.schema");
const usersUncheckedCreateWithoutOrdersInput_schema_1 = require("./usersUncheckedCreateWithoutOrdersInput.schema");
const Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(() => usersUpdateWithoutOrdersInput_schema_1.usersUpdateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedUpdateWithoutOrdersInput_schema_1.usersUncheckedUpdateWithoutOrdersInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => usersCreateWithoutOrdersInput_schema_1.usersCreateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => usersUncheckedCreateWithoutOrdersInput_schema_1.usersUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
})
    .strict();
exports.usersUpsertWithoutOrdersInputObjectSchema = Schema;
