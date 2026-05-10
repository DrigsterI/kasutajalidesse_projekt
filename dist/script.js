const posterCarousels = document.querySelectorAll(".poster-carousel");

function updatePosterCarouselColumns(carousel) {
  const styles = window.getComputedStyle(carousel);
  const minColSize =
    parseFloat(styles.getPropertyValue("--min-col-size")) || 200;
  const gap = parseFloat(styles.columnGap || styles.gap) || 0;
  const width = carousel.clientWidth;

  if (width <= 0) {
    return;
  }

  const visibleColumns = Math.max(
    1,
    Math.floor((width + gap) / (minColSize + gap)),
  );
  carousel.style.setProperty("--visible-cols", String(visibleColumns));
}

function updateAllPosterCarousels() {
  posterCarousels.forEach(updatePosterCarouselColumns);
}

if (posterCarousels.length > 0) {
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        updatePosterCarouselColumns(entry.target);
      });
    });

    posterCarousels.forEach((carousel) => {
      observer.observe(carousel);
    });
  }

  window.addEventListener("load", updateAllPosterCarousels);
  window.addEventListener("resize", updateAllPosterCarousels);
  updateAllPosterCarousels();
}

function getCarouselScrollStep(carousel) {
  const firstSlide = carousel.querySelector(".poster-slide");

  if (!firstSlide) {
    return 0;
  }

  const styles = window.getComputedStyle(carousel);
  const gap = parseFloat(styles.columnGap || styles.gap) || 0;
  return firstSlide.getBoundingClientRect().width + gap;
}

const carouselPrevButtons = document.querySelectorAll("[data-carousel-prev]");
const carouselNextButtons = document.querySelectorAll("[data-carousel-next]");

carouselPrevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const shell = button.closest(".carousel-shell");
    const carousel = shell ? shell.querySelector(".poster-carousel") : null;

    if (!carousel) {
      return;
    }

    const step = getCarouselScrollStep(carousel);
    if (step > 0) {
      carousel.scrollBy({ left: -step, behavior: "smooth" });
    }
  });
});

carouselNextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const shell = button.closest(".carousel-shell");
    const carousel = shell ? shell.querySelector(".poster-carousel") : null;

    if (!carousel) {
      return;
    }

    const step = getCarouselScrollStep(carousel);
    if (step > 0) {
      carousel.scrollBy({ left: step, behavior: "smooth" });
    }
  });
});
