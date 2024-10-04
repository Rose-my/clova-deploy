import api from "./api";

interface PostUploadTypes {
  image: File;
  losttime: string;
  lostdate: string;
  description: string;
  title: string;
  moredesc: string;
  founded: boolean;
  category: string;
  getwhere: string;
  nowwhere: string;
}

export async function postUpload(props: PostUploadTypes) {
  const { image, losttime, lostdate, description, title, moredesc, founded, category, getwhere, nowwhere } = props;

  // Create FormData and append all required fields
  const requestBody = new FormData();
  requestBody.append("uploadImg", image);
  requestBody.append("losttime", losttime);
  requestBody.append("lostdate", lostdate);
  requestBody.append("description", description);
  requestBody.append("title", title);
  requestBody.append("moredesc", moredesc);
  requestBody.append("founded", founded.toString()); // Boolean must be converted to string
  requestBody.append("category", category);
  requestBody.append("getwhere", getwhere);
  requestBody.append("nowwhere", nowwhere);

  // Send the form data via POST request
  const { data } = await api.post("/lostitem/new/", requestBody, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
}
