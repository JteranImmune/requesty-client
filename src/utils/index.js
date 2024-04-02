export const capitalizedFirstLetter = (text) =>{
  if (text.charAt(0) === text.charAt(0).toUpperCase()) {
    return text;
  } else {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

export const capitalizeText = (text) => {
    const parsedText = text.split("_").join(" ")
    const capitalizedFirstLetter = parsedText[0].toUpperCase()
    return `${capitalizedFirstLetter}${parsedText.slice(1)}`
  }


export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (`0${date.getMonth() + 1}`).slice(-2); 
    const day = (`0${date.getDate()}`).slice(-2); 
    return `${year}-${month}-${day}`;
  }