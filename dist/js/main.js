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
window.onload = function () {
  const chart1 = new CanvasJS.Chart("chart1", {
    backgroundColor: "transparent  ",
    theme: "dark1", // "light2", "dark1", "dark2"
    animationEnabled: true, // change to true		
    title:{
      text: "Skill Set"
    },
    data: [
    {
      // Change type to "bar", "area", "spline", "pie",etc.
      type: "bar",
      indexLabelFontSize: 20,
      dataPoints: [
        { label: "javascript",  y: 85  },
        { label: "html", y: 85  },
        { label: "css", y: 85  },
        { label: "php",  y: 70  }
      ]
    }
    ]
  });
  chart1.render();
  

  const chart2 = new CanvasJS.Chart("chart2", {
    backgroundColor: "transparent",
    theme: "dark1", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Javascript Skills"
    },
    data: [{
      type: "pie",
      startAngle: 25,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 10,
      indexLabel: "{label} - {y}%",
      opacity: 0.5,
      dataPoints: [
        { y: 79.08, label: "React" },
        { y: 77.34, label: "Redux" },
        { y: 84.62, label: "Nodejs" },
        { y: 85.00, label: "Vanilla Javascript" }
      ]
    }]
  });
  chart2.render();


  const chart3 = new CanvasJS.Chart("chart3", {
    backgroundColor: "transparent",
    theme: "dark1", // "light2", "dark1", "dark2"
    animationEnabled: true, // change to true		
    title:{
      text: "Css Skills"
    },
    data: [
    {
      // Change type to "bar", "area", "spline", "pie",etc.
      type: "column",
      indexLabelFontSize: 20,
      dataPoints: [
        { label: "Bootstrap",  y: 80  },
        { label: "Materialize Css", y: 80  },
        { label: "Skeleton css", y: 75 },
        { label: "Sass",  y: 80  }
      ]
    }
    ]
  });
  chart3.render();
  }

