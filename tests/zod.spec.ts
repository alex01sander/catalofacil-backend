import { 
  cashFlowCreateInputSchema, 
  credit_accountsCreateInputSchema,
  credit_transactionsCreateInputSchema,
  creditDebitWithInstallmentsSchema
} from '../src/zod';

describe('Zod Schemas', () => {
  describe('cashFlowCreateInputSchema', () => {
    it('should validate valid cash flow data', () => {
      const validData = {
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        store_id: '123e4567-e89b-12d3-a456-426614174001',
        type: 'income',
        amount: 100.50,
        description: 'Venda de produtos',
        date: '2025-01-15',
        category: 'vendas'
      };

      const result = cashFlowCreateInputSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.type).toBe('entrada'); // Deve transformar 'income' para 'entrada'
        expect(result.data.amount).toBe(100.50);
      }
    });

    it('should validate expense type', () => {
      const validData = {
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        store_id: '123e4567-e89b-12d3-a456-426614174001',
        type: 'expense',
        amount: 50.00,
        description: 'Compra de material',
        date: '2025-01-15',
        category: 'compras'
      };

      const result = cashFlowCreateInputSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.type).toBe('saida'); // Deve transformar 'expense' para 'saida'
      }
    });

    it('should reject invalid type', () => {
      const invalidData = {
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        store_id: '123e4567-e89b-12d3-a456-426614174001',
        type: 'invalid',
        amount: 100,
        description: 'Test',
        date: '2025-01-15',
        category: 'test'
      };

      const result = cashFlowCreateInputSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should accept string amounts and convert to number', () => {
      const validData = {
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        store_id: '123e4567-e89b-12d3-a456-426614174001',
        type: 'income',
        amount: '150.75',
        description: 'Venda',
        date: '2025-01-15',
        category: 'vendas'
      };

      const result = cashFlowCreateInputSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(typeof result.data.amount).toBe('number');
        expect(result.data.amount).toBe(150.75);
      }
    });
  });

  describe('credit_accountsCreateInputSchema', () => {
    it('should validate valid credit account data', () => {
      const validData = {
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        store_id: '123e4567-e89b-12d3-a456-426614174001',
        customer_name: 'João Silva',
        customer_phone: '51987654321',
        customer_address: 'Rua Teste, 123',
        total_debt: 0,
        status: 'active'
      };

      const result = credit_accountsCreateInputSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should make user_id optional', () => {
      const validData = {
        store_id: '123e4567-e89b-12d3-a456-426614174001',
        customer_name: 'João Silva',
        customer_phone: '51987654321',
        customer_address: 'Rua Teste, 123',
        total_debt: 0,
        status: 'active'
      };

      const result = credit_accountsCreateInputSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject missing required fields', () => {
      const invalidData = {
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        // customer_name missing
        customer_phone: '51987654321'
      };

      const result = credit_accountsCreateInputSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('credit_transactionsCreateInputSchema', () => {
    it('should validate valid credit transaction data', () => {
      const validData = {
        credit_account_id: '123e4567-e89b-12d3-a456-426614174000',
        user_id: '123e4567-e89b-12d3-a456-426614174001',
        type: 'debito',
        amount: 150.00,
        description: 'Compra a prazo',
        date: '2025-01-15'
      };

      const result = credit_transactionsCreateInputSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should validate payment type', () => {
      const validData = {
        credit_account_id: '123e4567-e89b-12d3-a456-426614174000',
        user_id: '123e4567-e89b-12d3-a456-426614174001',
        type: 'pagamento',
        amount: 50.00,
        description: 'Pagamento parcial',
        date: '2025-01-15'
      };

      const result = credit_transactionsCreateInputSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject invalid transaction type', () => {
      const invalidData = {
        credit_account_id: '123e4567-e89b-12d3-a456-426614174000',
        user_id: '123e4567-e89b-12d3-a456-426614174001',
        type: 'invalid',
        amount: 150.00,
        description: 'Test',
        date: '2025-01-15'
      };

      const result = credit_transactionsCreateInputSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('creditDebitWithInstallmentsSchema', () => {
    it('should validate valid debit with installments data', () => {
      const validData = {
        is_new_customer: true,
        customer_name: 'Maria Silva',
        customer_phone: '51987654321',
        customer_address: 'Rua Teste, 456',
        total_amount: 300.00,
        description: 'Compra parcelada',
        installments_count: 3,
        frequency: 'mensal',
        first_due_date: '2025-02-15'
      };

      const result = creditDebitWithInstallmentsSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should validate existing customer data', () => {
      const validData = {
        customer_name: 'João Silva',
        customer_phone: '51987654321',
        customer_address: 'Rua Teste, 123',
        is_new_customer: false,
        existing_customer_id: '123e4567-e89b-12d3-a456-426614174000',
        total_amount: 200.00,
        description: 'Compra adicional',
        installments_count: 2,
        frequency: 'semanal',
        first_due_date: '2025-02-15'
      };

      const result = creditDebitWithInstallmentsSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject invalid frequency', () => {
      const invalidData = {
        is_new_customer: true,
        customer_name: 'João Silva',
        customer_phone: '51987654321',
        customer_address: 'Rua Teste, 123',
        total_amount: 300.00,
        description: 'Compra parcelada',
        installments_count: 3,
        frequency: 'invalid',
        first_due_date: '2025-02-15'
      };

      const result = creditDebitWithInstallmentsSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject invalid installments count', () => {
      const invalidData = {
        is_new_customer: true,
        customer_name: 'João Silva',
        customer_phone: '51987654321',
        customer_address: 'Rua Teste, 123',
        total_amount: 300.00,
        description: 'Compra parcelada',
        installments_count: 0, // Deve ser pelo menos 1
        frequency: 'mensal',
        first_due_date: '2025-02-15'
      };

      const result = creditDebitWithInstallmentsSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });
}); 