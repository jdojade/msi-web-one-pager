

/**
    This is the Js File for the Nav Drop Down Max type
   */

/**
    1st menu
   */
 /**
function DropTheFirstMenu(){
    document.getElementById("dropdown-max-first-menu").style.display = 'block';
  }

function HideTheFirstMenu(){
    document.getElementById("dropdown-max-first-menu").style.display = 'none';
  }
   */

  /**
    2nd  menu
   */
 /**
function DropTheSecondMenu(){
    document.getElementById("dropdown-max-second-menu").style.display = 'block';
  }

function HideTheSecondMenu(){
    document.getElementById("dropdown-max-second-menu").style.display = 'none';
  }
  */

  
function DropTheFirstMenu(){
  document.getElementById("dropdown-max-menu").style.display = 'block';
  document.getElementById("main").style.opacity = '0.8';
}

function HideTheFirstMenu(){
  document.getElementById("dropdown-max-menu").style.display = 'none';
  document.getElementById("main").style.opacity = '1';
}


   /**
   Header Change
   */

function Headerchange(){

  document.getElementById("header").style.backgroundColor = 'rgb(38, 38, 38)';
  document.getElementById("logoimg").src = 'assets/img/logo/jarvis-theme/full-logo-jarvis-primary.png';

  document.getElementById("nav1").style.color = '#fff';
  document.getElementById("nav2").style.color = '#fff';
  document.getElementById("nav3").style.color = '#fff';
  document.getElementById("nav4").style.color = '#fff';
  document.getElementById("nav5").style.color = '#fff';
  document.getElementById("nav6").style.color = '#fff';
  

  
}

function Headerback(){

  document.getElementById("header").style.backgroundColor = 'white';
  document.getElementById("logoimg").src = 'assets/img/logo/normal-theme/full-normal-primary.png';
  
  document.getElementById("nav1").style.color = '#7f7f90';
  document.getElementById("nav2").style.color = '#7f7f90';
  document.getElementById("nav3").style.color = '#7f7f90';
  document.getElementById("nav4").style.color = '#7f7f90';
  document.getElementById("nav5").style.color = '#7f7f90';
  document.getElementById("nav6").style.color = '#7f7f90';
}

