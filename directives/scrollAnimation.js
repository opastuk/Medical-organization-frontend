const animatedScrollObserver = new IntersectionObserver(
  // eslint-disable-next-line no-shadow
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter');
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  },
);


export default {
  bind(element) {
    element.classList.add('before-enter');
    animatedScrollObserver.observe(element);
  },
};
