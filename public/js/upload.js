// Éléments DOM
const uploadArea = document.getElementById("uploadArea");
const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const result = document.getElementById("result");

let selectedFile = null;

// Gestion du clic sur la zone d'upload
uploadArea.addEventListener("click", () => {
  fileInput.click();
});

// Gestion de la sélection de fichier
fileInput.addEventListener("change", (e) => {
  if (e.target.files.length > 0) {
    selectedFile = e.target.files[0];
    uploadBtn.disabled = false;
    showResult(`Fichier sélectionné: ${selectedFile.name}`, "success");
  }
});

// Fonction d'upload
async function uploadFile() {
  if (!selectedFile) {
    showResult("Aucun fichier sélectionné", "error");
    return;
  }

  const formData = new FormData();
  formData.append("file", selectedFile);

  uploadBtn.disabled = true;
  uploadBtn.textContent = "Upload en cours...";

  try {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      showResult(
        `
                <h5 class="mb-3">Upload réussi !</h5>
                <p class="mb-2"><strong>URL:</strong> <a href="${
                  data.url
                }" target="_blank" class="text-decoration-none">${
          data.url
        }</a></p>
                <p class="mb-2"><strong>Format:</strong> ${data.format}</p>
                <p class="mb-0"><strong>Taille:</strong> ${formatFileSize(
                  data.size
                )}</p>
            `,
        "success"
      );
    } else {
      showResult(`Erreur: ${data.error}`, "error");
    }
  } catch (error) {
    showResult(`Erreur de connexion: ${error.message}`, "error");
  } finally {
    uploadBtn.disabled = false;
    uploadBtn.textContent = "Uploader vers Cloudinary";
  }
}

// Fonction d'affichage des résultats
function showResult(message, type) {
  result.innerHTML = message;
  result.className = `result ${type}`;
  result.style.display = "block";
}

// Fonction de formatage de la taille des fichiers
function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
