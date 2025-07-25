import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  const slides = [
    {
      title: "ACTION THRILLER",
      movieinfo: "Welcome to Spider-Verse",
      time: "2hr 00mins",
      action: "Action",
      month: "6 months ago",
      des: "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab.",
      img: "/images/spider-man-img.jpg"
    },
    {
      title: "SCI-FI ADVENTURE",
      movieinfo: "Polar Super Express Train",
      time: "1hr 45mins",
      action: "Sci-Fi",
      month: "1 month ago",
      des: "Journey through the multiverse with new heroes and old enemies.",
      img: "/images/train-img.jpg"
    },
    {
      title: "ACTION THRILLER",
      movieinfo: "Elephant walk at Sunset",
      time: "1hr 45mins",
      action: "Sci-Fi",
      month: "1 month ago",
      des: "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab.",
      img: "/images/elephant-img.jpg"
    },
    {
      title: "SCI-FI ADVENTURE",
      movieinfo: "Soldiers Holding Rifles",
      time: "1hr 45mins",
      action: "Sci-Fi",
      month: "1 month ago",
      des: "Journey through the multiverse with new heroes and old enemies.",
      img: "/images/army-img.jpg"
    },
    {
      title: "SCI-FI ADVENTURE",
      movieinfo: "Exclusive Alloy Metal Pull",
      time: "1hr 45mins",
      action: "Sci-Fi",
      month: "1 month ago",
      des: "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab.",
      img: "/images/car-img.jpg"
    },
    {
      title: "SCI-FI ADVENTURE",
      movieinfo: "Exclusive Alloy Metal Pull",
      time: "1hr 45mins",
      action: "Sci-Fi",
      month: "1 month ago",
      des: "Streamlab is a long established fact that a reader will be distracted by the readable content of a page when Streamlab at its layout Streamlab.",
      img: "/images/fighter-img.jpg"
    }
  ];

  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-screen h-screen bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="container mx-auto relative z-10 flex items-center h-full px-6">
                <div>
                  <h3 className="text-zinc-200 text-xl md:text-2xl font-semibold">
                    {slide.title}
                  </h3>
                  <h1 className="text-white text-4xl md:text-6xl font-bold">
                    {slide.movieinfo}
                  </h1>
                  <div className="flex flex-wrap gap-3 text-white my-3 text-sm md:text-base">
                    <span>{slide.time}</span>
                    <span>-</span>
                    <span>{slide.action}</span>
                    <span>-</span>
                    <span>{slide.month}</span>
                  </div>
                  <p className="text-gray-300 max-w-xl">
                    {slide.des}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
