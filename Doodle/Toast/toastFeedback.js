// Toast container/ toasts
const toastbox = document.getElementById('toastbox');
let toasts = document.querySelectorAll(".toast");

// Toast Generator
const genContainer = document.querySelector(".toastGenerator");
let toastMess = document.getElementById("toastMess");
let toastIcon = document.getElementById("toastIcon");
let genButton = document.getElementById("generator");



// Toast builder
function getToast(msg, icon) {
    let toast = document.createElement('div');
    let wrap = document.createElement('i');
    let img = document.createElement('img');
    let para = document.createElement('p');

    // Structure
    toast.classList.add('toast');
    img.src = `./Icons/${icon}.png`
    para.innerText = msg;
    wrap.appendChild(img);
    toast.appendChild(wrap)
    toast.appendChild(para)
    toastbox.append(toast);

    // Creates remove effect and removes the content after a short delay
    setTimeout(() => {
        toast.style.opacity = 0;
    }, 8000);
    setTimeout(() => {
        toast.remove();
    }, 10000);
};




// Event generates Toast message
genButton.addEventListener("click", () => {
    if (toastMess.value != "" && toastIcon.value != "") {

        // Change box shadow of Generator container
        switch (toastIcon.value) {
            case 'cross':
                genContainer.style.boxShadow = "0px 0px 1000px  100px rgb(245, 80, 108)";
                break;
            case 'check':
                genContainer.style.boxShadow = "0px 0px 1000px  100px rgb(80, 245, 116)";
                break;
            case 'information':
                genContainer.style.boxShadow = "0px 0px 1000px  100px rgb(80, 226, 245)";
                break;
            default:
                break;
        }

        // Generate Toast
        getToast(toastMess.value, toastIcon.value);
    } else {
        // :D
        getToast("No toast for you! Fill in both inputs :D", "information");
        genContainer.style.boxShadow = "0px 0px 1000px  100px rgb(80, 179, 245)"
    };

});


