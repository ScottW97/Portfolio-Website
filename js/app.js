let prevScrollpos = window.pageYOffset;
$(window).scroll(function() {
  let sticky = $(".sticky"),
    scroll = $(window).scrollTop();

  if (scroll >= 255) {
    //Condition for when scrolling past the 216px threshold at the top of the page
    // Navbar is fixed when the 216px threshold is passed

    window.onscroll = function() {
      // Begin function on scroll
      let currentScrollPos = window.pageYOffset; // Current scroll position is defined as wherever the user currently is

      if (prevScrollpos < currentScrollPos) {
        document.getElementById("navbar").style.top = "-255px";
        setTimeout(function() {
          document.getElementById("navbar").style.display = "none";
        }, 300);
      } else if (prevScrollpos > currentScrollPos) {
        // Conditional for if the user scrolls up (which will bring down the menu)
        document.getElementById("navbar").style.display = "block";
        setTimeout(function() {
          document.getElementById("navbar").style.top = "0";
        }, 300);
      }
      prevScrollpos = currentScrollPos;
    };
  } else {
    if (scroll > prevScrollpos) {
      // If scrolling up, the navbar doesn't move away even when within the 110-210px range
      document.getElementById("navbar").style.top = "-255px";
      document.getElementById("navbar").style.display = "none";
    }
  }
});

document.getElementById("tescohover").addEventListener("mouseover", function() {
  document.getElementById("workborder").style.backgroundColor = "#00539F";
});

document.getElementById("tescohover").addEventListener("mouseout", function() {
  document.getElementById("workborder").style.backgroundColor = "#233237";
});

document.getElementById("lephover").addEventListener("mouseover", function() {
  document.getElementById("workborder").style.backgroundColor = "#372741";
});

document.getElementById("lephover").addEventListener("mouseout", function() {
  document.getElementById("workborder").style.backgroundColor = "#233237";
});

document.getElementById("dwphover").addEventListener("mouseover", function() {
  document.getElementById("workborder").style.backgroundColor = "#37807B";
});

document.getElementById("dwphover").addEventListener("mouseout", function() {
  document.getElementById("workborder").style.backgroundColor = "#233237";
});

document.getElementById("cnshover").addEventListener("mouseover", function() {
  document.getElementById("eduborder").style.backgroundColor = "#224778";
});

document.getElementById("cnshover").addEventListener("mouseout", function() {
  document.getElementById("eduborder").style.backgroundColor = "#233237";
});

document.getElementById("ccnhover").addEventListener("mouseover", function() {
  document.getElementById("eduborder").style.backgroundColor = "#923A8E";
});

document.getElementById("ccnhover").addEventListener("mouseout", function() {
  document.getElementById("eduborder").style.backgroundColor = "#233237";
});

document.getElementById("nmhover").addEventListener("mouseover", function() {
  document.getElementById("eduborder").style.backgroundColor = "#22242e";
});

document.getElementById("nmhover").addEventListener("mouseout", function() {
  document.getElementById("eduborder").style.backgroundColor = "#233237";
});

document.getElementById("htmlhover").addEventListener("mouseover", function() {
  document.getElementById("projectborder").style.backgroundColor = "#333645";
});

document.getElementById("htmlhover").addEventListener("mouseout", function() {
  document.getElementById("projectborder").style.backgroundColor = "#233237";
});

document.getElementById("jshover").addEventListener("mouseover", function() {
  document.getElementById("projectborder").style.backgroundColor = "#8D818C";
});

document.getElementById("jshover").addEventListener("mouseout", function() {
  document.getElementById("projectborder").style.backgroundColor = "#233237";
});

$(window)
  .scroll(function() {
    // selectors
    var $window = $(window),
      $body = $(".swbody"),
      $panel = $(".panel");

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + $window.height() / 3;

    $panel.each(function() {
      var $this = $(this);

      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if (
        $this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll
      ) {
        // Remove all classes on body with color-
        $body.removeClass(function(index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
        });

        // Add class of currently active div
        $body.addClass("color-" + $(this).data("color"));
      }
    });
  })
  .scroll();

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
