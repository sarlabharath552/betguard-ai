document.getElementById("saveBtn").addEventListener("click", () => {
  const token = document.getElementById("token").value;

  chrome.storage.local.set({ token: token }, () => {
    alert("Token saved ✅");
  });
});