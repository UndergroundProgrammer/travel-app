import alert from "./notifications/Alert";

export const uploadImage = (img, cb) => {
  if (img != null) {
    img.length > 1 ? uploadMultiPleImage(img, cb) : uploadSingleImage(img, cb);
  }
};

const uploadSingleImage = async (img, cb) => {
  const data = new FormData();
  data.append("file", img[0]);
  data.append("upload_preset", "imagesStore");
  data.append("cloud_name", "tripapp");

  const jsonData = fetch(
    "https://api.cloudinary.com/v1_1/tripapp/image/upload",
    {
      method: "post",
      body: data,
    }
  ).then((res) => res.json());
  try {
    const response = await jsonData;

    cb([response.secure_url], true);
  } catch (error) {
    alert.showErrorAlert(error);
    cb(error, false);
  }
};

const uploadMultiPleImage = async (imgs, cb) => {
 
  const promises = imgs.map(async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "imagesStore");
    data.append("cloud_name", "tripapp");

    return fetch("https://api.cloudinary.com/v1_1/tripapp/image/upload", {
      method: "post",
      body: data,
    }).then((res) => res.json());
  });
  try {
    const response = await Promise.all(promises);

    const data = response.reduce((acc, obj) => {
      return acc.concat(obj.secure_url);
    }, []);

    cb(data, true);
  } catch (error) {
    cb(error, false);
    alert.showErrorAlert(error);
  }
};
