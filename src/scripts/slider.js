previousSlide = async () => {
  if (!document.getElementById("slider")) {
    return;
  }

  if (window.event) {
    window.event.stopPropagation();
  }

  await document.getElementById("slider").slidePrev();
};

nextSlide = async () => {
  if (!document.getElementById("slider")) {
    return;
  }

  if (window.event) {
    window.event.stopPropagation();
  }

  await document.getElementById("slider").slideNext();
};

firstSlide = async () => {
  if (!document.getElementById("slider")) {
    return;
  }

  await document.getElementById("slider").slideTo(0, 2000);
};

toggleFullScreen = async () => {
  if (!document.getElementById("slider")) {
    return;
  }

  await document.getElementById("slider").toggleFullScreen();
};

let listen = false;
startListeningToRange = () => {
  listen = true;
};

updateRange = $event => {
  if (listen) {
    let root = document.documentElement;
    root.style.setProperty("--measure", `${$event.srcElement.value}px`);
    root.style.setProperty(
      "--doubleMeasure",
      `${$event.srcElement.value * 2}px`
    );
  }
};

stopListeningToRange = () => {
  listen = false;
};
