import "./menu.scss";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "What is Aqeedah",
      description:
        "In the name of Allah, the Gracious, the Merciful, from whom we seek help. All praise is due to Allah, the Lord of the worlds. هذا ذكر بيان عقيدة أهل السنة والجماعة على مذهب فقهاء الملة أبي حنيفة النعمان بن ثابت الكوفي وأبي يوسف يعقوب بن إبراهيم الأنصاري وأبي عبدالله محمد بن الحسن الشيباني رضوان الله علمعين وما يعتقدون من أصول الدين ويدينون به رب العالمين‏",
      image:
        "https://images.unsplash.com/photo-1694734479942-8cc7f4660578?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "What is Arabic",
      description:
        "To add emojis to your code, you can use Unicode characters or libraries that offer pre-built emoji character sets. In JavaScript, you can use Unicode characters by inserting the character set within quotes directly into your string.",
      image:
        "https://plus.unsplash.com/premium_photo-1677699248111-8aa3c0f6945b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXNsYW18ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "What is Hadith",
      description:
        "To add emojis to your code, you can use Unicode characters or libraries that offer pre-built emoji character sets. In JavaScript, you can use Unicode characters by inserting the character set within quotes directly into your string.",
      image:
        "https://images.unsplash.com/photo-1702744473287-4cc284e97206?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "What is Tafseer",
      description:
        "To add emojis to your code, you can use Unicode characters or libraries that offer pre-built emoji character sets. In JavaScript, you can use Unicode characters by inserting the character set within quotes directly into your string.",
      image:
        "https://images.unsplash.com/photo-1707129900844-484443dd3534?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "What is Etiquette",
      description:
        "To add emojis to your code, you can use Unicode characters or libraries that offer pre-built emoji character sets. In JavaScript, you can use Unicode characters by inserting the character set within quotes directly into your string.",
      image:
        "https://sanjeevdatta.com/wp-content/uploads/2022/02/10-social-etiquette-rules-for-social-intelligence.jpg",
    },
  ];
  return (
    <div className="menu">
      <h1>Other posts you may like.</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.image} alt="post_image" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};
export default Menu;
