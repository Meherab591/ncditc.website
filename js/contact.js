// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")
  const formMessage = document.getElementById("formMessage")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      }

      // Here you would typically send the data to a server
      // For now, we'll just show a success message
      console.log("Form submitted:", formData)

      // Show success message
      formMessage.textContent = "Thank you for your message! We will get back to you soon."
      formMessage.className = "form-message success"

      // Reset form
      contactForm.reset()

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = "none"
      }, 5000)

      // TO INTEGRATE WITH A BACKEND:
      // Uncomment and modify the code below to send data to your server
      /*
            fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                formMessage.className = 'form-message success';
                contactForm.reset();
            })
            .catch(error => {
                formMessage.textContent = 'Sorry, there was an error sending your message. Please try again.';
                formMessage.className = 'form-message error';
            });
            */
    })
  }
})
