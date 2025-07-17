-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "auth";

-- CreateEnum
CREATE TYPE "auth"."aal_level" AS ENUM ('aal1', 'aal2', 'aal3');

-- CreateEnum
CREATE TYPE "auth"."code_challenge_method" AS ENUM ('s256', 'plain');

-- CreateEnum
CREATE TYPE "auth"."factor_status" AS ENUM ('unverified', 'verified');

-- CreateEnum
CREATE TYPE "auth"."factor_type" AS ENUM ('totp', 'webauthn', 'phone');

-- CreateEnum
CREATE TYPE "auth"."one_time_token_type" AS ENUM ('confirmation_token', 'reauthentication_token', 'recovery_token', 'email_change_token_new', 'email_change_token_current', 'phone_change_token');

-- CreateTable
CREATE TABLE "auth"."audit_log_entries" (
    "instance_id" UUID,
    "id" UUID NOT NULL,
    "payload" JSON,
    "created_at" TIMESTAMPTZ(6),
    "ip_address" VARCHAR(64) NOT NULL DEFAULT '',

    CONSTRAINT "audit_log_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."flow_state" (
    "id" UUID NOT NULL,
    "user_id" UUID,
    "auth_code" TEXT NOT NULL,
    "code_challenge_method" "auth"."code_challenge_method" NOT NULL,
    "code_challenge" TEXT NOT NULL,
    "provider_type" TEXT NOT NULL,
    "provider_access_token" TEXT,
    "provider_refresh_token" TEXT,
    "created_at" TIMESTAMPTZ(6),
    "updated_at" TIMESTAMPTZ(6),
    "authentication_method" TEXT NOT NULL,
    "auth_code_issued_at" TIMESTAMPTZ(6),

    CONSTRAINT "flow_state_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."identities" (
    "provider_id" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "identity_data" JSONB NOT NULL,
    "provider" TEXT NOT NULL,
    "last_sign_in_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6),
    "updated_at" TIMESTAMPTZ(6),
    "email" TEXT,
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),

    CONSTRAINT "identities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."instances" (
    "id" UUID NOT NULL,
    "uuid" UUID,
    "raw_base_config" TEXT,
    "created_at" TIMESTAMPTZ(6),
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "instances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."mfa_amr_claims" (
    "session_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "authentication_method" TEXT NOT NULL,
    "id" UUID NOT NULL,

    CONSTRAINT "amr_id_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."mfa_challenges" (
    "id" UUID NOT NULL,
    "factor_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "verified_at" TIMESTAMPTZ(6),
    "ip_address" INET NOT NULL,
    "otp_code" TEXT,
    "web_authn_session_data" JSONB,

    CONSTRAINT "mfa_challenges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."mfa_factors" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "friendly_name" TEXT,
    "factor_type" "auth"."factor_type" NOT NULL,
    "status" "auth"."factor_status" NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "secret" TEXT,
    "phone" TEXT,
    "last_challenged_at" TIMESTAMPTZ(6),
    "web_authn_credential" JSONB,
    "web_authn_aaguid" UUID,

    CONSTRAINT "mfa_factors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."one_time_tokens" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "token_type" "auth"."one_time_token_type" NOT NULL,
    "token_hash" TEXT NOT NULL,
    "relates_to" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "one_time_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."refresh_tokens" (
    "instance_id" UUID,
    "id" BIGSERIAL NOT NULL,
    "token" VARCHAR(255),
    "user_id" VARCHAR(255),
    "revoked" BOOLEAN,
    "created_at" TIMESTAMPTZ(6),
    "updated_at" TIMESTAMPTZ(6),
    "parent" VARCHAR(255),
    "session_id" UUID,

    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."saml_providers" (
    "id" UUID NOT NULL,
    "sso_provider_id" UUID NOT NULL,
    "entity_id" TEXT NOT NULL,
    "metadata_xml" TEXT NOT NULL,
    "metadata_url" TEXT,
    "attribute_mapping" JSONB,
    "created_at" TIMESTAMPTZ(6),
    "updated_at" TIMESTAMPTZ(6),
    "name_id_format" TEXT,

    CONSTRAINT "saml_providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."saml_relay_states" (
    "id" UUID NOT NULL,
    "sso_provider_id" UUID NOT NULL,
    "request_id" TEXT NOT NULL,
    "for_email" TEXT,
    "redirect_to" TEXT,
    "created_at" TIMESTAMPTZ(6),
    "updated_at" TIMESTAMPTZ(6),
    "flow_state_id" UUID,

    CONSTRAINT "saml_relay_states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."schema_migrations" (
    "version" VARCHAR(255) NOT NULL,

    CONSTRAINT "schema_migrations_pkey" PRIMARY KEY ("version")
);

