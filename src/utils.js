export const dora = {
  imgToSvg() {
    document.querySelectorAll("img.svg").forEach((el) => {
      const imgID = el.getAttribute("id");
      const imgClass = el.getAttribute("class");
      const imgURL = el.getAttribute("src");
      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, "text/html");
          let svg = xmlDoc.querySelector("svg");
          if (typeof imgID !== "undefined") {
            svg.setAttribute("id", imgID);
          }

          if (typeof imgClass !== "undefined") {
            svg.setAttribute("class", imgClass + " replaced-svg");
          }

          svg.removeAttribute("xmlns:a");
          if (el.parentNode) {
            el.parentNode.replaceChild(svg, el);
          }
        });
    });
  },
  customMouse() {
    const e = document.querySelector(".cursor");
    let n,
      i = 0,
      o = !1;
    setTimeout(() => {
      window.onmousemove = function (s) {
        o ||
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      };
    }, 1000);
    const mouseEvent = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.addEventListener("mouseenter", () => {
          e.classList.add("cursor-hover");
        });
        element.addEventListener("mouseleave", () => {
          e.classList.remove("cursor-hover");
        });
      }
    };
    let a = document.querySelectorAll("a"),
      pointer = document.querySelectorAll(".c-pointer"),
      button = document.querySelectorAll(".btn"),
      works = document.querySelectorAll(".works-list-ul li");
    mouseEvent(a);
    mouseEvent(pointer);
    mouseEvent(button);
    mouseEvent(works);
    e.style.visibility = "visible";
  },
  smoothScrolling() {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
      const navLi = document.querySelectorAll(".nav li");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      navLi.forEach((li) => {
        if (current !== null) {
          li.classList.remove("current");
        }
        if (
          li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
        ) {
          li.classList.add("current");
        }
      });
    });
  },
  stickyNav() {
    window.addEventListener("scroll", () => {
      let offset = window.scrollY;
      const stickys = document.querySelectorAll(".header");
      stickys.forEach((sticky) => {
        if (sticky) {
          if (offset > 100) {
            sticky.classList.add("fixed");
          } else {
            sticky.classList.remove("fixed");
          }
        }
      });
    });
  },
  activeSkillProgressBar() {
    window.addEventListener("scroll", () => {
      const progress_inner = document.querySelectorAll(".progress-line"),
        triggerBottom = (window.innerHeight / 5) * 5;
      progress_inner.forEach((box) => {
        let value = box.getAttribute("data-percent"),
          span = box.getElementsByTagName("span")[0],
          boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          span.style.width = value;
        } else {
          span.style.width = 0;
        }
      });
    });
  },
};
