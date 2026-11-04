
function openBar() {
    document.getElementById("SlideBar").style.width = "250px";
    document.getElementById("openmenu").style.marginLeft = "250px";
    if (document.getElementById("site")) document.getElementById("site").style.marginLeft = "250px";
    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("overlay").style.pointerEvents = "all";
}


function closeBar() {
    document.getElementById("SlideBar").style.width = "0";
    document.getElementById("openmenu").style.marginLeft = "0";
    if (document.getElementById("site")) document.getElementById("site").style.marginLeft = "0px";
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("overlay").style.pointerEvents = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    const isUserLoggedIn = localStorage.getItem("userName");

    // podstanovka
    const profileName = document.getElementById("profileName");
    if (profileName) {
        profileName.textContent = isUserLoggedIn || "Guest";
    }

    // knopka vihoda
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("userName"); //polnostyu stiraem
        });
    }

    // perehvat
    document.addEventListener("click", (e) => {
        // proveryayem, nazhali lina ikonku v shapke ili na ssylku Profile v menyu
        const target = e.target.closest(".account_circle, #menuProfile");
        
        if (target) {
            e.preventDefault(); //ostanavlivayem obychnyy perekhod po ssylke
            
            // esli imya yest v pamyati kidayem v profil, yesli net na vybor login/rega
            if (localStorage.getItem("userName")) {
                window.location.href = "profile.html";
            } else {
                window.location.href = "login_menu.html";
            }
        }
    });

    //registracia
    const regForm = document.getElementById("regForm");
    if (regForm) {
        regForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const inputs = regForm.querySelectorAll("input");
            const email = inputs[0].value;
            const name = inputs[1].value;
            const password = inputs[2].value;

            if (!email.includes("@")) return alert("Неверный формат почты");
            if (password !== inputs[3].value) return alert("Пароли не совпадают");

            const res = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name, password })
            });

            alert(await res.text());
            if (res.ok) {
                localStorage.setItem("userName", name);
                window.location.href = "profile.html";
            }
        });
    }

    // forma vhoda
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const name = document.getElementById("loginName").value;
            const password = document.getElementById("loginPassword").value;

            const res = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, password })
            });

            alert(await res.text());
            if (res.ok) {
                localStorage.setItem("userName", name);
                window.location.href = "profile.html";
            }
        });
    }
});