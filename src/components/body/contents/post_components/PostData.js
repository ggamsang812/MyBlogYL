const importAll = (r) => {
  let images = {};
  r.keys().forEach((key) => (images[key] = r(key)));
  return images;
};

const images = importAll(
  require.context(
    "./post_images", // Specify the directory where your images are located
    false, // Whether subdirectories should be searched too
    /\.(png|jpe?g|gif)$/ // Specify the file extensions of the images you want to include
  )
);

const initialPosts = [
  // Add more posts as needed
  {
    title: "Google Resume Workshop - Attended.",
    description:
      "This is the description of Post 0. dddddddddddddd\n dddddddddd dddddddddddd ddddddddddddddddddd dddddddddddddddddddddd \naaaaaaaaaa ddddddddddddddddd dddddddddddddd dddddddd",
    date: "2023-09-18",
  },
  {
    title: "MyBlogYL Project - Started.",
    description:
      "To practice my React.js knowledge and skill, I'm start a project to build my personal blog \nThis is a new line. <a href='https://github.com/ggamsang812' target='_blank'>Visit Example</a>",
    date: "2023-09-02",
  },
  {
    title: "AWS Certified Solutions Architect - Associate Exam - Prep.",
    description: "This is the description of Post 1.",
    date: "2023-08-17",
  },
  {
    title: "Recovered. Back to Work!",
    description: "This is the description of Post 2.",
    date: "2023-08-16",
  },
  {
    title: "AWS Summit New York 2023 - Attended.",
    description: "This is the description of Post 2.",
    date: "2023-07-26",
    image: images["./20230919_AWS_Summit.jpg"], // Use the imported image
  },
  {
    title: "Learning Flutter and Dart.",
    description: "This is the description of Post 3.asdfasdfasdfasdfasdfdsf",
    date: "2023-05-27",
  },
  {
    title: "AWS Certified Cloud Practitioner Exam - Passed!",
    description: "This is the description of Post 4.",
    date: "2023-05-26",
  },
  {
    title: "AWS Certified Cloud Practitioner Exam - Prep.",
    description: "This is the description of Post 5.",
    date: "2023-04-26",
  },
  {
    title: "Finally, Learning How to Use GitHub. No More Avoiding GitHub!",
    description: "This is the description of Post 6.",
    date: "2023-04-25",
  },
];

export default initialPosts;
