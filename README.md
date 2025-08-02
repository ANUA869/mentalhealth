# mentalhealth
fetch("https://mental-wellness-backend-4uae.onrender.com/api/feedback", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Anusha",
    message: "I’m feeling better today!"
  })
});

