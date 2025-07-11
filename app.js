const allVideos = [
  {
    title: "What Is Motion Design?",
    description:
      "Directed, edited, and animated by Malcolm Barnes for Ben Marriott's Motion Foundation course.",
    video: "videos/motiondesign.mp4",
    thumbnail: "thumbnails/motiondesign.png",
  },
  {
    title: "Crowley (Directed by Malcolm Barnes)",
    description:
      "Colorado College senior thesis film. Directed, edited, and shot by Malcolm Barnes.",
    video: "videos/crowley.mp4",
    thumbnail: "thumbnails/crowley.png",
  },
  {
    title: "Shawn Mendes is NOT Gay",
    description: "Edited by Malcolm Barnes for Robbie Couch/Versa Media.",
    video: "videos/shawnmendes.mp4",
    thumbnail: "thumbnails/shawnmendes.png",
  },
  {
    title: "Animation & Motion Graphics Reel",
    description: "Directed, edited, and animated by Malcolm Barnes.",
    video: "videos/animation.mp4",
    thumbnail: "thumbnails/animation.png",
  },
  {
    title: "When More Women Run, Women Win",
    description: "Edited by Malcolm Barnes for The Keystone/Courier Newsroom.",
    video: "videos/gutgold.mp4",
    thumbnail: "thumbnails/gutgold.jpg",
  },
  {
    title: "Dear Frank (Directed by Malcolm Barnes & Charlie Reynolds)",
    description:
      "Short film directed for a Colorado College documentary filmmaking class, in collaboration with Rocky Mountain PBS.",
    video: "videos/frank.mp4",
    thumbnail: "thumbnails/frank.jpg",
  },
  {
    title: "Inflation Politics as Class Warfare w/ Tim Barker",
    description: "Edited by Malcolm Barnes for The Dig/Jacobin Magazine.",
    video: "videos/barker.mp4",
    thumbnail: "thumbnails/barker.png",
  },
  {
    title: "“Selena” Nominated for the National Film Registry",
    description: "Edited by Malcolm Barnes for The Americano/Courier Newsroom.",
    video: "videos/selena.mp4",
    thumbnail: "thumbnails/selena.png",
  },
  {
    title: "Sporkies",
    description: "Edited by Malcolm Barnes for UpNorthNews/Courier Newsroom.",
    video: "videos/sporkies.mp4",
    thumbnail: "thumbnails/sporkies.png",
  },
  {
    title: "Stop Cop City Colorado Springs",
    description:
      "Directed, edited, and animated by Malcolm Barnes for Better Public Safety.",
    video: "videos/stopcopcity.mp4",
    thumbnail: "thumbnails/stopcopcity.png",
  },
  {
    title: "Critical Race Theory",
    description: "Edited by Malcolm Barnes for UpNorthNews/Courier Newsroom.",
    video: "videos/crt.mp4",
    thumbnail: "thumbnails/crt.png",
  },
  {
    title: "Looking for Congressman Tipton",
    description: "Edited by Malcolm Barnes for Versa Media",
    video: "videos/tipton.mp4",
    thumbnail: "thumbnails/tipton.jpg",
  },
];

const vidDiv = document.getElementById("vidDiv");

function makeRow() {
  const newRow = document.createElement("div");
  newRow.className = "row mb-3";
  return newRow;
}

function makeColumn() {
  const newColumn = document.createElement("div");
  newColumn.className = "col-sm";
  return newColumn;
}

function makeButton(x) {
  const newButton = document.createElement("button");
  newButton.setAttribute("type", "button");
  newButton.setAttribute("data-bs-toggle", "modal");
  newButton.setAttribute("data-bs-target", `#modal-${x}`);
  newButton.className = "btn btn-link p-0";
  return newButton;
}

function makeImage(x) {
  const newImage = document.createElement("img");
  newImage.className = "img-fluid";
  const imgName = `img${x}`;
  newImage.setAttribute("id", `${imgName}`);
  const source = allVideos[x].thumbnail;
  newImage.setAttribute("src", `${source}`);
  newImage.addEventListener("mouseenter", () => {
    newImage.classList.add("opacity-25");
  });
  newImage.addEventListener("mouseleave", () => {
    newImage.classList.remove("opacity-25");
  });

  return newImage;
}

