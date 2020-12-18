const html = document.documentElement;
const canvas = document.getElementById("hero-section");
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const currentFrame = index => (
    `wash-tunnel/${index.toString().padStart(4, '0')}.jpg`
  )


  const preloadImages = () => {
    for (let i = 1; i < 501; i++) {
      const image = new Image();
      image.src = currentFrame(i);
    }
  };

  const image = new Image();
  image.src = currentFrame(1);

  image.onload=function(){
    context.drawImage(image, 0, 0);
  }

  window.addEventListener('scroll', () => {
      const scrollTop = html.scrollTop;
      const maxScroll = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;
      const frameIndex = Math.min(200,Math.floor(scrollFraction * 201));
        requestAnimationFrame(() => updateImage(frameIndex+1))
  })
  
  const updateImage = index => {
    image.src = currentFrame(index);
    context.drawImage(image, 0, 0);
  }

  preloadImages()


//   =========================================

$(window).scroll(function(){
    $(".fade-out-text").css("opacity", 1 -$(window).scrollTop() / 250);
    if ($(window).scrollTop() >= 180) {
            $(".fade-in-text").fadeIn();
            $(".fade-in-text").removeClass("d-none");
        } else {
            $(".fade-in-text").fadeOut("fast");
        }
});
