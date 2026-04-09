chrome.storage.local.get("token", function (data) {
  const token = data.token;

  if (!token) {
    console.log("❌ No token found");
    return;
  }

  const text = document.body.innerText.substring(0, 1000);

  // 🔍 STEP 1: Call prediction API
  fetch("http://127.0.0.1:8000/api/predict/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,
    },
    body: JSON.stringify({ text: text }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Prediction API failed");
      return res.json();
    })
    .then((data) => {
      console.log("✅ API RESPONSE:", data);

      if (data.prediction.includes("Betting")) {
        console.log("🚫 Betting detected");

        // 🔥 STEP 2: Save blocked data
        fetch("http://127.0.0.1:8000/api/analytics/save-block/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
          },
          body: JSON.stringify({
            url: window.location.href,
            text: text,
            confidence: data.confidence || 0,
          }),
        })
          .then((res) => {
            if (!res.ok) throw new Error("Save API failed");
            return res.json();
          })
          .then(() => {
            console.log("✅ Blocked data saved");

            // 🔥 STEP 3: Show UI AFTER saving
            showBlockPage(data.confidence);
          })
          .catch((err) => {
            console.log("❌ SAVE ERROR:", err);

            // Even if save fails → still block
            showBlockPage(data.confidence);
          });
      }
    })
    .catch((err) => {
      console.log("❌ ERROR:", err);
    });
});


// 🎨 CLEAN BLOCK UI FUNCTION
function showBlockPage(confidence) {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color:white;
      font-family:sans-serif;
      text-align:center;
    ">
      <h1 style="font-size:40px;">🚫 Blocked by BetGuard AI</h1>
      
      <p style="margin-top:10px;">
        This site contains betting-related content.
      </p>

      <p style="margin-top:10px; font-size:18px;">
        Risk Score: ${(confidence * 100).toFixed(2)}%
      </p>

      <button onclick="window.history.back()" style="
        margin-top:20px;
        padding:10px 20px;
        border:none;
        border-radius:10px;
        background:white;
        color:black;
        cursor:pointer;
      ">
        Go Back
      </button>
    </div>
  `;
}