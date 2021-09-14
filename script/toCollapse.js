function toCollapse(button, div) {
  button.addEventListener("click", () => {
    div.classList.toggle("d-none");
  });
}

export default toCollapse;
