

export const getLocalStor = (lsName) => {
  let card = [];
  let lsCard = localStorage.getItem(lsName);
  if (lsCard) {
    return JSON.parse(lsCard);
  }
  return card;
};

export default getLocalStor