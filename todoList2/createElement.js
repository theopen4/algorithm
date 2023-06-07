/**
 *
 * @param {string} tagName
 * @param {object} attributes
 * @return {HTMLElement}
 */
export function createElement(tagName, attributs = {}) {
  const tag = document.createElement(tagName);
  for (const [attribut, value] of Object.entries(attributs)) {
    if (value !== null) {
      tag.setAttribute(attribut, value);
    }
  }
  return tag;
}
