// Moderators data - EDIT THIS ARRAY TO ADD/MODIFY MODERATORS
const moderators = [
  {
    name: "Dr. Mohammad Ali",
    role: "Faculty Advisor",
    department: "Computer Science Department",
    qualification: "Ph.D. in Computer Science",
    email: "dr.ali@noubahini.edu.bd",
    linkedin: "#",
  },
  {
    name: "Prof. Ayesha Rahman",
    role: "Co-Advisor",
    department: "Information Technology Department",
    qualification: "M.Sc. in Information Technology",
    email: "prof.ayesha@noubahini.edu.bd",
    linkedin: "#",
  },
]

// Function to get initials from name
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
}

// Function to create moderator card HTML
function createModeratorCard(moderator) {
  return `
        <div class="card team-card">
            <div class="avatar">
                ${getInitials(moderator.name)}
            </div>
            <h3 class="team-name">${moderator.name}</h3>
            <p class="team-role">${moderator.role}</p>
            <p class="team-info">${moderator.department}</p>
            <p class="team-info">${moderator.qualification}</p>
            <div class="team-socials">
                <a href="mailto:${moderator.email}" class="social-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </a>
                <a href="${moderator.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>
            </div>
        </div>
    `
}

// Load moderators on page load
document.addEventListener("DOMContentLoaded", () => {
  const moderatorsGrid = document.getElementById("moderatorsGrid")
  if (moderatorsGrid) {
    moderatorsGrid.innerHTML = moderators.map((moderator) => createModeratorCard(moderator)).join("")
  }
})
