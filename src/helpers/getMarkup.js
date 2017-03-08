const getMarkup = async query => {
  const response = await fetch(query);
  const markup = await response.text();
  return markup;
}

export default getMarkup;
