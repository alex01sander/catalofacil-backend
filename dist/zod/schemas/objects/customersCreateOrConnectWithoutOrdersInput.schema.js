"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customersCreateOrConnectWithoutOrdersInputObjectSchema = void 0;
const zod_1 = require("zod");
const customersWhereUniqueInput_schema_1 = require("./customersWhereUniqueInput.schema");
const customersCreateWithoutOrdersInput_schema_1 = require("./customersCreateWithoutOrdersInput.schema");
const customersUncheckedCreateWithoutOrdersInput_schema_1 = require("./customersUncheckedCreateWithoutOrdersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => customersWhereUniqueInput_schema_1.customersWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => customersCreateWithoutOrdersInput_schema_1.customersCreateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => customersUncheckedCreateWithoutOrdersInput_schema_1.customersUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
})
    .strict();
exports.customersCreateOrConnectWithoutOrdersInputObjectSchema = Schema;
