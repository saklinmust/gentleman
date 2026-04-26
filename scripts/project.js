const projectList = [{
        id: 1,
        number: "01",
        title: "FullStack Thread Clone",
        description: "Built a complete social media platform with real-time messaging, user authentication, and post management. Features include user profiles, follow system, and infinite scroll feed. Deployed on cloud with 99.9% uptime.",
        techStack: ["MongoDB", "Express", "React", "Node"],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 2,
        number: "02",
        title: "SAAS Canva Website",
        description: "Developed a professional design tool SaaS platform with drag-and-drop canvas, template library, and collaboration features. Integrated Stripe for payments and supported 500+ design templates for creators.",
        techStack: ["Next JS ", "Strapi", "PostgreSQL", "Tailwind"],
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 3,
        number: "03",
        title: "E-Commerce Platform",
        description: "Created a full-featured e-commerce website with product catalog, shopping cart, secure checkout, and admin dashboard. Implemented inventory management and order tracking with real-time notifications.",
        techStack: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 4,
        number: "04",
        title: "AI Chat Application",
        description: "Engineered an intelligent chatbot powered by OpenAI API with natural language processing. Features include conversation history, context awareness, and seamless integration with multiple platforms for 24/7 support.",
        techStack: ["React", "Node.js", "OpenAI API", "WebSocket"],
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 5,
        number: "05",
        title: "Task Management Dashboard",
        description: "Designed a comprehensive project management tool with kanban boards, team collaboration, and analytics. Includes real-time updates, file attachments, and automated workflow triggers for enhanced productivity.",
        techStack: ["React", "Firebase", "Tailwind CSS", "Redux"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 6,
        number: "06",
        title: "Fitness Tracking App",
        description: "Developed a mobile-responsive fitness platform with workout tracking, nutrition logging, and progress analytics. Features personalized recommendations, community challenges, and integration with health devices.",
        techStack: ["React Native", "Node.js", "MongoDB", "Chart.js"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 7,
        number: "07",
        title: "Content Management System",
        description: "Built a scalable CMS with user-friendly interface for content creators. Includes WYSIWYG editor, SEO optimization tools, scheduling, and multi-language support for global reach.",
        techStack: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 8,
        number: "08",
        title: "Real Estate Portal",
        description: "Created a modern real estate marketplace with advanced property search filters, virtual tours, and secure payment integration. Features agent verification, client reviews, and automated listing notifications.",
        techStack: ["React", "Express", "MongoDB", "Mapbox"],
        image: "assets/projects/project1.webp",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 9,
        number: "09",
        title: "Learning Management System",
        description: "Engineered a comprehensive LMS platform for online education with live classes, interactive quizzes, and progress tracking. Includes certificate generation, discussion forums, and video streaming optimization.",
        techStack: ["React", "Django", "PostgreSQL", "WebRTC"],
        image: "assets/projects/project2.webp",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 10,
        number: "10",
        title: "Weather & Location App",
        description: "Developed a feature-rich weather application with real-time forecasts, geolocation tracking, and weather alerts. Includes historical data analysis, beautiful UI with smooth animations, and offline functionality.",
        techStack: ["React", "OpenWeather API", "Geolocation API", "Chart.js"],
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
        liveLink: "#",
        githubLink: "#",
    },
];

const project = document.querySelector(".project");

let currentIndex = 0;

const renderProject = (index) => {
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;
    const nextDisabled = currentIndex === projectList.length - 1;

    project.innerHTML = `
        <div class="project-info">
            <h3>${projectContent?.number}</h3>
            <h4>${projectContent?.title}</h4>
            <p>
            ${projectContent?.description}
            </p>
            <div class="tech-stack">
                ${projectContent?.techStack
                  ?.map((tech, i) => {
                    return `<span key=${i}>${tech}</span>`;
                  })
                  .join(",")}
            </div>       
            <hr />
            <div class="links">
              <a href="${projectContent?.liveLink}">
                <i class="ph ph-arrow-right"></i>
              </a>
              <a href="${projectContent?.githubLink}">
                <i class="ph ph-github-logo"></i>
              </a>
            </div>
          </div>

          <div class="carousel">
            <img 
                src="${projectContent?.image}" 
                alt="${projectContent?.title}" 
            />

            <div class="arrows">
              <a href="#" id="previous" class='${
                previousDisabled ? "disabled-btn" : ""
              }'>
                <i class="ph ph-caret-left"></i>
              </a>
              <a href="#" id="next" class='${
                nextDisabled ? "disabled-btn" : ""
              }'>
                <i class="ph ph-caret-right"></i>
              </a>
            </div>
          </div>
  `;

    document.getElementById("previous").addEventListener("click", (e) => {
        e.preventDefault();

        if (currentIndex > 0) {
            currentIndex--;
            renderProject(currentIndex);
        }
    });

    document.getElementById("next").addEventListener("click", (e) => {
        e.preventDefault();

        if (currentIndex < projectList.length - 1) {
            currentIndex++;
            renderProject(currentIndex);
        }
    });
};

renderProject(currentIndex);