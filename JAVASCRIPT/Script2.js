
const PersonData = {
    "professionalSummary": {
        "title": "Professional Summary",
        "description": [
            ` Tech Enthusiast Pursuing "MCA" with a focus in Machine Learning.Aspiring Software Engineer with a strong foundation in computer science and hands-on experience 
in software development through academic projects and internships. Eager to apply my 
programming skills and problem-solving abilities to contribute to innovative software solutions. 
Motivated to learn and grow within a dynamic tech environment.`
            ]
    },
    "projects": {
        "PortFolio": {
            "title": "PortFolio",
            "technologies": ["HTML", "CSS", "JAVA SCRIPT",],
            "summary":" 'I developed a responsive portfolio website using HTML, CSS, and JavaScript, showcasing my skills, projects, and certifications. The site dynamically renders content from a data object, allowing easy updates. It features an interactive project section, collapsible work experience, and a certificate slider. I also implemented a mobile-friendly navigation menu for better accessibility. This project highlights my ability to build functional, user-friendly web applications'."
        }
        
    },
    "skills": [
        {
            "label": "Programming/Scripting Languages",
            "value": "Python, Pandas, Numpy, SQL, Matplotlib"
        },
        {
            "label": "Tools",
            "value": "PowerBI"
        },
        {
            "label": "Analytical Skills",
            "value": "Data Interpretation, Statistical Analysis, Storytelling with data, KPIs, Data-driven Decision Making, Feature Engineering"
        },
        {
            "label": "Development Tools",
            "value": " Visual Studio Code, PyCharm, Jupyter Notebook"
        },
        {
            "label": "Operating Systems",
            "value": "Linux, Windows"
        },
        
        {
            "label": "Version Control",
            "value": "Git"
        },
    
        {
            "label": "Databases",
            "value": "MySQL"
        }
    ],
    "jobExperience": [
        
        {
            "id": "IBM-internship",
            "title": "IBM (Internship)",
            "dates": "June 2024 - July 2024",
            "description": "Gained hands-on experience in Data Analytics."
        }
        
    ],
    "education": [
        {
            "degree": "MCA (Master of Computer Application)",
            "institution": "JNTU-K",
            "dates": "September 2023 - June 2025",
            "description": "Pursuing with a solid foundation in Computer Applications.",
        
        }
    ],
    "certificates": [
        {
            "title": "Certificate 1",
            "src": "../images/IBM internship.jpg",
            "alt": "Certificate 1",
            "caption":"certificateOfExcellence"
        },
        {
            "title": "Certificate 2",
            "src": "../images/Suresh_python.jpg",
            "alt": "Certificate 2",
            "caption": "Python assential"
        },
        {
            "title": "Certificate 3",
            "src": "../images/Suresh_sql.jpg",
            "alt": "Certificate 3",
            "caption": "Frontlines media sql certificare"
        },
        {
            "title": "Certificate 4",
            "src": "../images/Suresh_mca.jpg",
            "alt": "Certificate 4",
            "caption":  "MCA marks list"
        },
        {
            "title": "Certificate 5",
            "src": "../images/TCS_Communication.jpg",
            "alt": "Certificate 5",
            "caption":  "English Communication certificate"
        },
        {
            "title": "Certificate 6",
            "src": "../images/",
            "alt": "Certificate 6",
            "caption":  "CertificateOf Machine Learning Specialist"
        }
        ,
        {
            "title": "Certificate 7",
            "src": "../images/",
            "alt": "Certificate 7",
            "caption":  "CertificateOf_Deep Learning Foundations Natural Language Processing with TensorFlow"
        }
        ,
        {
            "title": "Certificate 8",
            "src": "../images/",
            "alt": "Certificate 8",
            "caption": "SnowFalke_DateEngineering"
        },
        {
            "title": "Certificate 9",
            "src": "../images/",
            "alt": "Certificate 9",
            "caption": "SnowFalke_DateEngineering"
        },
        {
            "title": "Certificate 10",
            "src": "../images/",
            "alt": "Certificate 10",
            "caption": "STCS_Communication"
        }
    ],
    "contact": {
        "contact": {
            "email": "budisuresh20@gmail.com",
            "phone": "6302762983",
            "linkedin": "https://www.linkedin.com/in/sureshbudi/"
        },
        "languages": [
            "Telugu",
            "English"
        ],
        "header": {
            "name": "Suresh Budi",
            "title": "MCA Student at Aditya Engineering College",
            "location": "Kakinada, India",
            "dob": "20-August-2002",
            "image": {
                "src": "../images/Suresh.jpg",
                "alt": "Suresh Budi"
            }
        }
    }
};

// Load Professional Summary into HTML
function loadProfessionalSummary() {
    const summaryContainer = document.getElementById("summary-content");
    const listItems = PersonData.professionalSummary.description.map(item => `<li>${item}</li>`).join('');
    summaryContainer.innerHTML = `<ul>${listItems}</ul>`;
}
// call loadProfessionalSummary()
loadProfessionalSummary()
    
// Function to render header
function renderHeader() {
    const headerSection = document.querySelector('.header-content');
    headerSection.innerHTML = `
        <div class="header-text">
            <h1>${PersonData.contact.header.name}</h1>
            <p>${PersonData.contact.header.title}</p>
            <p>Location: ${PersonData.contact.header.location}</p>
            <p>DOB: ${PersonData.contact.header.dob}</p>
        </div>
        <div class="photo">
            <img src="${PersonData.contact.header.image.src}" alt="${PersonData.contact.header.image.alt}" class="profile-gallery">
        </div>
    `;
}
// call renderHeader() 
renderHeader() 

