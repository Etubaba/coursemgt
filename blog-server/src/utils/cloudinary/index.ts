import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

//dont push this
cloudinary.config({
  cloud_name: "dbftbpm4l",
  api_key: "997691225989249",
  api_secret: "l9idqbtE0j-00reUgmm1IpCMvDE",

  secure: true,
});
const options: {
  folder: string;
  allowedFormats: string[];
} = {
  folder: "charlse_arts",
  allowedFormats: ["jpeg", "png", "jpg"],
};
const storage = new CloudinaryStorage({
  cloudinary,
  params: options,
});
export default storage;
