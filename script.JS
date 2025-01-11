document.addEventListener('DOMContentLoaded', () => {
    // Função para abrir Facebook
    const facebookIcon = document.querySelector('.navigation_social svg:nth-child(1)');
    facebookIcon.addEventListener('click', () => {
      window.open('https://www.facebook.com/seu_usuario', '_blank');
    });
  
    // Função para abrir Instagram
    const instagramIcon = document.querySelector('.navigation_social svg:nth-child(2)');
    instagramIcon.addEventListener('click', () => {
      window.open('https://www.instagram.com/3r1clk/', '_blank');
    });
  
    // Função para abrir TikTok
    const tiktokIcon = document.querySelector('.navigation_social svg:nth-child(3)');
    tiktokIcon.addEventListener('click', () => {
      window.open('https://www.tiktok.com/@paiva_mufasa?lang=pt-BR', '_blank');
    });
  
    // Função para abrir Twitter
    const twitterIcon = document.querySelector('.navigation_social svg:nth-child(4)');
    twitterIcon.addEventListener('click', () => {
      window.open('https://x.com/rickPaiva15', '_blank');
    });
  
    // Função para abrir YouTube
    const youtubeIcon = document.querySelector('.navigation_social svg:nth-child(5)');
    youtubeIcon.addEventListener('click', () => {
      window.open('https://www.youtube.com/@ErickPaiva021', '_blank');
    });
  
    // Função para comprar mangá
    const comprarMangaButton = document.querySelector('button');
    comprarMangaButton.addEventListener('click', () => {
      window.open('https://panini.com.br/vinland-saga-vol-1-amaxj001r?srsltid=AfmBOopJ2rp694n_E53FmOypDyNzo5FyLCjyd6HSnh2oBRbioYRF5rhN', '_blank');
    });
  });
  