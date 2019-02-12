// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}


// Js chart
//window.onload = function () {
  // const chart1 = new CanvasJS.Chart("chart1", {
  //   backgroundColor: "transparent  ",
  //   theme: "dark1", // "light2", "dark1", "dark2"
  //   animationEnabled: true, // change to true		
  //   title:{
  //     text: "Skill Set",
  //     fontSize: 20,
  //     fontColor: "white"
  //   },
  //   data: [
  //   {
  //     // Change type to "bar", "area", "spline", "pie",etc.
  //     type: "bar",
  //     dataPoints: [
  //       { label: "javascript",  y: 85 },
  //       { label: "html", y: 85  },
  //       { label: "css", y: 85  },
  //       { label: "php",  y: 70  }
  //     ]
  //   }
  //   ]
  // });
  // chart1.render();
  

  // const chart2 = new CanvasJS.Chart("chart2", {
  //    backgroundColor: "transparent",
  //   theme: "light2", // "light2", "dark1", "dark2"
  //   animationEnabled: true, // change to true		
  //   title:{
  //     text: "Javascript Skills",
  //     fontSize: 15,
  //     fontColor: "white"
  //   },
  //   data: [
  //   {
  //     // Change type to "bar", "area", "spline", "pie",etc.
  //     type: "bar",
  //     indexLabelFontSize: 20,
  //     dataPoints: [
  //       { label: "NodeJS",  y: 80},
  //       { label: "React JS", y: 70  },
  //       { label: "Redux JS", y: 65 },
  //       { label: "Vannila Javascript",  y: 83  }
  //     ]
  //   }
  //   ]
  // });
  // chart2.render();


  // const chart3 = new CanvasJS.Chart("chart3", {
  //   backgroundColor: "transparent",
  //   theme: "dark1", // "light2", "dark1", "dark2"
  //   animationEnabled: true, // change to true		
  //   title:{
  //     text: "Css Skills",
  //     fontSize: 15,
  //     fontColor: "white"
  //   },
  //   data: [
  //   {
  //     // Change type to "bar", "area", "spline", "pie",etc.
  //     type: "column",
  //     indexLabelFontSize: 20,
  //     dataPoints: [
  //       { label: "Bootstrap",  y: 75  },
  //       { label: "Materialize Css", y: 70  },
  //       { label: "Skeleton css", y: 65 },
  //       { label: "Sass",  y: 78  }
  //     ]
  //   }
  //   ]
  // });
  // chart3.render();
  // }

