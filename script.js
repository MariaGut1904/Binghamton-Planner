const hairLowerOptions = [
  "https://www.avatarsinpixels.com/chibi/HairLower/1/thumbnail.png",
  "https://www.avatarsinpixels.com/chibi/HairLower/2/thumbnail.png",
  "https://www.avatarsinpixels.com/chibi/HairLower/4/thumbnail.png",
  "https://www.avatarsinpixels.com/chibi/HairLower/12/thumbnail.png",
  "https://www.avatarsinpixels.com/chibi/HairLower/7/thumbnail.png"
];

const hairTopOptions = [
  "https://i.imgur.com/7LOCuaR.png",
  "https://i.imgur.com/UGbdXJI.png",
  "https://www.avatarsinpixels.com/chibi/HairTop/5/thumbnail.png",
  "https://www.avatarsinpixels.com/chibi/HairTop/6/thumbnail.png"
];

const eyesOptions = [
  "https://www.avatarsinpixels.com/chibi/Eyes/0/thumbnail.png",
  "https://www.avatarsinpixels.com/chibi/Eyes/1/thumbnail.png"
];

const eyebrowOptions = [
  "https://www.avatarsinpixels.com/chibi/Eyebrows/0/thumbnail.png",
  "https://www.avatarsinpixels.com/chibi/Eyebrows/1/thumbnail.png"
];

let indexes = {
  hairLower: 0,
  hairTop: 0,
  eyebrows: 0,
  eyes: 0
};

function cycleOption(part, direction) {
  let options;
  if (part === "hairLower") options = hairLowerOptions;
  else if (part === "hairTop") options = hairTopOptions;
  else if (part === "eyebrows") options = eyebrowOptions;
  else if (part === "eyes") options = eyesOptions;

  indexes[part] += direction;

  if (indexes[part] < 0) indexes[part] = options.length - 1;
  else if (indexes[part] >= options.length) indexes[part] = 0;

  document.getElementById(part).src = options[indexes[part]];
}

window.onload = () => {
  document.getElementById("hairLower").src = hairLowerOptions[0];
  document.getElementById("hairTop").src = hairTopOptions[0];
  document.getElementById("eyebrows").src = eyebrowOptions[0];
  document.getElementById("eyes").src = eyesOptions[0];
};
