const editButton = document.getElementById("edit-button");
const displayName = document.getElementById("display-name");

editButton.addEventListener("click", () => {
  const newName = prompt("Enter your new name:");
  if (newName) {
    displayName.textContent = newName;
  }
});

// 新增音樂功能
const addMusicButton = document.getElementById("add-music-button");
const addMusicForm = document.getElementById("add-music-form");
const submitMusicButton = document.getElementById("submit-music");
const musicList = document.getElementById("music-list");

addMusicButton.addEventListener("click", () => {
  addMusicForm.style.display = addMusicForm.style.display === "none" ? "block" : "none";
});

submitMusicButton.addEventListener("click", () => {
  const musicName = document.getElementById("music-name").value.trim();
  const musicLink = document.getElementById("music-link").value.trim();

  if (!musicName || !musicLink) {
    alert("請填寫完整的音樂名稱和連結！");
    return;
  }

  // 創建新音樂項目
  const newMusic = document.createElement("a");
  newMusic.href = musicLink;
  newMusic.target = "_blank";
  newMusic.innerHTML = `
    <img src="https://github.com/113306057/113306057_HW4/raw/main/ytlogo.png" alt="${musicName}">
    <p>${musicName}</p>
  `;
  musicList.appendChild(newMusic);

  // 清空表單並隱藏
  document.getElementById("music-name").value = "";
  document.getElementById("music-link").value = "";
  addMusicForm.style.display = "none";
});