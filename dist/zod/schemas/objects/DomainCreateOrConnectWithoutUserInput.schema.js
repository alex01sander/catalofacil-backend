"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainCreateOrConnectWithoutUserInputObjectSchema = void 0;
const zod_1 = require("zod");
const DomainWhereUniqueInput_schema_1 = require("./DomainWhereUniqueInput.schema");
const DomainCreateWithoutUserInput_schema_1 = require("./DomainCreateWithoutUserInput.schema");
const DomainUncheckedCreateWithoutUserInput_schema_1 = require("./DomainUncheckedCreateWithoutUserInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema),
    create: zod_1.z.union([
        zod_1.z.lazy(() => DomainCreateWithoutUserInput_schema_1.DomainCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => DomainUncheckedCreateWithoutUserInput_schema_1.DomainUncheckedCreateWithoutUserInputObjectSchema),
    ]),
})
    .strict();
exports.DomainCreateOrConnectWithoutUserInputObjectSchema = Schema;
