import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import img from "../assets/e13.png";
import g from "../assets/Group.png";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

const Videos = () => {
  const [latestVideos, setLatestVideos] = useState([]);
  const [liveStreams, setLiveStreams] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchYouTubeData = async (eventType = "") => {
    try {
      let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6&type=video`;

      if (eventType) {
        url += `&eventType=${eventType}`;
      }

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("API request failed");
      }

      const data = await res.json();

      if (data.error) {
        console.error("YouTube API Error:", data.error.message);
        setError(true);
        return [];
      }

      return data.items || [];
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(true);
      return [];
    }
  };

  useEffect(() => {
    if (!API_KEY || !CHANNEL_ID) {
      console.error("Missing API KEY or CHANNEL ID");
      setError(true);
      setLoading(false);
      return;
    }

    const loadData = async () => {
      const latest = await fetchYouTubeData();
      const live = await fetchYouTubeData("completed");

      setLatestVideos(latest);
      setLiveStreams(live);
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <>
      <section className="relative h-[280px] w-full overflow-hidden sm:h-[340px] md:h-[380px] lg:h-[520px]">
        <img
          src={img}
          alt="Student Visa Banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(89.92deg,#FFFFFF_0.06%,rgba(255,255,255,0)_48.4%)]" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col justify-center px-4 sm:px-6 lg:px-8 mt-[10px]">
          <p className="mb-2 text-sm sm:text-base md:text-lg">
            <span className="text-sky-500">Home &gt; </span>
            <span className="text-sky-500">Videos</span>
          </p>

          <h1 className="mt-2 text-2xl font-semibold leading-tight text-[#669980] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Videos
          </h1>
          <p className="mt-[20px] h-[54px] w-[500px] max-w-full text-[18px]">
            Explore expert migration advice, step-by-step guides, and success stories from our YouTube channel.
          </p>
          <a
            href="https://www.youtube.com/@GrowmoreGlobalVisa"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex w-full max-w-[180px] items-center justify-center gap-2 rounded-full bg-cyan-800 px-6 py-3 text-[15px] font-medium text-black transition-all duration-300 hover:bg-gray-100 sm:w-auto sm:px-8 sm:text-[17px]"
          >
            <img src={g} alt="YouTube" className="h-6 w-6 object-contain" />
            <span className="text-white">YouTube</span>
          </a>
        </div>
      </section>

      <div className="w-full bg-white">

        <section className="pb-10 pt-16 text-center md:pt-20">
          <div className="mx-auto max-w-7xl px-6 md:px-16">

            {loading && <p className="mt-6 text-gray-500">Loading videos...</p>}

            {error && !loading && (
              <p className="mt-6 text-red-500">
                Failed to load videos. Please try again later.
              </p>
            )}
          </div>
        </section>

        {!loading && !error && latestVideos.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 pb-16 md:px-16">
            <h3 className="mb-8 text-center text-[30px] text-teal-600 pl-4 text-2xl font-semibold text-[#28535B]">
              Latest Uploads
            </h3>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3 },
              }}
            >
              {latestVideos.map((video) => (
                <SwiperSlide key={video.id.videoId}>
                  <div className="overflow-hidden rounded-xl bg-teal-50  rounded-[12px] shadow transition hover:shadow-md">
                    <div className="aspect-video">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        title={video.snippet.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                    <div className="p-4">
                      <h4 className="line-clamp-2 font-medium text-teal-700">
                        {video.snippet.title}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}

        {!loading && !error && liveStreams.length > 0 && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-6 md:px-16">
              <h3 className="mb-8 text-center text-[30px] font-semibold text-cyan-600">
                Past Live Sessions
              </h3>

              <div className="grid grid-cols-1 gap-8 rounded-[12px]  p-4 md:grid-cols-2 lg:grid-cols-3">
                {liveStreams.map((stream) => (
                  <div key={stream.id.videoId} className="overflow-hidden rounded-xl  shadow-md">
                    <div className="relative aspect-video overflow-hidden">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${stream.id.videoId}`}
                        title={stream.snippet.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />

                      <span className="absolute left-3 top-3 rounded bg-gray-800 px-2 py-1 text-xs text-white">
                        RECORDED
                      </span>
                    </div>

                    <h5 className="mt-4 px-4 pb-4 font-semibold text-teal-700">
                      {stream.snippet.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Videos;
