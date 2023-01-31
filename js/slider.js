 new Glide('.glide',
{
  type: 'carousel',
  perView: 3,
  breakpoints: {
    1200: {
      min: 800,
      max: 1200,
      perView: 2
    },
    800: {
      min: 0,
      max: 800,
      perView: 1
    }
  }
}).mount()