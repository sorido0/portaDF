export const scrollToSection = (gotTo) => {
  const section = document.querySelector("#" + gotTo);
  section.scrollIntoView({ behavior: "smooth" });
}
