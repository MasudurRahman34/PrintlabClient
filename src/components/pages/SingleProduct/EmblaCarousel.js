import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import Zoom from "react-medium-image-zoom";

const EmblaCarousel = (props) => {
  const { slides, options, images } = props;
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

  return (
    <div className="embla_single_product">
      <div className="embla_single_product__viewport" ref={emblaMainRef}>
        <div className="embla_single_product__container">
          {slides.map((index) => (
            <div className="embla_single_product__slide" key={index}>
              <div className="embla_single_product__slide__number">
                <Zoom>
                  <img src={`${"/assets/products/Hoodie-Mockup.jpg"}`} alt="" />
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
            {slides.map((index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                src="/assets/products/Hoodie-Mockup.jpg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
