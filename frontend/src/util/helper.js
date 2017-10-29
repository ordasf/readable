export function convertDate(timestamp) {
  const date = new Date(timestamp);
  return (`${date.toDateString()} - ${date.toTimeString()}`);
}
