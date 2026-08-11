// ================= PRODUCT IMAGE =================

function changeProductImage(imageSource) {

    const mainImage =
        document.getElementById("mainProductImage");

    if (mainImage) {
        mainImage.src = imageSource;
    }

}


// ================= CONTACT WHATSAPP =================

function sendContactWhatsApp(event) {

    event.preventDefault();


    const name =
        document.getElementById("customerName").value.trim();


    const phone =
        document.getElementById("customerPhone").value.trim();


    const email =
        document.getElementById("customerEmail").value.trim();


    const message =
        document.getElementById("customerMessage").value.trim();


    const whatsappNumber =
        "919601818018";


    const whatsappMessage =
        `Hello S V Trading,

Name: ${name}

Mobile: ${phone}

Email: ${email}

Enquiry:
${message}`;


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(
        whatsappURL,
        "_blank"
    );

}