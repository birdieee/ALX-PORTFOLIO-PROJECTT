// Attorneys
const maleLawyers = [
    { name: "David Lee", image: "images/male1.jpg" },
    { name: "Akintunde Adams", image: "images/male2.jpg" },
    { name: "James Smiths", image: "images/male3.jpg" },
    // ... more male lawyers
];

const femaleLawyers = [
    { name: "Simbiat Lola", image: "images/female1.jpg" },
    { name: "Adetayo Stella Marris", image: "images/female2.jpg" },
    { name: "Zainab Shittu", image: "images/female3.jpg" },
    { name: Ogunleye Oluwaatomi", image: "images/female3.jpg" },
    // ... more female lawyers
];

function displayLawyers(lawyers, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error("Container with ID '" + containerId + "' not found.");
        return; // Exit the function if the container isn't found
    }

    container.innerHTML = ""; // Clear existing content in the container

    lawyers.forEach(lawyer => {
        const lawyerDiv = document.createElement("div"); // Create a div for each lawyer
        lawyerDiv.classList.add("lawyer"); // Add a class for styling

        const img = document.createElement("img");
        img.src = lawyer.image;
        img.alt = lawyer.name;
        lawyerDiv.appendChild(img); // Append the image to the lawyer's div

        const name = document.createElement("p");
        name.textContent = lawyer.name;
        lawyerDiv.appendChild(name); // Append the name to the lawyer's div

        container.appendChild(lawyerDiv); // Append the lawyer's div to the container
    });
}

displayLawyers(maleLawyers, "male-lawyers");
displayLawyers(femaleLawyers, "female-lawyers");
