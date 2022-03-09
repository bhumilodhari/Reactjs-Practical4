const date = ("0" + new Date().getDate()).slice(-2);
const month = new Date().toLocaleDateString('en-US', {month: 'short'});
const year = new Date().toLocaleDateString('en-US', {year: 'numeric'});
const day = new Date().toLocaleDateString('en-US', {weekday: 'long'});

export {date , month , year, day};
