/*
  Warnings:

  - A unique constraint covering the columns `[customer_phone,user_id]` on the table `credit_accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "credit_accounts_customer_phone_user_id_key" ON "public"."credit_accounts"("customer_phone", "user_id");