function renderColumn(x, element) {
  const newColumn = makeColumn();
  const newButton = makeButton(x);
  const newImage = makeImage(x);
  newButton.appendChild(newImage);
  newColumn.appendChild(newButton);
  element.appendChild(newColumn);
  makeModal(x);
}

function renderVideos() {
  let vidCounter = 0;
  while (vidCounter < 12) {
    const newRow = makeRow();
    renderColumn(vidCounter, newRow);
    vidCounter++;
    renderColumn(vidCounter, newRow);
    vidCounter++;
    renderColumn(vidCounter, newRow);
    vidCounter++;
    vidDiv.appendChild(newRow);
  }
}

renderVideos();

function makeModal(x) {
  const newModal = document.createElement("div");
  newModal.className = "modal fade";
  newModal.setAttribute("id", `modal-${x}`);
  newModal.setAttribute("tabindex", "-1");
  newModal.setAttribute("aria-hidden", "false");

  const newModalDialog = document.createElement("div");
  newModalDialog.className = "modal-dialog modal-dialog-centered";
  const newModalContent = document.createElement("div");
  newModalContent.className = "modal-content";
  const newModalHeader = document.createElement("div");
  newModalHeader.className = "modal-header";

  const newModalCaption = document.createElement("p");
  newModalCaption.className = "modalCaption";
  const newModalTitle = document.createElement("span");
  newModalTitle.className = "modalTitle";
  const title = allVideos[x].title;
  newModalTitle.innerHTML = `${title}`;

  const newModalDescription = document.createElement("span");
  newModalDescription.className = "modalDescription";
  const description = allVideos[x].description;
  newModalDescription.innerHTML = `${description}`;

  newModalCaption.appendChild(newModalTitle);
  newModalCaption.appendChild(newModalDescription);

  // const newModalTitle = document.createElement('p');
  // newModalTitle.className = 'modalTitle'
  // const title = allVideos[x].title;
  // newModalTitle.innerHTML = `${title}`

  //const newModalDescription = document.createElement('p');
  //newModalDescription.className = 'modalDescription'
  // const description = allVideos[x].description;
  // newModalDescription.innerHTML = `${description}`

  const newButton = document.createElement("button");
  newButton.setAttribute("type", "button");
  newButton.setAttribute("id", `closeButton${x}`);
  newButton.setAttribute("data-bs-dismiss", "modal");
  newButton.setAttribute("aria-hidden", "false");
  newButton.className = "btn-close";

  const newModalBody = document.createElement("div");
  newModalBody.className = "modal-body";
  const newVideo = document.createElement("video");
  const source = allVideos[x].video;
  newVideo.setAttribute("src", `${source}`);
  newVideo.setAttribute("id", `video${x}`);
  newVideo.setAttribute("width", "100%");
  newVideo.setAttribute("controls", "");
  newModalBody.appendChild(newVideo);

  newModalHeader.appendChild(newButton);

  newModalContent.appendChild(newModalHeader);
  newModalContent.appendChild(newModalBody);

  newModalBody.appendChild(newModalCaption);
  // newModalContent.appendChild(newModalTitle)
  // newModalContent.appendChild(newModalDescription)

  newModalDialog.appendChild(newModalContent);

  newModal.appendChild(newModalDialog);

  newModal.addEventListener("shown.bs.modal", () => {
    newVideo.play();
  });

  newModal.addEventListener("hide.bs.modal", () => {
    newVideo.pause();
    newVideo.currentTime = 0;
  });

  modalDiv.appendChild(newModal);
}

// const img0 = document.getElementById('img0')
// img0.addEventListener("mouseenter",()=>{
//     img0.classList.add('opacity-25')
// })

// img0.addEventListener('mouseleave', ()=>{
//     img0.classList.remove('opacity-25')
// })
