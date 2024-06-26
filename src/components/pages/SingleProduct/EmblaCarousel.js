import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import Zoom from "react-medium-image-zoom";
import Loader from "@/components/Loader/Loader";
import Image from "next/image";

const EmblaCarousel = (props) => {
  const { slides, options, isLoading } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    axis: "y",
    containScroll: "false",
    dragFree: true,
    watchSlides: false,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  if (isLoading) {
    <Loader />;
  }
  return (
    <div className="embla_single_product">
      <div className="embla_single_product__viewport" ref={emblaMainRef}>
        <div className="embla_single_product__container">
          {slides?.map((slide, index) => (
            <div className="embla_single_product__slide" key={index}>
              <div className="embla_single_product__slide__number">
                <Zoom>
                  <Image src={`${slide.url}`} alt="" width={510} height={600} />
                </Zoom>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla_single_product-thumbs">
        <div
          className="embla_single_product-thumbs__viewport md:mt-[14px] "
          ref={emblaThumbsRef}
        >
          <div className="embla_single_product-thumbs__container">
            {slides?.map((slide, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                src={slide.url || "/assets/products/placehounder.png"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
