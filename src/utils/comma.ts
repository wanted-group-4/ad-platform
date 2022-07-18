const comma = (value: number): string => {
  const string = /\D/g;
  const threeDigitNumber = /\B(?=(\d{3})+(?!\d))/g;

  return String(value).replace(string, '').replace(threeDigitNumber, ',');
};

export default comma;
