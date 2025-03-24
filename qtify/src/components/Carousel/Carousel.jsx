import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SongCard from "../SongCard/SongCard";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({songs}) => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={7}
            navigation={true}
            loop={false}
        >
            {songs.map((song) => (
              <SwiperSlide key={song.id}>
                <SongCard albumName={song.title} follows={song.likes} cardImage={song.image} isExpanded={false} isAlbumCard={false}/>
              </SwiperSlide>
            ))}
            
        </Swiper>
    );
};
export default Carousel;