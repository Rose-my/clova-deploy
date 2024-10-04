import api from "./api";

interface PostImageTypes {
  image: File;
}

export async function postImage(props: PostImageTypes) {
  const { image } = props;
  const requestBody = new FormData();
  requestBody.append("image", image);
  console.log(image);

  const { data } = await api.post("/lostitem/imageupload/", requestBody, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
}
