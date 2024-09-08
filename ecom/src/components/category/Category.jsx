import { useNavigate } from "react-router-dom";

const category = [
  {
    image: "https://cdn-icons-png.flaticon.com/128/2331/2331716.png",
    name: "shirt",
  },

  {
    image: "https://cdn-icons-png.flaticon.com/128/428/428001.png",
    name: "laptop",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/1785/1785340.png",
    name: "shoes",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/128/186/186239.png",

    name: "mobile",
  },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col mt-5">
        <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
          <div className="flex ">
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className=" w-13 h-13 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-black transition-all cursor-pointer mb-1 "
                  >
                    <div className="flex justify-center mb-12">
                      <img src={item.image} alt="img" />
                    </div>
                  </div>

                  <h1 className=" text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
};

export default Category;
