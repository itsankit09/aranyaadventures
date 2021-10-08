function initializeImages() {
  const data = [
    {
      title: "Bird Watching",
      elements: [
        {
          src: "./gallery-images/Aranya Birdwatching/Birdwatching1.jpg",
          alt: "Birdwatching1.jpg",
          title: "Bird Watching 1",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Birdwatching/Birdwatching2.jpg",
          alt: "Birdwatching2.jpg",
          title: "Bird Watching 2",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Birdwatching/Birdwatching3.jpg",
          alt: "Birdwatching3.jpg",
          title: "Bird Watching 3",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Birdwatching/Birdwatching4.jpg",
          alt: "Birdwatching4.jpg",
          title: "Bird Watching 4",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Birdwatching/Birdwatching5.jpg",
          alt: "Birdwatching5.jpg",
          title: "Bird Watching 5",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Birdwatching/Birdwatching6.jpg",
          alt: "Birdwatching6.jpg",
          title: "Bird Watching 6",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Birdwatching/Birdwatching7.jpg",
          alt: "Birdwatching7.jpg",
          title: "Bird Watching 7",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Birdwatching/Birdwatching8.jpg",
          alt: "Birdwatching8.jpg",
          title: "Bird Watching 8",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Birdwatching/Birdwatching9.jpg",
          alt: "Birdwatching9.jpg",
          title: "Bird Watching 9",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Birdwatching/Birdwatching10.jpg",
          alt: "Birdwatching10.jpg",
          title: "Bird Watching 10",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Birdwatching/Birdwatching11.jpg",
          alt: "Birdwatching11.jpg",
          title: "Bird Watching 11",
          description: "",
        },
      ],
    },
    {
      title: "Boat Safari",
      elements: [
        {
          src: "./gallery-images/Aranya Boat Safari/Boatsafari1.jpg",
          alt: "Birdwatching1.jpg",
          title: "Boat safari 1",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Boat Safari/Boatsafari2.jpg",
          alt: "Birdwatching2.jpg",
          title: "Boat safari 2",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Boat Safari/Boatsafari3.jpg",
          alt: "Birdwatching3.jpg",
          title: "Boat safari 3",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Boat Safari/Boatsafari4.jpg",
          alt: "Birdwatching4.jpg",
          title: "Boat safari 4",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Boat Safari/Boatsafari5.jpg",
          alt: "Birdwatching5.jpg",
          title: "Boat safari 5",
          description: "",
        },
      ],
    },
    {
      title: "Camp Site",
      elements: [
        {
          src: "./gallery-images/Aranya Campsite/Campsite1.jpg",
          alt: "Campsite1.jpg",
          title: "Campsite 1",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Campsite/Campsite2.jpg",
          alt: "Campsite2.jpg",
          title: "Campsite 2",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Campsite/Campsite3.jpg",
          alt: "Campsite3.jpg",
          title: "Campsite 3",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Campsite/Campsite4.jpg",
          alt: "Campsite4.jpg",
          title: "Campsite 4",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Campsite/Campsite5.jpg",
          alt: "Campsite5.jpg",
          title: "Campsite 5",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Campsite/Campsite6.jpg",
          alt: "Campsite6.jpg",
          title: "Campsite 6",
          description: "",
        },
        {
          src: "./gallery-images/Aranya Campsite/Campsite7.jpg",
          alt: "Campsite7.jpg",
          title: "Campsite 7",
          description: "",
        },
      ],
    },
  ];

  /**************** Header section *****************/
  const headerUL = document.createElement("ul");
  headerUL.setAttribute("class", "nav navbar-nav");

  data.forEach((gallery, index) => {
    const headerLI = document.createElement("li");
    headerLI.setAttribute("class", `nav-item`);

    const aTag = document.createElement("a");
    aTag.setAttribute("class", "nav-link");
    aTag.setAttribute("href", "#0");
    aTag.setAttribute("data-no", index + 1);
    aTag.innerHTML = gallery.title;

    if (index === 0) {
      const spanTag = document.createElement("span");
      spanTag.setAttribute("class", "sr-only");
      spanTag.innerHTML = "(current)";
      aTag.appendChild(spanTag);
    }

    headerLI.appendChild(aTag);

    headerUL.appendChild(headerLI);
  });

  const navBar = document.getElementById("tmNavbar");
  navBar.appendChild(headerUL);

  /**************** Image section *****************/

  const ul = document.getElementsByClassName("cd-hero-slider");
  data.forEach((gallery, index) => {
    const items = gallery.elements;
    const li = document.createElement("li");
    index === 0 && li.setAttribute("class", "selected");
    ul[0].appendChild(li);

    const cdFullWidth = document.createElement("div");
    cdFullWidth.setAttribute("class", "cd-full-width");
    li.appendChild(cdFullWidth);

    const galleryContainerFluid = document.createElement("div");
    galleryContainerFluid.setAttribute(
      "class",
      "container-fluid js-tm-page-content"
    );
    galleryContainerFluid.setAttribute("data-page-no", index + 1);
    galleryContainerFluid.setAttribute("data-page-type", "gallery");
    cdFullWidth.appendChild(galleryContainerFluid);

    const galleryContainer = document.createElement("div");
    galleryContainer.setAttribute("class", "tm-img-gallery-container");
    galleryContainerFluid.appendChild(galleryContainer);

    const galleryPop = document.createElement("div");
    galleryPop.setAttribute("class", "tm-img-gallery gallery-pop");
    galleryContainer.appendChild(galleryPop);

    items.forEach((item, index) => {
      const gridItem = document.createElement("div");
      gridItem.setAttribute("class", "grid-item");
      galleryPop.appendChild(gridItem);

      const fig = document.createElement("figure");
      fig.setAttribute("class", "effect-sadie");
      gridItem.appendChild(fig);

      const img = document.createElement("img");
      img.setAttribute("class", "img-fluid tm-img");
      img.setAttribute("src", item.src);
      img.setAttribute("alt", item.alt);
      fig.appendChild(img);

      const figcaption = document.createElement("figcaption");
      fig.appendChild(figcaption);

      const h2 = document.createElement("h2");
      h2.setAttribute("class", "tm-figure-title");
      h2.innerHTML = item.title;
      figcaption.appendChild(h2);

      const figP = document.createElement("p");
      figP.setAttribute("class", "tm-figure-description");
      figP.innerHTML = item.description;
      figcaption.appendChild(figP);

      const anchor = document.createElement("a");
      anchor.setAttribute("href", item.src);
      anchor.innerHTML = "View More";
      figcaption.appendChild(anchor);
    });
  });
}
