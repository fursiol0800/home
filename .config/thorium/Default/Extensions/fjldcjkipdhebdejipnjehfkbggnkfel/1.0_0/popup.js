const changeColorButton = document.getElementById("changeColor");

changeColorButton.addEventListener("click", async () => {
    const backgroundColorInput = document.querySelector("#backgroundColor");
    const textColorInput = document.querySelector("#textColor");
    chrome.storage.sync.set({ backgroundColor: backgroundColorInput.value, textColor: textColorInput.value });
  
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: updateColors,
    });
});

function updateColors() {
    chrome.storage.sync.get("backgroundColor", ({ backgroundColor }) => {
        document.body.style.background = backgroundColor;
    });

    chrome.storage.sync.get("textColor", ({ textColor }) => {
        document.querySelectorAll("*").forEach(element => {
            element.style.color = textColor;
        });
    });
}
