import jwt from 'jsonwebtoken';

// Função para gerar token de teste
export function generateTestToken(payload: any = {}) {
  const defaultPayload = {
    id: '123e4567-e89b-12d3-a456-426614174000',
    email: 'test@example.com',
    ...payload
  };
  
  return jwt.sign(defaultPayload, 'test-secret-key', { expiresIn: '1h' });
}

// Função para verificar se uma data é válida
export function isValidDate(date: any): boolean {
  const d = new Date(date);
  return d instanceof Date && !isNaN(d.getTime());
}

// Função para calcular datas de vencimento (simulando a função do creditTransactions)
export function calculateDueDates(firstDueDate: Date, installmentsCount: number, frequency: string): Date[] {
  const dueDates: Date[] = [];
  const startDate = new Date(firstDueDate);
  
  for (let i = 0; i < installmentsCount; i++) {
    const dueDate = new Date(startDate);
    
    switch (frequency) {
      case 'diaria':
        dueDate.setDate(startDate.getDate() + i);
        break;
      case 'semanal':
        dueDate.setDate(startDate.getDate() + (i * 7));
        break;
      case 'quinzenal':
        dueDate.setDate(startDate.getDate() + (i * 15));
        break;
      case 'mensal':
        dueDate.setMonth(startDate.getMonth() + i);
        break;
      default:
        dueDate.setDate(startDate.getDate() + i);
    }
    
    dueDates.push(dueDate);
  }
  
  return dueDates;
}

// Função para validar formato de telefone brasileiro
export function isValidBrazilianPhone(phone: string): boolean {
  const phoneRegex = /^(\+55\s?)?(\(?\d{2}\)?\s?)?(\d{4,5}-?\d{4})$/;
  return phoneRegex.test(phone);
}

// Função para validar CPF
export function isValidCPF(cpf: string): boolean {
  const cleanCPF = cpf.replace(/\D/g, '');
  
  if (cleanCPF.length !== 11) return false;
  
  // Verificar se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cleanCPF)) return false;
  
  // Validar primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCPF.charAt(9))) return false;
  
  // Validar segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCPF.charAt(10))) return false;
  
  return true;
}

// Função para formatar valor monetário
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

describe('Utility Functions', () => {
  describe('generateTestToken', () => {
    it('should generate a valid JWT token', () => {
      const token = generateTestToken();
      expect(typeof token).toBe('string');
      expect(token.split('.')).toHaveLength(3); // JWT tem 3 partes
    });

    it('should generate token with custom payload', () => {
      const customPayload = { id: 'custom-id', role: 'admin' };
      const token = generateTestToken(customPayload);
      
      const decoded = jwt.verify(token, 'test-secret-key') as any;
      expect(decoded.id).toBe('custom-id');
      expect(decoded.role).toBe('admin');
    });
  });

  describe('isValidDate', () => {
    it('should validate valid dates', () => {
      expect(isValidDate('2025-01-15')).toBe(true);
      expect(isValidDate(new Date())).toBe(true);
      expect(isValidDate('2025-01-15T10:30:00Z')).toBe(true);
    });

    it('should reject invalid dates', () => {
      expect(isValidDate('invalid-date')).toBe(false);
      expect(isValidDate('2025-13-45')).toBe(false);
      expect(isValidDate('')).toBe(false);
      expect(isValidDate('not-a-date')).toBe(false);
    });
  });

  describe('calculateDueDates', () => {
    it('should calculate daily installments correctly', () => {
      const startDate = new Date('2025-01-15');
      const dueDates = calculateDueDates(startDate, 3, 'diaria');
      
      expect(dueDates).toHaveLength(3);
      expect(dueDates[0].toISOString().split('T')[0]).toBe('2025-01-15');
      expect(dueDates[1].toISOString().split('T')[0]).toBe('2025-01-16');
      expect(dueDates[2].toISOString().split('T')[0]).toBe('2025-01-17');
    });

    it('should calculate weekly installments correctly', () => {
      const startDate = new Date('2025-01-15');
      const dueDates = calculateDueDates(startDate, 2, 'semanal');
      
      expect(dueDates).toHaveLength(2);
      expect(dueDates[0].toISOString().split('T')[0]).toBe('2025-01-15');
      expect(dueDates[1].toISOString().split('T')[0]).toBe('2025-01-22');
    });

    it('should calculate monthly installments correctly', () => {
      const startDate = new Date('2025-01-15');
      const dueDates = calculateDueDates(startDate, 3, 'mensal');
      
      expect(dueDates).toHaveLength(3);
      expect(dueDates[0].toISOString().split('T')[0]).toBe('2025-01-15');
      expect(dueDates[1].toISOString().split('T')[0]).toBe('2025-02-15');
      expect(dueDates[2].toISOString().split('T')[0]).toBe('2025-03-15');
    });

    it('should handle invalid frequency gracefully', () => {
      const startDate = new Date('2025-01-15');
      const dueDates = calculateDueDates(startDate, 2, 'invalid');
      
      expect(dueDates).toHaveLength(2);
      // Deve usar o comportamento padrão (diário)
      expect(dueDates[0].toISOString().split('T')[0]).toBe('2025-01-15');
      expect(dueDates[1].toISOString().split('T')[0]).toBe('2025-01-16');
    });
  });

  describe('isValidBrazilianPhone', () => {
    it('should validate valid Brazilian phone numbers', () => {
      expect(isValidBrazilianPhone('51987654321')).toBe(true);
      expect(isValidBrazilianPhone('(51) 98765-4321')).toBe(true);
      expect(isValidBrazilianPhone('+55 51 98765-4321')).toBe(true);
      expect(isValidBrazilianPhone('51 98765-4321')).toBe(true);
      expect(isValidBrazilianPhone('11987654321')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(isValidBrazilianPhone('123')).toBe(false);
      expect(isValidBrazilianPhone('invalid')).toBe(false);
      expect(isValidBrazilianPhone('5198765')).toBe(false); // Muito curto
      expect(isValidBrazilianPhone('519876543210')).toBe(false); // Muito longo
    });
  });

  describe('isValidCPF', () => {
    it('should validate valid CPFs', () => {
      expect(isValidCPF('123.456.789-09')).toBe(true);
      expect(isValidCPF('12345678909')).toBe(true);
    });

    it('should reject invalid CPFs', () => {
      expect(isValidCPF('123.456.789-10')).toBe(false);
      expect(isValidCPF('111.111.111-11')).toBe(false);
      expect(isValidCPF('123')).toBe(false);
      expect(isValidCPF('invalid')).toBe(false);
    });
  });

  describe('formatCurrency', () => {
    it('should format currency correctly', () => {
      expect(formatCurrency(100)).toMatch(/R\$\s*100,00/);
      expect(formatCurrency(100.50)).toMatch(/R\$\s*100,50/);
      expect(formatCurrency(1000.99)).toMatch(/R\$\s*1\.000,99/);
      expect(formatCurrency(0)).toMatch(/R\$\s*0,00/);
    });

    it('should handle negative values', () => {
      expect(formatCurrency(-100)).toMatch(/-R\$\s*100,00/);
      expect(formatCurrency(-50.75)).toMatch(/-R\$\s*50,75/);
    });
  });
}); 