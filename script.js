"use strict";

/* =========================
   YOUR PORTFOLIO CONTENT

   Add your real links below.
   Empty links are not displayed.
========================= */

const portfolio = {
  email: "charlesmendoza1023@gmail.com",
  phone: "+63 995-181-3692",

  linkedin: "https://www.linkedin.com/in/charles-mendoza-6b23201a0",
  github: "https://github.com/scars23",

  projects: [
    {
      title: "The Kitchen Gastronomy",
      category: "UI / UX · WEB DEVELOPMENT",
      types: ["development", "design"],
      theme: "lavender",
      mark: "KG",
      logo: "projects/kitchen-gastronomy/The-Kitchen-Gastronomy-main/The-Kitchen-Gastronomy-main/Kitchen Gastronomy/Images/logo_nbg.png",
      description:
        "Designed the website’s UI/UX and contributed to its development " +
        "using CSS, JavaScript, and Bootstrap. The responsive interface " +
        "includes service cards, image carousels, and contact details.",

      contribution:
        "UI/UX Design Lead / Software Contributor. Worked on website " +
        "layout, colors, navigation, content presentation, responsive " +
        "styling, and usability improvements.",

      tags: ["UI/UX", "CSS", "JavaScript", "Bootstrap"],

      liveUrl: "projects/kitchen-gastronomy/The-Kitchen-Gastronomy-main/The-Kitchen-Gastronomy-main/Kitchen Gastronomy/main_page.html",
      liveLabel: "View website",
      sourceUrl: ""
    },

    {
      title: "Analysero",
      category: "PRODUCT DESIGN · IOT",
      types: ["design", "development", "quality"],
      theme: "mint",
      mark: "Aa",
      logo: "assets/analysero-logo.png",

      description:
        "An IoT-based smart carabao milk analysis prototype using " +
        "physicochemical and optical sensor readings. Its mobile " +
        "application presents milk analysis results clearly.",

      contribution:
        "Software, Testing, and Documentation Lead. Designed the " +
        "mobile application’s UI/UX, helped integrate sensor data, " +
        "performed functional testing and debugging, assisted with " +
        "sensor calibration, and prepared technical documentation.",

      tags: ["UI/UX", "IoT", "Sensors", "Testing"],
      screenshots: [
        {
          heading: "3D Model",
          images: [
            {
              src: "assets/analysero/model/model_front.png",
              caption: "Front view"
            },
            {
              src: "assets/analysero/model/model_side.png",
              caption: "Side view"
            },
            {
              src: "assets/analysero/model/model_back.png",
              caption: "Back view"
            },
            {
              src: "assets/analysero/model/model_inside.png",
              caption: "Internal layout"
            }
          ]
        }
      ],

      liveUrl: "https://www.figma.com/design/OY7rFinFH1eVaaUnG5k1YW/Analysero?node-id=0-1",
      liveLabel: "View Figma design",
      sourceUrl: ""
    },

    { 
      title: "Software Testing",
      category: "QUALITY · VALIDATION",
      types: ["quality"],
      theme: "blue",
      mark: "QA",

      description:
        "Testing work across academic and internship projects, " +
        "covering functional validation, bug identification, " +
        "debugging, and technical documentation.",

      contribution:
        "Tested system functions, documented technical issues, " +
        "collaborated on troubleshooting, and verified improvements " +
        "during project development and evaluation.",

      tags: ["Manual Testing", "Debugging", "Documentation"],

      liveUrl: "",
      sourceUrl: ""
    }
  ],

  /*
    Add certificates you have earned using this format:

    {
      title: "Your certificate title",
      issuer: "Issuing organization",
      year: "2026",
      url: "assets/certificate.pdf"
    }

    You can also use an HTTPS verification URL.
  */

  certifications: [
    {
      title: "AI and Internet of Things",
      issuer: "DICT REGION III",
      year: "2024",
      url: "assets/certifications/097.pdf"
    },
    {
      title: "Tech Leadership 101",
      issuer: "ICpEP Region III",
      year: "2024",
      url: "assets/certifications/233.png"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      year: "2025",
      url: "assets/certifications/networkingBasics.pdf"
    },
    {
      title: "Networking Basics Course Completion",
      issuer: "Cisco Networking Academy",
      year: "2025",
      url: "assets/certifications/networkingBasicCourse.pdf"
    },
    {
      title: "Fostering Green Technology to Strengthen Sustainability and Innovation",
      issuer: "DICT Region IV-B Oriental Mindoro",
      year: "2024",
      url: "assets/certifications/Green_Technology.pdf"
    },
    {
      title: "ROBOLUTION: Transforming Lives and Practices through the Application of Robotics",
      issuer: "Pampanga State University (Formerly Don Honorio Ventura State University)",
      year: "2022",
      url: "assets/certifications/Robolution.pdf"
    },
    {
      title: "WebDev 101: Creating Interactive Websites using HTML, CSS, PHP, and DATABASE for Aspiring Developers",
      issuer: "Pampanga State University (Formerly Don Honorio Ventura State University)",
      year: "2024",
      url: "assets/certifications/WebDev101.png"
    },
    {
      title: "Engaging Stakeholders for Success",
      issuer: "ICT Literacy and Competency Development Bureau",
      year: "2024",
      url: "assets/certifications/Stakeholders.pdf"
    },
    {
      title: "Guardians of the NET: Youth Cyber Defender",
      issuer: "DICT Region II",
      year: "2025",
      url: "assets/certifications/Guardians.pdf"
    },
    {
      title: "Networking It Out: Unleashing the Power of Network and Cloud Security",
      issuer: "University of Santo Tomas",
      year: "2024",
      url: "assets/certifications/NetworkingItOut.pdf"
    },
    {
      title: "Programming for Beginners using Python",
      issuer: "ICT Literacy and Competency Development Bureau",
      year: "2024",
      url: "assets/certifications/pythonBeginner.pdf"
    },
    {
      title: "DICT-ICT018 Basic Level of Software Engineering",
      issuer: "ICT Literacy and Competency Development Bureau",
      year: "2024",
      url: "assets/certifications/softwareBasic.pdf"
    },
    {
      title: "DICT-ICT013 Intermediate Level of Software Engineering",
      issuer: "ICT Literacy and Competency Development Bureau",
      year: "2024",
      url: "assets/certifications/softwareIntermediate.pdf"
    }
  ]
};

