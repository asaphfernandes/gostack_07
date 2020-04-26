const formatValue = (value: number): string => {
  const format = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  return format.format(value);
};

export default formatValue;
