import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";

import pen2 from "../../../../public/assets/pen2.jpg";

const EmblaCarousel = (props) => {
  const { slides, options } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides?.map((bestSell, index) => (
            <div className="embla__slide" key={index}>
              <Link href={`/${bestSell?.categories[0]?.slug}/${bestSell?.slug}`}>
                <div className="h-full transition-all duration-150 border shadow-primary full hover:shadow-md">
                  <div className="w-full h-[85%]">
                    <Image
                      className="object-cover w-full h-full"
                      src={`${
                        bestSell?.media.filter(
                          (item) => item.is_profile === 1
                        )[0]?.url || "/assets/products/Hoodie-Mockup.jpg"
                      }`}
                      class="card-img-top"
                      alt="img"
                      height={500}
                      width={500}
                    />
                  </div>
                  <div className="flex h-[15%] items-center justify-center">
                    <p className="text-base font-medium text-center text-secondgraphy hover:underline hover:text-primary">
                      {bestSell.title}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
