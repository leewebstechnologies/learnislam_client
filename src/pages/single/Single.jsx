import "./single.scss";
import Blogger from "../../images/blogger.png";
import Edit from "../../images/edit.png";
import Delete from "../../images/delete.png";
import { Link } from "react-router-dom";

const Single = () => {
  // eslint-disable-next-line
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1472213984618-c79aaec7fef0?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="single_image"
        />
        <div className="user">
          <img src={Blogger} alt="blogger" />
          <div className="info">
            <span>Ali</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write/edit=2`}>
              <img src={Edit} alt="edit_image" />
            </Link>

            <img src={Delete} alt="delete_image" />
          </div>
        </div>
        <h1>Al-Aqidah al-Tahawiyyah in English and Arabic</h1>
        <p>
          <p>
            This is a clear presentation of the creed of Ahl al-Sunnah wal
            Jama’ah, according to the doctrine of the jurists of the religion,
            Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn
            Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan
            al-Shaybani, may Allah be pleased with them all, and what they
            believe regarding the fundamentals of the religion and their faith
            in the Lord of the worlds.
            <br />
            <br />
          </p>
          <p>
            This is a clear presentation of the creed of Ahl al-Sunnah wal
            Jama’ah, according to the doctrine of the jurists of the religion,
            Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn
            Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan
            al-Shaybani, may Allah be pleased with them all, and what they
            believe regarding the fundamentals of the religion and their faith
            in the Lord of the worlds.
            <br />
            <br />
          </p>
          <p>
            This is a clear presentation of the creed of Ahl al-Sunnah wal
            Jama’ah, according to the doctrine of the jurists of the religion,
            Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn
            Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan
            al-Shaybani, may Allah be pleased with them all, and what they
            believe regarding the fundamentals of the religion and their faith
            in the Lord of the worlds.
            <br />
            <br />
          </p>
          <p>
            This is a clear presentation of the creed of Ahl al-Sunnah wal
            Jama’ah, according to the doctrine of the jurists of the religion,
            Abu Hanifah al-Nu’man ibn Thabit al-Kufi, Abu Yusuf Ya’qub ibn
            Ibrahim al-Ansari and Abu Abdullah Muhammad ibn al-Hasan
            al-Shaybani, may Allah be pleased with them all, and what they
            believe regarding the fundamentals of the religion and their faith
            in the Lord of the worlds.
            <br />
            <br />
          </p>
        </p>
      </div>
      <div className="menu">m</div>
    </div>
  );
};

export default Single;
