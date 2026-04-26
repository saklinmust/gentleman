const toggle = document.getElementById("menu-toggle");

if (toggle && toggle.checked) {
    document.body.classList.add("no-scroll");
} else {
    document.body.classList.remove("no-scroll");
}

const words = [
    "Youtuber",
    "Creator",
    "Mentor",
    "Freelancer",
    "Developer",
    "Trainer",
];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex == currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        } else {
            setTimeout(type, typingDelay);
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex == 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, erasingDelay);
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    if (words.length) type();
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        navlinks.forEach((l) => l.classList.remove("active"));

        link.classList.add("active");

        const tabName = link.dataset.tab;

        tabs.forEach((tab) => {
            if (tab.id === tabName) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });

        if (link.dataset.tab === "services") {
            const serviceList = [{
                    id: 1,
                    icon: "ph-code",
                    text: "Website Development",
                    para: "I build responsive and modern websites using the latest technologies like HTML, CSS, JavaScript, React, and MERN stack.",
                },
                {
                    id: 2,
                    icon: "ph-paint-brush",
                    text: "UX/UI Design",
                    para: "Custom mobile apps for Android and iOS using React Native and Expo, designed to provide excellent UI/UX and performance.",
                },
                {
                    id: 3,
                    icon: "ph-trend-up",
                    text: "SEO Optimization",
                    para: "I improve website visibility on search engines with optimized structure, keywords, and performance best practices.",
                },
                {
                    id: 4,
                    icon: "ph-palette ",
                    text: "Graphic Design",
                    para: "Offering expert advice and solutions for tech projects, helping individuals and startups with project planning and stack decisions.",
                },
                {
                    id: 5,
                    icon: "ph-video",
                    text: "Mentorship & Training",
                    para: "Personal mentorship for beginners to advanced learners in web development, including live coding sessions and career guidance.",
                },
                {
                    id: 6,
                    icon: "ph-camera",
                    text: "Photography",
                    para: "End-to-end delivery of freelance projects — from planning to deployment — with quality assurance and post-launch support.",
                },
            ];

            const services = document.getElementsByClassName("service-list");

            const innerContent = serviceList
                .map((l) => {
                    return `
          <div class="box">
              <div class="head-icons">
                <i class="ph ${l?.icon}"></i>

                <span>
                  <i class="ph ph-arrow-down-right"></i>
                </span>
              </div>

              <h3>${l?.text}</h3>
              <span id="spacer"></span>
              <p>
                ${l?.para}
              </p>
          </div>
          `;
                })
                .join("");

            Array.from(services).forEach((ele) => {
                ele.innerHTML = innerContent;
            });
        }

        toggle.checked = false;
    });
});