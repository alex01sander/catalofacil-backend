"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storesCreateOrConnectWithoutOrdersInputObjectSchema = void 0;
const zod_1 = require("zod");
const storesWhereUniqueInput_schema_1 = require("./storesWhereUniqueInput.schema");
const storesCreateWithoutOrdersInput_schema_1 = require("./storesCreateWithoutOrdersInput.schema");
const storesUncheckedCreateWithoutOrdersInput_schema_1 = require("./storesUncheckedCreateWithoutOrdersInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => storesWhereUniqueInput_schema_1.storesWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => storesCreateWithoutOrdersInput_schema_1.storesCreateWithoutOrdersInputObjectSchema),
        zod_1.z.lazy(() => storesUncheckedCreateWithoutOrdersInput_schema_1.storesUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
})
    .strict();
exports.storesCreateOrConnectWithoutOrdersInputObjectSchema = Schema;
