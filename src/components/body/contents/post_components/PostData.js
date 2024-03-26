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

const textFiles = importAll(require.context("./post_text", false, /\.(txt)$/));

// Function to read the content of a text file
const readTextFile = (file) => {
  const fileContent = textFiles[file];
  if (fileContent) {
    // Assuming fileContent is the path to the text file
    // You can use a method like fetch or axios to read the content
    return fetch(fileContent)
      .then((response) => response.text())
      .catch((error) => {
        console.error(`Error reading text file ${file}:`, error);
        return ""; // Return an empty string in case of an error
      });
  }
  return ""; // Return an empty string if the file is not found
};

const initialPosts = [
  // Add more posts as needed  
  {
    title: "VSCode - Toggle Word Wrap",
    description: `${await readTextFile("./20240325_VSCodeWordWrap.txt")}`,
    date: "03/25/2024"
  },
  {
    title: "Python - Mutability and Object References",
    description: `${await readTextFile("./20240317_PythonMutability.txt")}`,
    date: "03/17/2024"
  },
  {
    title: "Python - Using OR, AND in an IF-statement",
    description: `${await readTextFile("./20240311_PythonIfOrAnd.txt")}`,
    date: "03/11/2024"
  },
  {
    title: "Google Resume Workshop - Attended.",
    description: `I thought this will be more like a live event where Google HR comes out explain about the better resume and maybe take questions.
    It was just recorded video of Google HR talking about the resume and how to make it better which was not bad but I was expecting more.
    I took some notes, so I will try to apply them to my resume.
    <a href='https://careersonair.withgoogle.com/events/resume-workshop-recommendations-from-recruiters' target='_blank'>Record Here</a>`,
    date: "09/18/2023",
  },
  {
    title: "MyBlogYL Project - Started.",
    description: `${await readTextFile("./20230902_MyBlogYL.txt")}`,
    date: "09/02/2023",
  },
  {
    title: "AWS Certified Solutions Architect - Associate Exam - Prep.",
    description: `${await readTextFile("./20230817_AWSCSA_Prep.txt")}`,
    date: "08/17/2023",
  },
  {
    title: "Recovered. Back to Work!",
    description: `${await readTextFile("./20230816_Recovered.txt")}`,
    date: "08/16/2023",
  },
  {
    title: "AWS Summit New York 2023 - Attended.",
    description: "This is the description of Post 2.",
    date: "07/26/2023",
    image: images["./20230919_AWS_Summit.jpg"],
  },
  {
    title: "Learning Flutter and Dart.",
    description: `This is a sample description.`,
    date: "05/27/2023",
  },
  {
    title: "AWS Certified Cloud Practitioner Exam - Passed!",
    description: "This is the description of Post 4.",
    date: "05/26/2023",
  },
  {
    title: "AWS Certified Cloud Practitioner Exam - Prep.",
    description: "This is the description of Post 5.",
    date: "04/26/2023",
  },
  {
    title: "Finally, Learning How to Use GitHub. No More Avoiding GitHub!",
    description: "This is the description of Post 6.",
    date: "04/25/2023",
  },
];

export default initialPosts;
