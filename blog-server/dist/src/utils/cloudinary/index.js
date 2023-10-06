"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
cloudinary_1.v2.config({
    cloud_name: "dbftbpm4l",
    api_key: "997691225989249",
    api_secret: "l9idqbtE0j-00reUgmm1IpCMvDE",
    secure: true,
});
const options = {
    folder: "charlse_arts",
    allowedFormats: ["jpeg", "png", "jpg"],
};
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: options,
});
exports.default = storage;
//# sourceMappingURL=index.js.map