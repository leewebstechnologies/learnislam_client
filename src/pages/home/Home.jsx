import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "What is Aqeedah",
      description:
        "This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds. This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds.",
      image:
        "https://images.unsplash.com/photo-1597505495109-7fc35bb64d8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "What is Arabic",
      description:
        "This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds. This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds.",
      image:
        "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "What is Hadith",
      description:
        "This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds. This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds.",
      image:
        "https://images.unsplash.com/photo-1590075865003-e48277faa558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlzbGFtfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      title: "What is Tafseer",
      description:
        "This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds. This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds.",
      image:
        "https://images.unsplash.com/photo-1596163177973-aa0e47c735dc?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "What is Etiquette",
      description:
        "This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds. This is a clear presentation of the creed of Ahl al-Sunnah wal Jama’ah, according to the doctrine of the jurists of the religion, Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan al-Shaybani, may Allah be pleased with them all, and what they believe regarding the fundamentals of the religion and their faith in the Lord of the worlds.",
      image:
        "https://images.unsplash.com/photo-1519818187420-8e49de7adeef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXNsYW18ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="image">
              <img src={post.image} alt="home_image" />
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
