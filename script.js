// script.js

function createLawyerElement(lawyer) {
  const lawyerElement = document.createElement('div');
  lawyerElement.classList.add('lawyer');

  const lawyerImage = document.createElement('img');
  lawyerImage.src = lawyer.image;
  lawyerImage.alt = lawyer.name;
  lawyerElement.appendChild(lawyerImage);

  const lawyerDescription = document.createElement('p');
  lawyerDescription.textContent = `Simbiat Lola'
  lawyerElement.appendChild(lawyerDescription);

  return lawyerElement;
}

function displayLawyers(lawyers, containerId) {
  const lawyerContainer = document.getElementById(containerId);

  if (!lawyerContainer) {
    console.error("Container with ID '" + containerId + "' not found.");
    return;
  }

  lawyerContainer.innerHTML = ""; // Clear existing content in the container

  lawyers.forEach(lawyer => {
    const lawyerElement = createLawyerElement(lawyer);
    lawyerContainer.appendChild(lawyerElement);
  });
}

const maleLawyers = [
  { name: "David Lee", image: "https://raw.githubusercontent.com/birdieee/image-hosting/main/Akins%20image.jpg" },
  { name: "Akintunde Adams", image: "https://raw.githubusercontent.com/birdieee/image-hosting/main/David%20image.jpg" },
  { name: "James Smiths", image: "https://raw.githubusercontent.com/birdieee/image-hosting/main/James%20Image.jpg" },
  // ... more male lawyers
];

const femaleLawyers = [
  { name: "Simbiat Lola", image: "https://raw.githubusercontent.com/birdieee/image-hosting/main/Simbiat%20Picture.jpg" },
  { name: "Adetayo Stella Marris", image: "https://raw.githubusercontent.com/birdieee/image-hosting/main/Adetayo%20pivture.jpg" },
  { name: "Zainab Shittu", image: "https://raw.githubusercontent.com/birdieee/image-hosting/main/Zainab%20pivtue.jpg" },
  { name: Ogunleye Oluwaatomi", image: "https://raw.githubusercontent.com/birdieee/image-hosting/main/Tomi%20poicture.jpg" },
  // ... more female lawyers
];

displayLawyers(maleLawyers, "male-lawyers");
displayLawyers(femaleLawyers, "female-lawyers");
