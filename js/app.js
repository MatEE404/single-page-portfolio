const nav = document.querySelector("nav")

const scrollFunction = () => {
  let scrollTop = 180
  if (document.body.scrollTop > scrollTop || document.documentElement.scrollTop > scrollTop) {
    nav.classList.add("scroll")
  } else {
    nav.classList.remove("scroll")
  }
}

document.addEventListener("scroll", scrollFunction)

window.onload = () => {
  scrollFunction()
}

$(window).on("load",function(){
  $(".loader").fadeOut(2000);
});