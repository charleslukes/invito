export const jsonParser = (string) => {
  let parsed = JSON.parse(string);
  if (typeof parsed === "string") parsed = jsonParser(parsed);
  return parsed;
};

export const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
