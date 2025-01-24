const uploadProductPermission = require("../../helpers/permission");  // Import permission check
const productModel = require("../../models/productModel");  // Import product model

// Controller for deleting a product
async function DeleteProductController(req, res) {
    try {
        const { id } = req.params;  // Get product ID from the request parameters
        const sessionUserId = req.userId;  // Assuming the user ID is available in the session

        // Check if the user has permission to delete the product
        if (!uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied");  // Deny access if no permission
        }

        // Validate product ID
        if (!id) {
            return res.status(400).json({
                message: "Product ID is required",
                error: true,
                success: false
            });
        }

        // Find and delete the product by ID
        const deletedProduct = await productModel.findByIdAndDelete(id);

        // Check if product exists before deletion
        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false
            });
        }

        // Send success response if the product was deleted
        return res.status(200).json({
            message: "Product deleted successfully",
            error: false,
            success: true
        });
    } catch (err) {
        // Handle any errors that may occur
        return res.status(500).json({
            message: err.message || "Internal server error",
            error: true,
            success: false
        });
    }
}

module.exports = DeleteProductController;
