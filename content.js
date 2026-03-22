function waitForReplyBox() {
  const observer = new MutationObserver(() => {

    const replyBox = document.querySelector("div[role='textbox']");
    const sendButton = document.querySelector("div[role='button'][data-tooltip^='Send']");

    if (replyBox && sendButton && !document.getElementById("ai-reply-btn")) {
      addAIButton(replyBox, sendButton);
    }

  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function addAIButton(replyBox, sendButton) {

  // 🔵 AI BUTTON
  const button = document.createElement("button");
  button.innerText = "✨ AI Reply";
  button.id = "ai-reply-btn";

  // Gmail-style
  button.style.padding = "6px 14px";
  button.style.backgroundColor = "#1a73e8";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "18px";
  button.style.cursor = "pointer";
  button.style.fontSize = "14px";
  button.style.marginRight = "8px";

  // 🔽 POPUP MENU
  const popup = document.createElement("div");

  popup.style.position = "absolute";
  popup.style.background = "#fff";
  popup.style.border = "1px solid #ddd";
  popup.style.borderRadius = "8px";
  popup.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
  popup.style.display = "none";
  popup.style.zIndex = "9999";
  popup.style.minWidth = "160px";

  const tones = [
    { label: "✏️ Formal", value: "formal" },
    { label: "💼 Professional", value: "professional" },
    { label: "👋 Friendly", value: "friendly" }
  ];

  tones.forEach((toneObj) => {

    const option = document.createElement("div");
    option.innerText = toneObj.label;

    option.style.padding = "10px";
    option.style.cursor = "pointer";
    option.style.fontSize = "14px";

    option.onmouseover = () => option.style.background = "#f1f3f4";
    option.onmouseout = () => option.style.background = "white";

    option.onclick = async () => {

      popup.style.display = "none";

      const emailBodyElement = document.querySelector(".a3s");
      if (!emailBodyElement) {
        alert("Email content not found!");
        return;
      }

      const emailText = emailBodyElement.innerText;

      button.innerText = "Generating...";
      button.disabled = true;

      try {
        const response = await fetch("http://localhost:5000/generate-reply", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            emailText,
            tone: toneObj.value
          })
        });

        const data = await response.json();
        replyBox.innerText = data.reply;

      } catch (error) {
        alert("Error generating reply");
      }

      button.innerText = "✨ AI Reply";
      button.disabled = false;
    };

    popup.appendChild(option);
  });

  // 🔥 Attach popup to same container (important fix)
  const parent = sendButton.parentElement;
  parent.style.position = "relative";
  parent.appendChild(popup);

  // 🔘 Toggle popup
  button.onclick = (e) => {
    e.stopPropagation();

    popup.style.display = popup.style.display === "block" ? "none" : "block";
    popup.style.top = "40px"; // below button
    popup.style.left = "0px";
  };

  // Close when clicking outside
  document.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // 🔥 Insert button BEFORE Send (same row)
  sendButton.parentElement.insertBefore(button, sendButton);
}

waitForReplyBox();