/* =========================
   ELEMENT HELPERS
========================= */

function createElement(tag, className = "", text = "") {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}

function getSafeUrl(value) {
  if (!value || !value.trim()) {
    return null;
  }

  try {
    const url = new URL(value, window.location.href);

    if (["https:", "http:"].includes(url.protocol)) {
      return url.href;
    }

    // Allow local project files when opening index.html directly.
    if (
      window.location.protocol === "file:" &&
      url.protocol === "file:" &&
      !/^[a-z][a-z0-9+.-]*:/i.test(value)
    ) {
      return url.href;
    }

    return null;
  } catch {
    return null;
  }
}

function createExternalLink(label, url) {
  const link = createElement("a", "", label);

  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  return link;
}

/* =========================
   PROJECT RENDERING
========================= */

const projectGrid = document.querySelector("#project-grid");
const projectDialog = document.querySelector("#project-dialog");

function renderProjects() {
  
  const fragment = document.createDocumentFragment();

  portfolio.projects.forEach((project, index) => {
    const card = createElement("article", "project-card");

    card.dataset.types = project.types.join(" ");

    const cover = createElement(
      "div",
      `project-cover ${project.theme}`
    );

    // Covers are visual typography, not actual project screenshots.
    cover.setAttribute("aria-hidden", "true");
  let coverVisual;

  if (project.logo) {
    coverVisual = document.createElement("img");
    coverVisual.className = "project-logo";
    coverVisual.src = project.logo;
    coverVisual.alt = "";
  } else {
    coverVisual = createElement(
      "span",
      "cover-mark",
      project.mark
    );
  }

  cover.append(
    createElement("span", "cover-category", project.category),
    coverVisual,
    createElement(
      "span",
      "cover-number",
      String(index + 1).padStart(2, "0")
    ),
    createElement(
      "span",
      "cover-caption",
      "DESIGN × TECHNOLOGY"
    )
  );

    const info = createElement("div", "project-info");
    const text = createElement("div");

    text.append(
      createElement("h3", "", project.title),
      createElement("p", "", project.tags.join(" / "))
    );

    const openButton = createElement(
      "button",
      "project-open",
      "+"
    );

    openButton.type = "button";

    openButton.setAttribute(
      "aria-label",
      `View ${project.title} details`
    );

    openButton.addEventListener("click", () => {
      openProject(project);
    });

    info.append(text, openButton);
    card.append(cover, info);
    fragment.append(card);
  });

  projectGrid.replaceChildren(fragment);
}

/* =========================
   PROJECT DETAILS
========================= */

