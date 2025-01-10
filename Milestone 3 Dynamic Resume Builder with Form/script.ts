// Handle Generate Resume Button
const generateResumeButton = document.getElementById("generate-resume-btn") as HTMLButtonElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLElement;

// Generate Resume Function
generateResumeButton.addEventListener("click", () => {
  // Capture form inputs
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const phoneInput = document.getElementById("phone") as HTMLInputElement;
  const educationInput = document.getElementById("education") as HTMLTextAreaElement;
  const workExperienceInput = document.getElementById("work-experience") as HTMLTextAreaElement;
  const skillsInput = document.getElementById("skills") as HTMLInputElement;
  const profilePictureInput = document.getElementById("profile-picture") as HTMLInputElement;

  // Validate and retrieve data
  const name = nameInput?.value.trim() || "No Name Provided";
  const email = emailInput?.value.trim() || "No Email Provided";
  const phone = phoneInput?.value.trim() || "No Phone Number Provided";
  const education = educationInput?.value.trim().replace(/\n/g, "<br>") || "No Education Details Provided";
  const workExperience = workExperienceInput?.value.trim().replace(/\n/g, "<br>") || "No Work Experience Provided";
  const skills = skillsInput?.value.split(",").map(skill => skill.trim()).filter(skill => skill) || ["No Skills Provided"];

  // Handle profile picture
  let profilePictureURL = "";
  if (profilePictureInput.files && profilePictureInput.files[0]) {
    profilePictureURL = URL.createObjectURL(profilePictureInput.files[0]);
  }

  // Generate Resume HTML
  const resumeHTML = `
    <header class="header">
      <h1>${name}</h1>
    </header>
    <section>
      <div class="personal-info">
        ${
          profilePictureURL
            ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-pic" />`
            : `<p>No Profile Picture Uploaded</p>`
        }
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      </div>
    </section>
    <section>
      <h2>Education</h2>
      <p>${education}</p>
    </section>
    <section>
      <h2>Work Experience</h2>
      <p>${workExperience}</p>
    </section>
    <section>
      <h2>Skills</h2>
      <ul>
        ${skills.map(skill => `<li>${skill}</li>`).join("")}
      </ul>
    </section>
  `;

  // Update resume display
  resumeDisplay.innerHTML = resumeHTML;

  // Show the generated resume
  resumeDisplay.style.display = "block";
});
