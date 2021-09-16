function radioSelector(div) {
  let res;
  div.forEach((element) => {
    if (element.checked === true) {
      res = element.value;
    }
  });
  return res;
}

export default radioSelector;
