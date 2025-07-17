"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainUpsertWithWhereUniqueWithoutUserInputObjectSchema = void 0;
const zod_1 = require("zod");
const DomainWhereUniqueInput_schema_1 = require("./DomainWhereUniqueInput.schema");
const DomainUpdateWithoutUserInput_schema_1 = require("./DomainUpdateWithoutUserInput.schema");
const DomainUncheckedUpdateWithoutUserInput_schema_1 = require("./DomainUncheckedUpdateWithoutUserInput.schema");
const DomainCreateWithoutUserInput_schema_1 = require("./DomainCreateWithoutUserInput.schema");
const DomainUncheckedCreateWithoutUserInput_schema_1 = require("./DomainUncheckedCreateWithoutUserInput.schema");
const Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(() => DomainWhereUniqueInput_schema_1.DomainWhereUniqueInputObjectSchema),
    update: zod_1.z.union([
        zod_1.z.lazy(() => DomainUpdateWithoutUserInput_schema_1.DomainUpdateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => DomainUncheckedUpdateWithoutUserInput_schema_1.DomainUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(() => DomainCreateWithoutUserInput_schema_1.DomainCreateWithoutUserInputObjectSchema),
        zod_1.z.lazy(() => DomainUncheckedCreateWithoutUserInput_schema_1.DomainUncheckedCreateWithoutUserInputObjectSchema),
    ]),
})
    .strict();
exports.DomainUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
