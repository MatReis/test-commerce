export function formatCurrency(value: number): string {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

  return formattedValue;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US').format(date);
}
