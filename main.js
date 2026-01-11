function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
};

function changeDataOpen() {
    const overlayBox = document.querySelector(".overlay_lightBox")
    let currentDataOpen = overlayBox.getAttribute("data-open");
    if (currentDataOpen === 'true') {
        overlayBox.setAttribute('data-open', 'false');
    } else {
        overlayBox.setAttribute('data-open', 'true');
    }
};

// Blog functionality
let blogData = [];

fetch('./blog-data.json')
    .then(response => response.json())
    .then(data => {
        blogData = data;
        renderBlogArticles();
        setupBlogInteractions();
    })
    .catch(error => console.error('Error loading blog data:', error));

function renderBlogArticles() {
    const blogContent = document.getElementById('blogContent');
    blogContent.innerHTML = '';
    
    blogData.forEach((article, index) => {
        const article_el = document.createElement('div');
        article_el.className = 'blog__article';
        article_el.setAttribute('data-article', index);
        
        const tagsHTML = article.tags.map(tag => `<div>${tag}</div>`).join('');
        
        article_el.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <button class="blog__trigger" data-article="${index}">
                <div class="article__description">
                    <h3 class="article__title">${article.title}</h3>
                    <div class="article__tags flex" role="list">
                        ${tagsHTML}
                    </div>
                </div>
            </button>
        `;
        
        blogContent.appendChild(article_el);
    });
}

function setupBlogInteractions() {
    const triggers = document.querySelectorAll('.blog__trigger');
    const modal = document.getElementById('blogModalOverlay');
    const closeBtn = document.getElementById('blogModalClose');
    
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const articleIndex = parseInt(trigger.getAttribute('data-article'));
            openBlogModal(articleIndex);
        });
    });
    
    closeBtn.addEventListener('click', closeBlogModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBlogModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBlogModal();
        }
    });
}

function openBlogModal(index) {
    const article = blogData[index];
    const modal = document.getElementById('blogModalOverlay');
    
    document.getElementById('modalImage').src = article.image;
    document.getElementById('modalTitle').textContent = article.title;
    document.getElementById('modalContent').textContent = article.description;
    document.getElementById('modalLink').href = article.link;
    
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = article.tags.map(tag => `<div>${tag}</div>`).join('');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBlogModal() {
    const modal = document.getElementById('blogModalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

let teamMembers = document.querySelectorAll("div.team-member");
const membersData = {
    "member-patrycja": {
        "photo": "patrycja.png",
        "name": "Patrycja Mielewczyk",
        "description": "Patrycja Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, corporis rem consectetur porro minima eveniet aliquid alias! Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    "member-konstancja": {
        "photo": "konstancja.png",
        "name": "Konstancja Tanjga",
        "description": "Konstancja Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, corporis rem consectetur porro minima eveniet aliquid alias! Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    "member-karolina": {
        "photo": "karolina.png",
        "name": "Karolina Tracz",
        "description": "Karolina Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, corporis rem consectetur porro minima eveniet aliquid alias! Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
}

teamMembers.forEach(function (teamMember) {
    teamMember.onclick = function () {
        var teamMemberId = this.id;
        document.querySelector(".overlay_lightBox").setAttribute("data-open", "true");

        const overlayContnet = document.getElementById("overlay_contnet");
        const memberData = membersData[`${teamMemberId}`];
        const memberPhoto = memberData.photo
        const memberName = memberData.name
        const memberDescription = memberData.description
        let overlayContnetHTML = `<div class="overlay_content__photo">
                                      <img src="./assets/about/${memberPhoto}" alt="">
                                  </div>
                                  <div class="overlay_content__description">
                                      <h3 class="fs-600 fw-bold">${memberName}</h3>
                                      <p class="spacing-2 fs-450">${memberDescription}</p>
                                  </div>`
        overlayContnet.innerHTML = overlayContnetHTML;
    }
});

// Blog Modal Functionality
async function initBlog() {
    try {
        // Fetch blog data
        const response = await fetch('./blog-data.json');
        const articles = await response.json();
        
        // Populate blog grid
        const blogContent = document.getElementById('blogContent');
        blogContent.innerHTML = articles.map((article, index) => `
            <div class="blog__article" data-article="${index}">
                <img src="${article.image}" alt="${article.title}">
                <button class="blog__trigger" data-article="${index}">
                    <div class="article__description">
                        <h3 class="article__title">${article.title}</h3>
                        <div class="article__tags flex" role="list">
                            ${article.tags.map(tag => `<div>${tag}</div>`).join('')}
                        </div>
                    </div>
                </button>
            </div>
        `).join('');
        
        // Set up grid areas for nth-child selectors
        const articles_html = blogContent.querySelectorAll('.blog__article');
        articles_html.forEach((article, index) => {
            article.style.gridArea = ['one', 'two', 'three', 'four', 'five', 'six'][index];
        });
        
        // Add click handlers
        const triggers = document.querySelectorAll('.blog__trigger');
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const articleIndex = parseInt(trigger.dataset.article);
                const article = articles[articleIndex];
                openBlogModal(article);
            });
        });
        
        // Close modal handlers
        const closeBtn = document.getElementById('blogModalClose');
        const overlay = document.getElementById('blogModalOverlay');
        
        closeBtn.addEventListener('click', closeBlogModal);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeBlogModal();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeBlogModal();
            }
        });
    } catch (error) {
        console.error('Error loading blog:', error);
    }
}

function openBlogModal(article) {
    const modal = document.getElementById('blogModalOverlay');
    document.getElementById('modalImage').src = article.image;
    document.getElementById('modalTitle').textContent = article.title;
    document.getElementById('modalContent').textContent = article.description;
    document.getElementById('modalLink').href = article.link;
    
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = article.tags.map(tag => `<div>${tag}</div>`).join('');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBlogModal() {
    const modal = document.getElementById('blogModalOverlay');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize blog when DOM is ready
document.addEventListener('DOMContentLoaded', initBlog);
