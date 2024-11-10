interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const getData = async (url: string): Promise<Comment[]> =>
  await fetch(url).then((response) => response.json() as Promise<Comment[]>);

getData(COMMENTS_URL).then((data: Comment[]): void => {
  data.forEach((comment: Comment): void => {
    console.log(`ID: ${comment.id}, Email: ${comment.email}`);
  });
});
