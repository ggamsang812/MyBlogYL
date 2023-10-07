const importAll = (r) => {
    let images = {};
    r.keys().forEach((key) => (images[key] = r(key)));
    return images;
  };

const images = importAll(
  require.context(
    "./proj_images", // Specify the directory where your images are located
    false, // Whether subdirectories should be searched too
    /\.(png|jpe?g|gif)$/ // Specify the file extensions of the images you want to include
  )
);

const initialProjs = [
  // Add more proj as needed
  {
    title: "Project: MyBlogYL",
    link: `https://github.com/ggamsang812/MyBlogYL`,
    filename: images["./MyBlogYL.jpg"],
    index: 1,
  },
  {
    title: "Project: DevCal",    
    filename: images["./CSDevCal.jpg"],
    index: 2,
  },
  {
    title: "Project: MechVet",
    filename: images["./CSMechVet.jpg"],
    index: 3,
  },
  {
    title: "Project: Dart_Monkey",
    filename: images["./CSDart_Monkey.jpg"],
    index: 4,
  },
];

export default initialProjs;
