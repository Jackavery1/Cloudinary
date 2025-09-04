const express = require("express");
const multer = require("multer");
const CloudinaryService = require("../services/cloudinaryService");

const router = express.Router();

// Configuration Multer
const upload = multer({ dest: "uploads/" });

// Route pour uploader un fichier
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Aucun fichier fourni" });
    }

    const result = await CloudinaryService.uploadFile(req.file.path);

    if (result.success) {
      res.json(result);
    } else {
      res.status(500).json({ error: result.error });
    }
  } catch (error) {
    console.error("Erreur upload:", error);
    res.status(500).json({ error: "Erreur lors de l'upload" });
  }
});

// Route pour supprimer un fichier
router.delete("/delete/:public_id", async (req, res) => {
  try {
    const { public_id } = req.params;
    const result = await CloudinaryService.deleteFile(public_id);

    if (result.success) {
      res.json(result);
    } else {
      res.status(500).json({ error: result.error });
    }
  } catch (error) {
    console.error("Erreur suppression:", error);
    res.status(500).json({ error: "Erreur lors de la suppression" });
  }
});

module.exports = router;