-- CreateTable
CREATE TABLE "auth"."sessions" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6),
    "updated_at" TIMESTAMPTZ(6),
    "factor_id" UUID,
    "aal" "auth"."aal_level",
    "not_after" TIMESTAMPTZ(6),
    "refreshed_at" TIMESTAMP(6),
    "user_agent" TEXT,
    "ip" INET,
    "tag" TEXT,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."sso_domains" (
    "id" UUID NOT NULL,
    "sso_provider_id" UUID NOT NULL,
    "domain" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6),
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "sso_domains_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."sso_providers" (
    "id" UUID NOT NULL,
    "resource_id" TEXT,
    "created_at" TIMESTAMPTZ(6),
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "sso_providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."users" (
    "instance_id" UUID,
    "id" UUID NOT NULL,
    "aud" VARCHAR(255),
    "role" VARCHAR(255),
    "email" VARCHAR(255),
    "encrypted_password" VARCHAR(255),
    "email_confirmed_at" TIMESTAMPTZ(6),
    "invited_at" TIMESTAMPTZ(6),
    "confirmation_token" VARCHAR(255),
    "confirmation_sent_at" TIMESTAMPTZ(6),
    "recovery_token" VARCHAR(255),
    "recovery_sent_at" TIMESTAMPTZ(6),
    "email_change_token_new" VARCHAR(255),
    "email_change" VARCHAR(255),
    "email_change_sent_at" TIMESTAMPTZ(6),
    "last_sign_in_at" TIMESTAMPTZ(6),
    "raw_app_meta_data" JSONB,
    "raw_user_meta_data" JSONB,
    "is_super_admin" BOOLEAN,
    "created_at" TIMESTAMPTZ(6),
    "updated_at" TIMESTAMPTZ(6),
    "phone" TEXT,
    "phone_confirmed_at" TIMESTAMPTZ(6),
    "phone_change" TEXT DEFAULT '',
    "phone_change_token" VARCHAR(255) DEFAULT '',
    "phone_change_sent_at" TIMESTAMPTZ(6),
    "confirmed_at" TIMESTAMPTZ(6),
    "email_change_token_current" VARCHAR(255) DEFAULT '',
    "email_change_confirm_status" SMALLINT DEFAULT 0,
    "banned_until" TIMESTAMPTZ(6),
    "reauthentication_token" VARCHAR(255) DEFAULT '',
    "reauthentication_sent_at" TIMESTAMPTZ(6),
    "is_sso_user" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMPTZ(6),
    "is_anonymous" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."cash_flow" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "store_id" UUID,
    "type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_DATE,
    "payment_method" TEXT DEFAULT 'cash',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cash_flow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."categories" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT DEFAULT '#8B5CF6',
    "image" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "store_id" UUID,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."controller_admins" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "controller_admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."credit_accounts" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "store_id" UUID,
    "customer_name" TEXT NOT NULL,
    "customer_phone" TEXT,
    "total_debt" DECIMAL NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "credit_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."credit_transactions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "credit_account_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    "description" TEXT,
    "date" DATE NOT NULL DEFAULT CURRENT_DATE,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "credit_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."customers" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "store_owner_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "store_id" UUID,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."domain_owners" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "domain" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "domain_type" TEXT NOT NULL DEFAULT 'domain',

    CONSTRAINT "domain_owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."expenses" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "store_id" UUID,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    "due_date" DATE,
    "is_recurring" BOOLEAN DEFAULT false,
    "recurring_frequency" TEXT,
    "status" TEXT DEFAULT 'pending',
    "paid_date" DATE,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "expenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."order_items" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "order_id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "unit_price" DECIMAL(10,2) NOT NULL,
    "total_price" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."orders" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "store_owner_id" UUID NOT NULL,
    "customer_id" UUID,
    "customer_name" TEXT NOT NULL,
    "customer_email" TEXT,
    "customer_phone" TEXT,
    "total_amount" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "status" TEXT DEFAULT 'pending',
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "store_id" UUID,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."product_costs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "store_id" UUID,
    "product_name" TEXT NOT NULL,
    "cost_price" DECIMAL NOT NULL,
    "desired_margin" DECIMAL NOT NULL,
    "suggested_price" DECIMAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_costs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."products" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "category_id" UUID,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN DEFAULT true,
    "image" TEXT,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "store_id" UUID,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."profiles" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "full_name" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."sales" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "product_name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "unit_price" DECIMAL NOT NULL,
    "total_price" DECIMAL NOT NULL,
    "sale_date" DATE NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'completed',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "store_id" UUID,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."store_settings" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "store_name" TEXT NOT NULL DEFAULT 'Minha Loja',
    "store_description" TEXT DEFAULT 'Catálogo de produtos',
    "mobile_logo" TEXT,
    "desktop_banner" TEXT,
    "mobile_banner_color" TEXT DEFAULT 'from-green-400 via-green-500 to-green-600',
    "mobile_banner_image" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "store_subtitle" TEXT DEFAULT 'Produtos Incríveis',
    "instagram_url" TEXT DEFAULT 'https://instagram.com/',
    "whatsapp_number" TEXT DEFAULT '5511999999999',

    CONSTRAINT "store_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."stores" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "domain" TEXT,
    "user_id" UUID NOT NULL,
    "description" TEXT,
    "logo_url" TEXT,
    "banner_url" TEXT,
    "whatsapp_number" TEXT,
    "instagram_url" TEXT,
    "theme_color" TEXT DEFAULT '#2980B9',
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "audit_logs_instance_id_idx" ON "auth"."audit_log_entries"("instance_id");

