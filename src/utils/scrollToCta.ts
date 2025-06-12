// utils/scrollToCTA.ts
export const scrollToCTA = () => {
  const ctaSection = document.getElementById('cta');
  if (ctaSection) {
    ctaSection.scrollIntoView({ behavior: 'smooth' });
  }
};
