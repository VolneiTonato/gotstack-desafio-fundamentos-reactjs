const formatValue = (value: number | Date): string =>
  new Date(value).toLocaleDateString('pt-br');

export default formatValue;

// Intl.DateTimeFormat('pt-BR').format(new Date(value));
// new Date(value).toLocaleDateString('pt-br');
