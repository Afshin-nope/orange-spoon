import React, {useState} from "react";
import Food1 from "../../assets/food-1.png";
import Food2 from "../../assets/food-2.png";
import Food3 from "../../assets/food-4.png";
import background from "../../assets/background.jpg";

const ImageList = [
    {
        id: 1,
        img: Food1,
    },
    {
        id: 2,
        img: Food2,
    },
    {
        id: 3,
        img: Food3,
    },
];

const Hero = () => {
    const [imageId, setImageId] = useState(Food1);

    const bgImage = {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    };

    const picker = (item)=>{
        setImageId(ImageList[item.id -1].img);
    }

    return (
        <>
            <div
                className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 text-white duration-200"
                style={bgImage}
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div
                            data-aos="zoom-out"
                            data-aos-duration="400"
                            data-aos-once="true"
                            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
                        >
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                Welcome To{" "}
                                <span class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                  Orange
                </span>{" "}
                                Spoon
                            </h1>
                            <p className="text-sm ">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                                reiciendis inventore iste ratione ex alias quis magni at optio
                            </p>
                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
                            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center md:m-6 ">
                                <img
                                    data-aos="zoom-in"
                                    data-aos-duration="300"
                                    data-aos-once="true"
                                    src={imageId}
                                    alt="biryani img"
                                    className="w-[300px] sm:w-[450px] sm:scale-125  mx-auto spin "
                                />
                            </div>
                            <div className="lg:h-[250px] hover:cursor-pointer flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                                {ImageList.map((item) => (
                                    <img
                                        data-aos="zoom-in"
                                        data-aos-duration="400"
                                        data-aos-once="true"
                                        src={item.img}
                                        onClick={() => picker(item)}
                                        className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;