-- CreateIndex
CREATE INDEX "flow_state_created_at_idx" ON "auth"."flow_state"("created_at" DESC);

-- CreateIndex
CREATE INDEX "idx_auth_code" ON "auth"."flow_state"("auth_code");

-- CreateIndex
CREATE INDEX "idx_user_id_auth_method" ON "auth"."flow_state"("user_id", "authentication_method");

-- CreateIndex
CREATE INDEX "identities_email_idx" ON "auth"."identities"("email");

-- CreateIndex
CREATE INDEX "identities_user_id_idx" ON "auth"."identities"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "identities_provider_id_provider_unique" ON "auth"."identities"("provider_id", "provider");

-- CreateIndex
CREATE UNIQUE INDEX "mfa_amr_claims_session_id_authentication_method_pkey" ON "auth"."mfa_amr_claims"("session_id", "authentication_method");

-- CreateIndex
CREATE INDEX "mfa_challenge_created_at_idx" ON "auth"."mfa_challenges"("created_at" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "mfa_factors_last_challenged_at_key" ON "auth"."mfa_factors"("last_challenged_at");

-- CreateIndex
CREATE INDEX "factor_id_created_at_idx" ON "auth"."mfa_factors"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "mfa_factors_user_id_idx" ON "auth"."mfa_factors"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "unique_phone_factor_per_user" ON "auth"."mfa_factors"("user_id", "phone");

-- CreateIndex
CREATE INDEX "one_time_tokens_relates_to_hash_idx" ON "auth"."one_time_tokens" USING HASH ("relates_to");

-- CreateIndex
CREATE INDEX "one_time_tokens_token_hash_hash_idx" ON "auth"."one_time_tokens" USING HASH ("token_hash");

-- CreateIndex
CREATE UNIQUE INDEX "one_time_tokens_user_id_token_type_key" ON "auth"."one_time_tokens"("user_id", "token_type");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_token_unique" ON "auth"."refresh_tokens"("token");

-- CreateIndex
CREATE INDEX "refresh_tokens_instance_id_idx" ON "auth"."refresh_tokens"("instance_id");

-- CreateIndex
CREATE INDEX "refresh_tokens_instance_id_user_id_idx" ON "auth"."refresh_tokens"("instance_id", "user_id");

-- CreateIndex
CREATE INDEX "refresh_tokens_parent_idx" ON "auth"."refresh_tokens"("parent");

-- CreateIndex
CREATE INDEX "refresh_tokens_session_id_revoked_idx" ON "auth"."refresh_tokens"("session_id", "revoked");

-- CreateIndex
CREATE INDEX "refresh_tokens_updated_at_idx" ON "auth"."refresh_tokens"("updated_at" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "saml_providers_entity_id_key" ON "auth"."saml_providers"("entity_id");

-- CreateIndex
CREATE INDEX "saml_providers_sso_provider_id_idx" ON "auth"."saml_providers"("sso_provider_id");

-- CreateIndex
CREATE INDEX "saml_relay_states_created_at_idx" ON "auth"."saml_relay_states"("created_at" DESC);

-- CreateIndex
CREATE INDEX "saml_relay_states_for_email_idx" ON "auth"."saml_relay_states"("for_email");

-- CreateIndex
CREATE INDEX "saml_relay_states_sso_provider_id_idx" ON "auth"."saml_relay_states"("sso_provider_id");

-- CreateIndex
CREATE INDEX "sessions_not_after_idx" ON "auth"."sessions"("not_after" DESC);

-- CreateIndex
CREATE INDEX "sessions_user_id_idx" ON "auth"."sessions"("user_id");

-- CreateIndex
CREATE INDEX "user_id_created_at_idx" ON "auth"."sessions"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "sso_domains_sso_provider_id_idx" ON "auth"."sso_domains"("sso_provider_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "auth"."users"("phone");

-- CreateIndex
CREATE INDEX "users_instance_id_idx" ON "auth"."users"("instance_id");

-- CreateIndex
CREATE INDEX "users_is_anonymous_idx" ON "auth"."users"("is_anonymous");

-- CreateIndex
CREATE UNIQUE INDEX "controller_admins_user_id_key" ON "public"."controller_admins"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "controller_admins_email_key" ON "public"."controller_admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "domain_owners_domain_key" ON "public"."domain_owners"("domain");

-- CreateIndex
CREATE INDEX "idx_domain_owners_type" ON "public"."domain_owners"("domain_type");

-- CreateIndex
CREATE INDEX "idx_order_items_order_id" ON "public"."order_items"("order_id");

-- CreateIndex
CREATE INDEX "idx_order_items_product_id" ON "public"."order_items"("product_id");

-- CreateIndex
CREATE INDEX "idx_orders_created_at" ON "public"."orders"("created_at");

-- CreateIndex
CREATE INDEX "idx_orders_status" ON "public"."orders"("status");

-- CreateIndex
CREATE INDEX "idx_orders_store_id" ON "public"."orders"("store_id");

-- CreateIndex
CREATE INDEX "idx_orders_store_owner_id" ON "public"."orders"("store_owner_id");

-- CreateIndex
CREATE UNIQUE INDEX "store_settings_user_id_key" ON "public"."store_settings"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "stores_slug_key" ON "public"."stores"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "stores_domain_key" ON "public"."stores"("domain");

-- AddForeignKey
ALTER TABLE "auth"."identities" ADD CONSTRAINT "identities_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth"."mfa_amr_claims" ADD CONSTRAINT "mfa_amr_claims_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "auth"."sessions"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth"."mfa_challenges" ADD CONSTRAINT "mfa_challenges_auth_factor_id_fkey" FOREIGN KEY ("factor_id") REFERENCES "auth"."mfa_factors"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth"."mfa_factors" ADD CONSTRAINT "mfa_factors_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth"."one_time_tokens" ADD CONSTRAINT "one_time_tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth"."refresh_tokens" ADD CONSTRAINT "refresh_tokens_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "auth"."sessions"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth"."saml_providers" ADD CONSTRAINT "saml_providers_sso_provider_id_fkey" FOREIGN KEY ("sso_provider_id") REFERENCES "auth"."sso_providers"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth"."saml_relay_states" ADD CONSTRAINT "saml_relay_states_flow_state_id_fkey" FOREIGN KEY ("flow_state_id") REFERENCES "auth"."flow_state"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth"."saml_relay_states" ADD CONSTRAINT "saml_relay_states_sso_provider_id_fkey" FOREIGN KEY ("sso_provider_id") REFERENCES "auth"."sso_providers"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth"."sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "auth"."sso_domains" ADD CONSTRAINT "sso_domains_sso_provider_id_fkey" FOREIGN KEY ("sso_provider_id") REFERENCES "auth"."sso_providers"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."categories" ADD CONSTRAINT "categories_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "public"."stores"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."categories" ADD CONSTRAINT "categories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."controller_admins" ADD CONSTRAINT "controller_admins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."credit_transactions" ADD CONSTRAINT "credit_transactions_credit_account_id_fkey" FOREIGN KEY ("credit_account_id") REFERENCES "public"."credit_accounts"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."customers" ADD CONSTRAINT "customers_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "public"."stores"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."customers" ADD CONSTRAINT "customers_store_owner_id_fkey" FOREIGN KEY ("store_owner_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."domain_owners" ADD CONSTRAINT "domain_owners_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."order_items" ADD CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."order_items" ADD CONSTRAINT "order_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."orders" ADD CONSTRAINT "orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."orders" ADD CONSTRAINT "orders_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "public"."stores"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."orders" ADD CONSTRAINT "orders_store_owner_id_fkey" FOREIGN KEY ("store_owner_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "public"."stores"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."products" ADD CONSTRAINT "products_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."profiles" ADD CONSTRAINT "profiles_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."sales" ADD CONSTRAINT "sales_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "public"."stores"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."store_settings" ADD CONSTRAINT "store_settings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."stores" ADD CONSTRAINT "stores_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
