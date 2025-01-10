// Handle Generate Resume Button
var generateResumeButton = document.getElementById("generate-resume-btn");
var resumeDisplay = document.getElementById("resume-display");
// Generate Resume Function
generateResumeButton.addEventListener("click", function () {
    // Capture form inputs
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var educationInput = document.getElementById("education");
    var workExperienceInput = document.getElementById("work-experience");
    var skillsInput = document.getElementById("skills");
    var profilePictureInput = document.getElementById("profile-picture");
    // Validate and retrieve data
    var name = (nameInput === null || nameInput === void 0 ? void 0 : nameInput.value.trim()) || "No Name Provided";
    var email = (emailInput === null || emailInput === void 0 ? void 0 : emailInput.value.trim()) || "No Email Provided";
    var phone = (phoneInput === null || phoneInput === void 0 ? void 0 : phoneInput.value.trim()) || "No Phone Number Provided";
    var education = (educationInput === null || educationInput === void 0 ? void 0 : educationInput.value.trim().replace(/\n/g, "<br>")) || "No Education Details Provided";
    var workExperience = (workExperienceInput === null || workExperienceInput === void 0 ? void 0 : workExperienceInput.value.trim().replace(/\n/g, "<br>")) || "No Work Experience Provided";
    var skills = (skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.value.split(",").map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill; })) || ["No Skills Provided"];
    // Handle profile picture
    var profilePictureURL = "";
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        profilePictureURL = URL.createObjectURL(profilePictureInput.files[0]);
    }
    // Generate Resume HTML
    var resumeHTML = "\n    <header class=\"header\">\n      <h1>".concat(name, "</h1>\n    </header>\n    <section>\n      <div class=\"personal-info\">\n        ").concat(profilePictureURL
        ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-pic\" />")
        : "<p>No Profile Picture Uploaded</p>", "\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n      </div>\n    </section>\n    <section>\n      <h2>Education</h2>\n      <p>").concat(education, "</p>\n    </section>\n    <section>\n      <h2>Work Experience</h2>\n      <p>").concat(workExperience, "</p>\n    </section>\n    <section>\n      <h2>Skills</h2>\n      <ul>\n        ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "\n      </ul>\n    </section>\n  ");
    // Update resume display
    resumeDisplay.innerHTML = resumeHTML;
    // Show the generated resume
    resumeDisplay.style.display = "block";
});