function openProject(project) {

  document.querySelector("#dialog-category").textContent =
    project.category;

  document.querySelector("#dialog-title").textContent =
    project.title;

  document.querySelector("#dialog-description").textContent =
    project.description;

  document.querySelector("#dialog-focus").textContent =
    project.contribution;

  const tags = document.querySelector("#dialog-tags");

  tags.replaceChildren(
    ...project.tags.map(tag => createElement("span", "", tag))
  );

  const links = document.querySelector("#dialog-links");
  links.replaceChildren();

  const destinations = [
    [project.liveLabel || "View project", project.liveUrl],
    ["Source code", project.sourceUrl]
  ];

  destinations.forEach(([label, value]) => {
    const url = getSafeUrl(value);

    if (url) {
      links.append(createExternalLink(label, url));
    }
  });

  if (!links.children.length) {
    links.append(
      createElement(
        "p",
        "",
        "Project links will be added here."
      )
    );
  }
  const screenshotContainer = document.querySelector(
  "#dialog-screenshots"
);

screenshotContainer.replaceChildren();

const groups = project.screenshots || [];

projectDialog.classList.toggle(
  "has-screenshots",
  groups.length > 0
);

groups.forEach(group => {
  const section = createElement(
    "section",
    "project-screenshot-section"
  );

  section.append(createElement("h3", "", group.heading));

  const gallery = createElement(
    "div",
    "project-screenshot-grid"
  );

  group.images.forEach(screenshot => {
    const imageUrl = getSafeUrl(screenshot.src);
    if (!imageUrl) return;

    const figure = createElement("figure");
    const link = createElement(

    "button",
   "project-screenshot-link"
    );

    link.type = "button";

    link.setAttribute(
      "aria-label",
      `Enlarge ${screenshot.caption}`
    );

    link.addEventListener("click", () => {
      openImageViewer(project, screenshot);
    });

    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = screenshot.caption;
    image.loading = "lazy";

    link.append(image);

    figure.append(
      link,
      createElement("figcaption", "", screenshot.caption)
    );

    gallery.append(figure);
  });

  section.append(gallery);
  screenshotContainer.append(section);
});

  projectDialog.showModal();
}



projectDialog.addEventListener("click", event => {
  const bounds = projectDialog.getBoundingClientRect();

  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (outside) {
    projectDialog.close();
  }
});

/* =========================
   PROJECT FILTERS
========================= */

const filterButtons = document.querySelectorAll("[data-filter]");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach(filterButton => {
      const selected = filterButton === button;

      filterButton.classList.toggle("active", selected);
      filterButton.setAttribute(
        "aria-pressed",
        String(selected)
      );
    });

    let visibleCount = 0;

    projectGrid.querySelectorAll(".project-card").forEach(card => {
      const types = card.dataset.types.split(" ");

      const matches =
        selectedFilter === "all" ||
        types.includes(selectedFilter);

      card.hidden = !matches;

      if (matches) {
        visibleCount += 1;
      }
    });

    document.querySelector("#filter-status").textContent =
      `${visibleCount} projects shown`;
  });
});

/* =========================
   CERTIFICATIONS
========================= */

function renderCertifications() {
  const list = document.querySelector("#certificate-list");
  list.replaceChildren();

  if (!portfolio.certifications.length) {
    const emptyState = createElement(
      "div",
      "empty-certificates"
    );

    emptyState.append(
      createElement("h3", "", "Certifications coming soon"),
      createElement(
        "p",
        "",
        "Verified certificates will be collected here."
      )
    );

    list.append(emptyState);
    return;
  }

  const summary = createElement(
    "div",
    "certificate-gallery-summary"
  );

  const count = portfolio.certifications.length;

  const description = createElement(
    "p",
    "",
    `${count} certificate${count === 1 ? "" : "s"} in my collection`
  );

  const button = createElement(
    "button",
    "button button-primary",
    "View certificate gallery"
  );

  button.type = "button";

  button.addEventListener("click", () => {
    renderCertificateGallery();

    document
      .querySelector("#certificate-gallery-dialog")
      .showModal();
  });

  summary.append(description, button);
  list.append(summary);
}

function renderCertificateGallery() {
  const grid = document.querySelector(
    "#certificate-gallery-grid"
  );

  grid.replaceChildren();

  portfolio.certifications.forEach(certificate => {
    const card = createElement(
      "article",
      "certificate-gallery-card"
    );

    const content = createElement(
      "div",
      "certificate-gallery-content"
    );

    const metadata = [
      certificate.issuer,
      certificate.year
    ].filter(Boolean).join(" · ");

    content.append(
      createElement("h3", "", certificate.title),
      createElement("p", "", metadata)
    );

    const fileUrl = getSafeUrl(certificate.url);

    if (fileUrl) {
      const link = createExternalLink(
        "Open certificate",
        fileUrl
      );

      link.className = "certificate-open-link";
      content.append(link);
    } else {
      content.append(
        createElement("p", "", "Certificate file coming soon.")
      );
    }

    card.append(content);
    grid.append(card);
  });
}

/* =========================
   CONTACT LINKS
========================= */

