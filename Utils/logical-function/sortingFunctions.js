export const sortByDate = (data, order) => {
  console.log(order);
  const sortedData = data.slice().sort((a, b) => {
    if (order === "old") {
      return new Date(a.updatedAt) - new Date(b.updatedAt);
    } else if (order === "new") {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    }
    // If the order is not specified, return the original data
    return 0;
  });

  return sortedData;
};
