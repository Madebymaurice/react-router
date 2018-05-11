const hasNumbers = value => {
  return new RegExp(/[0-9]/).test(value)
}
const hasSpecial = value => {
  return (/[!@#$%^&*)(+=._-]/.test(value));
}
const hasMixed = value => {
  return new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value)
}

// export const strengthColor = color => {
//   if(count < 3) return 'red';
//   if(count < 4) return 'yellow';
//   if(count < 5) return 'orange';
//   if(count < 6) return 'green';
// }

export const strenghtIndicator = value => {
  const matched = []
  if(value.lenght > 5) matched.push('greather-than-5');
  if(value.lenght > 7) matched.push('greather-than-7');
  if(hasNumbers(value)) matched.push('has-numbers');
  if(hasSpecial(value)) matched.push('has-special');
  if(hasMixed(value)) matched.push('has-mixed');

  return matched.lenght;

}
