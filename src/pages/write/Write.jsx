import "./write.scss";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="" name="" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="category">
            <input type="radio" name="category" value="arabic" id="arabic" />
            <label htmlFor="arabic">Arabic</label>
          </div>
          <div className="category">
            <input type="radio" name="category" value="aqeedah" id="aqeedah" />
            <label htmlFor="aqeedah">Aqeedah</label>
          </div>
          <div className="category">
            <input type="radio" name="category" value="fiqh" id="fiqh" />
            <label htmlFor="fiqh">Fiqh</label>
          </div>
          <div className="category">
            <input
              type="radio"
              name="category"
              value="etiquette"
              id="etiquette"
            />
            <label htmlFor="etiquette">Etiquette</label>
          </div>
          <div className="category">
            <input type="radio" name="category" value="seerah" id="seerah" />
            <label htmlFor="arabic">Seerah</label>
          </div>
          <div className="category">
            <input type="radio" name="category" value="hadith" id="hadith" />
            <label htmlFor="arabic">Hadith</label>
          </div>
          <div className="category">
            <input type="radio" name="category" value="tafseer" id="tafseer" />
            <label htmlFor="arabic">Tafseer</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
