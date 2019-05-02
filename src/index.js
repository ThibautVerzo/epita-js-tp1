import list from "./actions/list";
import add from "./actions/add";
import remove from "./actions/remove";
import update from "./actions/update";

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

const addPictureHandler = () => {
  const url = getInputContents();

  // use your actions functions to add a new picture
    if (url.length === 0)
      return;
    else
      add(url);
  // FIXME: bonus, trim eventual whitespaces and validate content

  clearInputContents();
};

const refreshGrid = () => {
  // use your functions to get all the elements
  const items = list();

  const fragment = document.createDocumentFragment();

  items.forEach((element, index) => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    // set the URL from your Picture model.
    imgElement.src = element;
    
    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );

    // use your functions to delete the selected element
    deleteButtonElement.addEventListener("click", () => {
      remove(index);
      refreshGrid();
    });

    const updateButtonElement = clone.querySelector(
      ".picture-item-update-button"
    );
    updateButtonElement.addEventListener("click", () => {
      const url = getInputContents();
      if (url.length === 0)
        return;
      else {
        update(index, url);
        refreshGrid();
      }
    });

    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => {
  addPictureHandler();
  refreshGrid();
});
