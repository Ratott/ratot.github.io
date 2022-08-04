let display = false;
let pages = [document.getElementById("page1"),document.getElementById("page2"),document.getElementById("page3"),document.getElementById("page4")];
let titles = ["Home","Projects","Test","About"];

let toggle = button => {
  let element = document.getElementById("list");

  if (!display) {
    element.classList.add('open');
    display=true;
  } else {
    element.classList.remove('open');
    display=false;
  }
}

let changePage = (page) => {
  for(let i = 0;i<pages.length;i++){
    if(page === i){
      pages[i].classList.remove("hidden");
      document.title = "Ratot - " + titles[i];
    }
    else{
      pages[i].classList.add("hidden");
    }
  }
}