function renderContactLinks() {
  const container = document.querySelector("#contact-links");
  const fragment = document.createDocumentFragment();

  const validEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(portfolio.email);

  if (validEmail) {
    const emailLink = createElement(
      "a",
      "",
      portfolio.email
    );

    emailLink.href = `mailto:${portfolio.email}`;
    fragment.append(emailLink);
  }

  if (portfolio.phone) {
    const phoneLink = createElement(
      "a",
      "",
      portfolio.phone
    );

    phoneLink.href =
      `tel:${portfolio.phone.replace(/[^\d+]/g, "")}`;

    fragment.append(phoneLink);
  }

  const socialLinks = [
    ["LinkedIn", portfolio.linkedin],
    ["GitHub", portfolio.github]
  ];

  socialLinks.forEach(([label, value]) => {
    const url = getSafeUrl(value);

    if (url) {
      fragment.append(createExternalLink(label, url));
    }
  });

  container.replaceChildren(fragment);
}

/* =========================
   MOBILE NAVIGATION
========================= */

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#navigation");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "Menu";
  navigation.classList.remove("open");
}

menuButton.addEventListener("click", () => {
  const isOpen =
    menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.textContent = isOpen ? "Menu" : "Close";

  navigation.classList.toggle("open", !isOpen);
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window
  .matchMedia("(min-width: 701px)")
  .addEventListener("change", closeMenu);

/* =========================
   ACTIVE NAVIGATION
========================= */

const navigationLinks = [...navigation.querySelectorAll("a")];

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      navigationLinks.forEach(link => {
        const active = link.hash === `#${entry.target.id}`;

        link.classList.toggle("current", active);

        if (active) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  },
  {
    rootMargin: "-10% 0px -45% 0px",
    threshold: 0
  }
);

navigationLinks.forEach(link => {
  const section = document.querySelector(link.hash);

  if (section) {
    sectionObserver.observe(section);
  }
});

/* =========================
   TIME AND INITIALIZATION
========================= */

function updateLocalTime() {
  const time = new Intl.DateTimeFormat("en-PH", {
    timeZone: "Asia/Manila",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date());

  document.querySelector("#local-time").textContent =
    `${time} PHT`;
}

renderProjects();
renderCertifications();
renderContactLinks();
updateLocalTime();

setInterval(updateLocalTime, 60000);

document.querySelector("#year").textContent =
  new Date().getFullYear();

const certificateGalleryDialog = document.querySelector(
  "#certificate-gallery-dialog"
);

document
  .querySelector("#close-certificate-gallery")
  .addEventListener("click", () => {
    certificateGalleryDialog.close();
  });

// Close when clicking outside the popup.
certificateGalleryDialog.addEventListener("click", event => {
  const bounds = certificateGalleryDialog.getBoundingClientRect();

  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (outside) {
    certificateGalleryDialog.close();
  }
});

const imageViewer = document.querySelector("#image-viewer");
const viewerImage = document.querySelector("#viewer-image");
const viewerCaption = document.querySelector("#viewer-caption");
const viewerCount = document.querySelector("#viewer-count");
const previousButton = document.querySelector("#viewer-previous");
const nextButton = document.querySelector("#viewer-next");

let viewerImages = [];
let viewerIndex = 0;

function openImageViewer(project, selectedScreenshot) {
  viewerImages = (project.screenshots || [])
    .flatMap(group => group.images)
    .filter(screenshot => getSafeUrl(screenshot.src));

  if (!viewerImages.length) return;

  const selectedIndex = viewerImages.indexOf(selectedScreenshot);
  viewerIndex = selectedIndex >= 0 ? selectedIndex : 0;

  updateImageViewer();
  imageViewer.showModal();
}

function updateImageViewer() {
  const screenshot = viewerImages[viewerIndex];

  viewerImage.src = getSafeUrl(screenshot.src);
  viewerImage.alt = screenshot.caption;

  viewerCaption.textContent = screenshot.caption;
  viewerCount.textContent =
    `${viewerIndex + 1} / ${viewerImages.length}`;

  const singleImage = viewerImages.length < 2;

  previousButton.disabled = singleImage;
  nextButton.disabled = singleImage;
}

function changeViewerImage(direction) {
  viewerIndex =
    (viewerIndex + direction + viewerImages.length) %
    viewerImages.length;

  updateImageViewer();
}

previousButton.addEventListener("click", () => {
  changeViewerImage(-1);
});

nextButton.addEventListener("click", () => {
  changeViewerImage(1);
});

// Keyboard navigation while the image viewer is open.
imageViewer.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    changeViewerImage(-1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    changeViewerImage(1);
  }
});

// Close only the image viewer when Escape is pressed.
imageViewer.addEventListener("cancel", event => {
  event.preventDefault();
  imageViewer.close();
});

// Close when clicking outside the viewer.
imageViewer.addEventListener("click", event => {
  const bounds = imageViewer.getBoundingClientRect();

  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (outside) {
    imageViewer.close();
  }
});