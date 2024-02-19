export const filterByUsername = (data, searchTerm, field) => {
  let filteredData;
  // filteredData = data.filter((item) =>
  //   item[field].toLowerCase().includes(searchTerm.toLowerCase())
  // );
  return filteredData;
};

export const filterByBlogTitle = (data, searchTerm, field) => {
  if (!searchTerm) {
    return data; // Return the original data if the searchTerm is not provided.
  }

  let filteredData;
  filteredData = data.filter((item) => {
    // Check if the item has the 'blogTitle' field and perform case-insensitive search
    if (
      item[field] &&
      item[field].toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  return filteredData;
};
