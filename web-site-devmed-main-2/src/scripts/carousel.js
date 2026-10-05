const carousel = document.querySelector(
  ".partners-section-st-data-l-carousel-inner"
);
const items = document.querySelectorAll(
  ".partners-section-st-data-l-carousel-item"
);
let currentIndex = Math.floor(items.length / 2);
let itemArray = Array.from(items);

function getDimensions() {
  const container = document.querySelector(
    ".partners-section-st-data-l-carousel"
  );
  const containerWidth = container.offsetWidth;

  const firstItem = itemArray[0];
  const itemStyle = window.getComputedStyle(firstItem);
  const marginLeft = parseFloat(itemStyle.marginLeft) || 0;
  const marginRight = parseFloat(itemStyle.marginRight) || 0;
  const itemWidth = firstItem.offsetWidth + marginLeft + marginRight;

  return { containerWidth, itemWidth };
}

function updateCarousel() {
  const { containerWidth, itemWidth } = getDimensions();
  const offset = -(currentIndex * itemWidth) + (containerWidth - itemWidth) / 2;

  carousel.style.transform = `translateX(${offset}px)`;

  itemArray.forEach((item, index) => {
    item.classList.toggle("active", index === currentIndex);
  });
}

function spawnItems() {
  const { itemWidth } = getDimensions();
  if (currentIndex <= 3) {
    const newItems = Array.from(items)
      .reverse()
      .map((item) => item.cloneNode(true));
    const oldOffset =
      parseFloat(
        carousel.style.transform.replace("translateX(", "").replace("px)", "")
      ) || 0;

    newItems.forEach((item) => carousel.prepend(item));
    const addedCount = newItems.length;
    currentIndex += addedCount;
    itemArray = Array.from(carousel.children);

    const newOffset = oldOffset - addedCount * itemWidth;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(${newOffset}px)`;
    carousel.offsetHeight;
    carousel.style.transition = "transform 0.5s ease-in-out";
  }

  if (itemArray.length > items.length * 3) {
    const excess = itemArray.length - items.length * 2;
    for (let i = 0; i < excess; i++) {
      carousel.removeChild(carousel.lastChild);
    }
    itemArray = Array.from(carousel.children);
  }
}

function nextItem() {
  currentIndex--;
  spawnItems();
  updateCarousel();
}

updateCarousel();
setInterval(nextItem, 1000);

window.addEventListener("resize", updateCarousel);