//  Projects

// Function to create and insert buttons dynamically
function createProjectButtons() {
    const tabButtonsContainer = document.getElementById('tab-buttons');
    
    Object.keys(PersonData.projects).forEach(projectId => {
        const firstProjectId = Object.keys(PersonData.projects)[0];
        showContent(firstProjectId);   // Load default project content
        const project = PersonData.projects[projectId];
        
        const button = document.createElement('button');
        button.className = 'tab-button';
        button.textContent = project.title;
        button.onclick = () => showContent(projectId);
        
        tabButtonsContainer.appendChild(button);
    });
}

// Function to show project details when a button is clicked
function showContent(projectId) {
    const contentElement = document.getElementById('project-content');
    const projectDetails = PersonData.projects[projectId];

    if (projectDetails) {
        contentElement.innerHTML = `
            <h2>${projectDetails.title}</h2>
            <p><strong>Technologies:</strong> ${projectDetails.technologies.join(', ')}</p>
           
            <p><strong>Summary:</strong> ${projectDetails.summary}</p>
        `;
    } else {
        contentElement.innerHTML = '<p>Project details not available.</p>';
    }
}
// functions calling for createProjectButtons
createProjectButtons()

//  work experience or Organizations worked.
document.addEventListener("DOMContentLoaded", function () {
    
    const experienceContainer = document.getElementById('experience-buttons');

    PersonData.jobExperience.forEach(job => {
        // Create a button for each job
        const button = document.createElement('button');
        button.classList.add('collapsible');
        button.textContent = job.title;
        button.dataset.jobId = job.id; // Store the job ID in a data attribute

        // Create the content div
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('collapsible-content');
        contentDiv.classList.add(job.id); // Add the job ID as a class
        contentDiv.style.display = 'none'; // Hide content initially

        // Append button and content div to the container
        experienceContainer.appendChild(button);
        experienceContainer.appendChild(contentDiv);

        // Set the content of the collapsible content div
        button.addEventListener('click', () => {
            // Toggle the active class for the button
            button.classList.toggle('active');

            // Get the associated collapsible content
            const content = document.querySelector(`.${job.id}`);
            
            // Toggle the display property
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
                content.innerHTML = `
                    <h3>${job.title}</h3>
                    <p><strong>Dates:</strong> ${job.dates}</p>
                    <p><strong>Description:</strong> ${job.description}</p>
                `;
            }
        });
    });
});

// Thechincal Skills
document.addEventListener("DOMContentLoaded", function () {
    const skillsContainer = document.querySelector('.skills-list');
    
    skillsContainer.innerHTML = '';

    PersonData.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        
        skillItem.innerHTML = `
            <span class="skill-label">${skill.label}</span>
            <span class="colon">:</span>
            <span>${skill.value}</span>
        `;
        
        skillsContainer.appendChild(skillItem);
    });
});

// Education Details
document.addEventListener("DOMContentLoaded", function () {
    const educationContent = document.querySelector('#education-content');
    const eduDataArray = PersonData.education;

    // Clear any existing content
    educationContent.innerHTML = '';

    // Loop through each education record
    eduDataArray.forEach(eduData => {
        educationContent.innerHTML += `
            <div class="education-details">
                <h3>${eduData.degree}</h3>
                <p><strong>${eduData.institution}</strong></p>
                <p>${eduData.dates}</p>
                <p>${eduData.description}</p>
            </div>
          
        `;
    });
});

function renderCertificates() {
    const imageContainer = document.querySelector('.image-container');
    PersonData.certificates.forEach((cert, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = cert.src;
        imgElement.alt = cert.alt;
        imgElement.className = index === 0 ? 'active' : ''; // Set first image as active
        imageContainer.appendChild(imgElement);
    });
}

// Slider functionality
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.image-container img');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
    });
    updateButtonState()
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});
// Function to update button state
function updateButtonState() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelectorAll('.image-container img');

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
}
updateButtonState()
// Initialize
renderCertificates();

// Function to render contact info
function renderContact() {
    const contactSection = document.querySelector('#contact .container');
    contactSection.innerHTML = `
        <h2>Contact</h2>
        <p>Email: <a href="mailto:${PersonData.contact.contact.email}">${PersonData.contact.contact.email}</a></p>
        <p>Phone: ${PersonData.contact.contact.phone}</p>
        <p>LinkedIn: <a href="${PersonData.contact.contact.linkedin}" target="_blank">${PersonData.contact.contact.linkedin}</a></p>
    `;
}

// Function to render languages
function renderLanguages() {
    const languagesSection = document.querySelector('#languages .container ul');
    languagesSection.innerHTML = PersonData.contact.languages.map(language => `<li>${language}</li>`).join('');
}
renderContact();
renderLanguages();

// Resolution for Mobile Space using Menu bar
document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the active class for the button
        button.classList.toggle('active');
        // Get the associated collapsible content
        const content = button.nextElementSibling;
        // Toggle the display property
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
document.getElementById('menu-toggle').addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('hidden'); // Toggle the 'hidden' class
});
// Add event listeners to menu items to close the menu when clicked
document.querySelectorAll('#nav-menu a').forEach(item => {
    item.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.add('hidden'); // Hide the menu when an item is clicked
    });
});
