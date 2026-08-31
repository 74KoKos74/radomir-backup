(() => {
  const offer = document.getElementById("buy");
  const sticky = document.querySelector(".sticky-buy");

  if (!offer || !sticky || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    ([entry]) => sticky.classList.toggle("is-hidden", entry.isIntersecting),
    { threshold: 0.08 }
  );

  observer.observe(offer);
})();
