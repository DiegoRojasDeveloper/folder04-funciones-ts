export const fn01setDateFormat = ( date: string ) => {
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dic']

    const dateFormatted = new Date(date);
    const day = dateFormatted.getDate();
    const month = months[dateFormatted.getMonth()];
    const year = dateFormatted.getFullYear();

    return `${month} ${day}, ${year}`
}

export const separateString = ( valor: any )  => {
  if ( typeof valor === 'string') {
    valor.includes( '|' || ',' ) 
    return valor.split( /[|,]/ ).join('\n')
  } 
  return valor
}