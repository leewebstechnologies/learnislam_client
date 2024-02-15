import "./menu.scss";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "What is Aqeedah",
      description:
        "In the name of Allah, the Gracious, the Merciful, from whom we seek help. All praise is due to Allah, the Lord of the worlds. هذا ذكر بيان عقيدة أهل السنة والجماعة على مذهب فقهاء الملة أبي حنيفة النعمان بن ثابت الكوفي وأبي يوسف يعقوب بن إبراهيم الأنصاري وأبي عبدالله محمد بن الحسن الشيباني رضوان الله علمعين وما يعتقدون من أصول الدين ويدينون به رب العالمين‏",
      image:
        "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXNsYW18ZW58MHx8MHx8fDA%3D",
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
        "https://images.unsplash.com/photo-1519818187420-8e49de7adeef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXNsYW18ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "What is Tafseer",
      description:
        "To add emojis to your code, you can use Unicode characters or libraries that offer pre-built emoji character sets. In JavaScript, you can use Unicode characters by inserting the character set within quotes directly into your string.",
      image:
        "https://images.unsplash.com/photo-1519818187420-8e49de7adeef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXNsYW18ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      title: "What is Etiquette",
      description:
        "To add emojis to your code, you can use Unicode characters or libraries that offer pre-built emoji character sets. In JavaScript, you can use Unicode characters by inserting the character set within quotes directly into your string.",
      image:
        "https://images.unsplash.com/photo-1519818187420-8e49de7adeef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXNsYW18ZW58MHx8MHx8fDA%3D",
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
