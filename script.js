function selectLine(button, line) {

    document.querySelectorAll(".line-option").forEach(function(btn) {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    document.getElementById("selectedLine").innerText =
        "Selected: " + line;

    var price = "";

    if (line === "1 Line" || line === "2 Line") {
        price = "₹449";
    }
    else if (line === "4 Line" || line === "5 Line") {
        price = "₹599";
    }
    else if (line === "3 Line") {
        price = "Price on Enquiry";
    }

    document.getElementById("productPrice").innerText = price;
}


function sendWhatsApp() {

    var selected = document.getElementById("selectedLine").innerText;

    if (selected === "Please select a line option") {
        alert("Please select a line option first.");
        return;
    }

    var line = selected.replace("Selected: ", "");

    var message =
        "Hello S V Trading,%0A%0A" +
        "I am interested in Wall Mounted Clothes Drying Stand.%0A" +
        "Required Option: " + line + "%0A%0A" +
        "Please share price and details.";

    var phone = "919601818018";

    window.open(
        "https://wa.me/" + phone + "?text=" + message,
        "_blank"
    );
}


function sendContactWhatsApp(event) {

    event.preventDefault();

    var name = document.getElementById("customerName").value;
    var phone = document.getElementById("customerPhone").value;
    var email = document.getElementById("customerEmail").value;
    var enquiry = document.getElementById("customerMessage").value;

    var message =
        "Hello S V Trading,%0A%0A" +
        "New Product Enquiry%0A%0A" +
        "Name: " + name + "%0A" +
        "Mobile: " + phone + "%0A" +
        "Email: " + email + "%0A" +
        "Enquiry: " + enquiry;

    var whatsappNumber = "919601818018";

    window.open(
        "https://wa.me/" + whatsappNumber + "?text=" + message,
        "_blank"
    );
}