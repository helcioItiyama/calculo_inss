export function formattedPrice(number) {
  return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format((number));
}

export function formattedNumber(number) {
  return number.replace('.', ',')
}

export function percentage(FullNumber, deductedNumber) {
  return deductedNumber * 100 / FullNumber
}