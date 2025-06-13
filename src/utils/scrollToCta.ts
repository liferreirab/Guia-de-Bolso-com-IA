export const scrollToCTA = () => {
  // Suppress popup for next few seconds
  (window as any).suppressPopup = true;

  const ctaSection = document.getElementById('cta');
  if (ctaSection) {
    ctaSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Reset the flag after 3 seconds
  setTimeout(() => {
    (window as any).suppressPopup = false;
  }, 3000);
};
