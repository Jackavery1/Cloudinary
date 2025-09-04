const cloudinary = require("../config/cloudinary");

// Service Cloudinary
class CloudinaryService {
  // Upload d'un fichier
  static async uploadFile(filePath) {
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: "uploads",
        resource_type: "auto",
      });

      return {
        success: true,
        url: result.secure_url,
        public_id: result.public_id,
        format: result.format,
        size: result.bytes,
      };
    } catch (error) {
      console.error("Erreur upload:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  // Suppression d'un fichier
  static async deleteFile(publicId) {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      return {
        success: true,
        result,
      };
    } catch (error) {
      console.error("Erreur suppression:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  }
}

module.exports = CloudinaryService;
