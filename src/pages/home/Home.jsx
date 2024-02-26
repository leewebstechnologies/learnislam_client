import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "What is Aqeedah",
      description:
        "This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds. This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds.",
      image: "./images/1.png",
    },
    {
      id: 2,
      title: "What is Arabic",
      description:
        "This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds. This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds.",
      image: "./images/1.png",
    },
    {
      id: 3,
      title: "What is Hadith",
      description:
        "This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds. This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds.",
      image: "./images/1.png",
    },
    {
      id: 4,
      title: "What is Tafseer",
      description:
        "This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds. This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds.",
      image: "./images/1.png",
    },
    {
      id: 5,
      title: "What is Etiquette",
      description:
        "This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds. This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds.",
      image: "./images/1.png",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="image">
              <img className="images" src={post.image} alt="home_image" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
