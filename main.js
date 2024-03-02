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