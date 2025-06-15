
const translations = {
  id: {
    title: "Bukit Biru Tenggarong",
    subtitle: "Simulasi Alam & Petualangan Virtual di Dunia Roblox",
    playNow: "Mainkan Sekarang",
    aboutTitle: "Tentang Lokasi",
    aboutText: "Air Terjun Bukit Biru adalah objek wisata alam...",
    gameplayTitle: "Pengalaman di Roblox",
    gameplayText: "Game \"Bukit Biru Tenggarong\" menawarkan simulasi pendakian gunung...",
    devTitle: "Developer",
    devText: "Seorang developer muda yang aktif menciptakan pengalaman dunia virtual di Roblox...",
    galleryTitle: "Galeri Gambar",
    mapTitle: "Lokasi Bukit Biru",
    shareTitle: "Bagikan"
  },
  en: {
    title: "Bukit Biru Tenggarong",
    subtitle: "Nature Simulation & Virtual Adventure in Roblox",
    playNow: "Play Now",
    aboutTitle: "About the Location",
    aboutText: "Bukit Biru Waterfall is a natural tourist spot...",
    gameplayTitle: "Roblox Experience",
    gameplayText: "The game 'Bukit Biru Tenggarong' offers a realistic mountain hiking simulation...",
    devTitle: "Developer",
    devText: "A young developer passionate about nature and virtual experiences...",
    galleryTitle: "Gallery",
    mapTitle: "Bukit Biru Location",
    shareTitle: "Share"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
