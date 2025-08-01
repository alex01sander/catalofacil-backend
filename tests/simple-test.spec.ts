describe('Simple Test', () => {
  it('should have environment variables set', () => {
    console.log('DATABASE_URL:', process.env.DATABASE_URL);
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('JWT_SECRET:', process.env.JWT_SECRET);
    
    expect(process.env.NODE_ENV).toBe('test');
    expect(process.env.JWT_SECRET).toBe('test-secret-key');
    expect(process.env.DATABASE_URL).toContain('postgresql://');
  });
}); 