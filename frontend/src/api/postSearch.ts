import api from "./api";

interface postSearchTypes {
  lostdate: string | null;
  losttime1: string | null;
  losttime2: string | null;
  getwhere: string | null;
  description: string;
}

export async function postSearch(props: postSearchTypes) {
  const { lostdate, losttime1, losttime2, getwhere, description } = props;
  const { data } = await api.post("/lostitem/search/", {
    lostdate: lostdate,
    losttime1: losttime1,
    losttime2: losttime2,
    getwhere: getwhere,
    description: description,
  });

  return data;
}
