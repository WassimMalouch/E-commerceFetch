import "./Category.css";

const Category = ({ categoryArray , category, setCategory}) => {
    const RemoveStyle=()=>{
        const list = document.querySelectorAll(".btnCat");
        for (const value of list.values()) {
          value.classList.remove("active");
        }
    }
    const clickedCategory = (e) => {
    RemoveStyle();
    e.target.classList.add("active");
    setCategory(e.target.innerText);
  };

const clickedReset=()=>{
    RemoveStyle();
    setCategory("");
}


  const list = categoryArray.map((element, index) => (
    <span className="btnCat" key={index} onClick={clickedCategory}>
      {element}
    </span>
  ));

  return <div className="category">{list} <span className="btnReset" onClick={clickedReset} >X</span></div>;
};
export default Category;
