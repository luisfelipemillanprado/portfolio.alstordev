/**
 * @function scrollToSection
 * @param {string} id
 * @returns
 */
export const scrollToSection = (id) => {
  const navLink = document.getElementById(id);
  navLink.addEventListener('click', (event) => {
    event.preventDefault();
    const startSection = document.getElementById(navLink.getAttribute('goto'));
    if (startSection) {
      startSection.scrollIntoView(true);
    }
  });
};
