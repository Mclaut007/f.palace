export default function uncoverTruncatedElem() {
  const truncatedElem = document.querySelector("[data-truncated-elem]");
  truncatedElem.addEventListener("mouseenter", uncoverElement);

  function uncoverElement() {
    truncatedElem.style.height = `calc(${truncatedElem.scrollHeight}px + ${
      getComputedStyle(truncatedElem).paddingBottom
    })`;
    console.log("mouseover");
  }

  truncatedElem.addEventListener("mouseleave", truncateElement);

  function truncateElement() {
    truncatedElem.style.height = "";
    console.log("mouseout");
  }
}
