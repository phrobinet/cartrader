export const useUtilities = () => {
  function firstLetterCapitalized(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return {
    firstLetterCapitalized
  };
};