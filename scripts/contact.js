const media = document.querySelector(".contact-media");

const contactList = [{
        id: 1,
        icon: "ph ph-phone-call",
        name: "Phone",
        value: "+91 6001175465",
        href: "tel:+916001175465",
    },
    {
        id: 2,
        icon: "ph ph-envelope",
        name: "E-Mail",
        value: "saklinm631@gmail.com",
        href: "mailto:saklinm631@gmail.com",
    },
    {
        id: 3,
        icon: "ph ph-map-pin-area",
        name: "Country",
        value: "India",
        href: "#",
    },
];

const contactContent = contactList
    .map((ele) => {
        return `
    <div class="media" key="${ele?.id}">
        <span>
            <i class="${ele?.icon}"></i>
        </span>

        <div class="contact-value">
            <p>${ele?.name}</p>
            <a href="${ele?.href}">${ele?.value}</a>
        </div>
    </div>
    `;
    })
    .join("");

if (media) media.innerHTML = contactContent;

const sendBtn = document.querySelector("#send-msg");

const originalText = sendBtn ? sendBtn.innerHTML : "Send Message";
const originalStyles = sendBtn
    ? {
          backgroundColor: sendBtn.style.backgroundColor,
          color: sendBtn.style.color,
          border: sendBtn.style.border,
          boxShadow: sendBtn.style.boxShadow,
      }
    : {};

document
    .getElementById("contact-form")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        sendBtn.innerHTML = "Sending...";
        sendBtn.style.backgroundColor = "gray";
        sendBtn.style.color = "white";
        sendBtn.style.border = "none";
        sendBtn.style.boxShadow = "none";
        sendBtn.disabled = true;

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !phone || !message) {

            sendBtn.innerHTML = originalText;
            Object.assign(sendBtn.style, originalStyles);
            sendBtn.disabled = false;

            return Toastify({
                text: "All fields are required !",
                duration: 3000,
                gravity: "top",
                position: "center",
                close: true,
                style: {
                    background: "rgb(206, 16, 16)",
                },
            }).showToast();
        }

        // send via EmailJS and provide better logging on failure
        emailjs
            .send("service_xc5pgaq", "template_nprehkl", {
                name,
                email,
                phone,
                message,
            })
            .then(() => {
                Toastify({
                    text: "Message Sent !",
                    duration: 3000,
                    gravity: "top",
                    position: "center",
                    close: true,
                    style: {
                        background: "rgb(9, 222, 38)",
                    },
                }).showToast();

                setTimeout(() => {
                    if (sendBtn) {
                        sendBtn.innerHTML = originalText;
                        Object.assign(sendBtn.style, originalStyles);
                        sendBtn.disabled = false;
                    }
                }, 2000);
            })
            .catch((error) => {
                console.error("EmailJS send error:", error);

                // Try to extract a readable error message
                let errMsg = "Message Failed. Try again.";
                try {
                    if (error && error.text) errMsg = error.text;
                    else if (error && error.statusText) errMsg = error.statusText;
                    else if (error && error.message) errMsg = error.message;
                } catch (e) {
                    // ignore
                }

                Toastify({
                    text: errMsg,
                    duration: 4000,
                    gravity: "top",
                    position: "center",
                    close: true,
                    style: {
                        background: "rgb(206, 16, 16)",
                    },
                }).showToast();

                if (sendBtn) {
                    sendBtn.innerHTML = originalText;
                    Object.assign(sendBtn.style, originalStyles);
                    sendBtn.disabled = false;
                }
            });
    });

    // Helper: call `testEmailJSSend()` in browser console to quickly test EmailJS
    window.testEmailJSSend = function() {
        if (!window.emailjs) {
            console.error("EmailJS is not loaded on the page.");
            return;
        }
        console.log("Testing EmailJS send with service 'service_xc5pgaq' and template 'template_nprehkl'...");
        emailjs
            .send("service_xc5pgaq", "template_nprehkl", {
                name: "Test User",
                email: "test@example.com",
                phone: "+0000000000",
                message: "This is a test message from testEmailJSSend().",
            })
            .then((res) => {
                console.log("Test send success:", res);
                Toastify({
                    text: "Test message sent (check inbox).",
                    duration: 3000,
                    gravity: "top",
                    position: "center",
                    close: true,
                    style: { background: "rgb(9, 222, 38)" },
                }).showToast();
            })
            .catch((err) => {
                console.error("Test send failed:", err);
                let txt = "Test send failed";
                if (err && err.text) txt = err.text;
                else if (err && err.statusText) txt = err.statusText;
                else if (err && err.message) txt = err.message;
                Toastify({
                    text: txt,
                    duration: 5000,
                    gravity: "top",
                    position: "center",
                    close: true,
                    style: { background: "rgb(206, 16, 16)" },
                }).showToast();
            });
    };