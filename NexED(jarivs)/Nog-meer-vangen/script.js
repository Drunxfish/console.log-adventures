function gooiButton() {
    try {
        bal.gooi();
    } catch (error) {
        errors(error);
    }
}

function vangButton() {
    try {
        bal.vang();
    } catch (error) {
        errors(error);
    }
}

function resetButton() {
    bal.reset();
    mess.textContent = "";
    console.clear();
}

function errors(error) {
    if (error instanceof ReferenceError) {
        mess.textContent = "Een error van type: " + '"' + TypeError() + '"';
        console.log("error");
    } else if (error instanceof TypeError) {
        mess.textContent = "Een error van type: " + error.message;
        console.log("error");
    }
}

var bal = {
    canvasBal: constructBal(),
    balPositie: "links",

    gooi: function () {
        if (this.balPositie !== "links") {
            let number = Math.round(Math.random() * 2);
            if (number === 0) {
                this.referenceErrorType();
            } else if (number === 1) {
                this.typeErrorType();
            } else {
                throw Error("bal in verkeerde positie")
            }
        }
        this.draw(300, 50);
        this.balPositie = "midden";
    },

    vang: function () {
        if (this.balPositie !== "midden") {
            let number = Math.round(Math.random() * 2);
            if (number === 0) {
                this.referenceErrorType();
            } else if (number === 1) {
                this.typeErrorType();
            } else {
                throw Error("bal in verkeerde positie")
            }
        }
        this.draw(500, 250);
        this.balPositie = "rechts";
    },

    reset: function () {
        this.draw(100, 250);
        this.balPositie = "links";
    },

    draw: function (x, y) {
        this.canvasBal.clearRect(0, 0, 600, 300);
        this.canvasBal.beginPath();
        this.canvasBal.arc(x, y, 50, 0, 2 * Math.PI);
        this.canvasBal.closePath();
        this.canvasBal.fill();
    },

    referenceErrorType: function () {
        throw new ReferenceError();
    },

    typeErrorType: function () {
        const a = 10;
        a = 20;
    },
}

function constructBal() {
    let bal = document.getElementById("bal").getContext("2d");
    bal.fillStyle = "red";
    bal.beginPath();
    bal.arc(100, 250, 50, 0, 2 * Math.PI);
    bal.closePath();
    bal.fill();
    return bal
}