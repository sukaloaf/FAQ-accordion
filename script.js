const accordionBtns = document.querySelectorAll(".accordion-btn");

// Loop through each accordion button
accordionBtns.forEach((btn) => {
  // Add a click event listener to each button
  btn.addEventListener("click", function () {
    // Toggle the "active" class on the clicked button, allowing for styling changes
    this.classList.toggle("active");

    // Get the next sibling element of the clicked button, which is assumed to be the accordion description/content
    const accordionDescription = this.nextElementSibling;

    // Get references to the plus and minus icons within the clicked button
    const [plusIcon, minusIcon] = this.querySelectorAll(
      ".plus-icon, .minus-icon"
    );

    // Toggle the visibility of the accordion content by adjusting the maxHeight style property
    accordionDescription.style.maxHeight = accordionDescription.style.maxHeight
      ? null
      : `${accordionDescription.scrollHeight}px`;

    // Toggle the display of the plus and minus icons based on the accordion content visibility
    [plusIcon.style.display, minusIcon.style.display] = accordionDescription
      .style.maxHeight
      ? ["block", "none"]
      : ["none", "block"];
  });
});
