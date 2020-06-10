import * as React from "react";
import {
  Slide,
  ImageWithZoom,
  ButtonBack,
  Slider,
  ButtonNext,
  WithStore,
  CarouselInjectedProps,
  CarouselProvider,
} from "pure-react-carousel";
import { Icon } from "semantic-ui-react";
import product1 from "../assets/images/products/1.jpg";
import product2 from "../assets/images/products/2.jpg";

interface CustomSliderProps {
  images?: any[];
  withButtons?: boolean;
  visibleSlides?: number;
  infinite?: boolean;
  totalSlides?: number;
  step?: number;
  naturalSlideWidth?: number;
  naturalSlideHeight?: number;
}

interface SliderContentProps
  extends Pick<CustomSliderProps, "images" | "withButtons">,
    CarouselInjectedProps {}

class CustomSliderWrapper extends React.Component<CustomSliderProps> {
  static defaultProps: Partial<CustomSliderProps> = {
    images: [product1, product2],
    withButtons: true,
    infinite: true,
    visibleSlides: 1,
    totalSlides: 2,
    step: 1,
    naturalSlideWidth: 1080,
    naturalSlideHeight: 1080,
  };
  render() {
    const { images, infinite, withButtons } = this.props;
    return (
      <CarouselProvider
        // hasMasterSpinner
        infinite={infinite}
        visibleSlides={1}
        totalSlides={2}
        step={1}
        naturalSlideWidth={1080}
        naturalSlideHeight={1080}
        className="custom-slider"
      >
        <SliderContent images={images} withButtons={withButtons} />
      </CarouselProvider>
    );
  }
}

class SliderContentWrapper extends React.Component<SliderContentProps> {
  render() {
    const { images, withButtons } = this.props;
    return (
      <>
        <Slider>
          {images.map((item, idx) => (
            <Slide index={idx} key={idx}>
              <ImageWithZoom src={item} />
            </Slide>
          ))}
        </Slider>
        {withButtons && (
          <>
            <ButtonBack className="slider-button left">
              <Icon fitted size="large" name="arrow left" />
            </ButtonBack>
            <ButtonNext className="slider-button right">
              <Icon fitted size="large" name="arrow right" />
            </ButtonNext>
          </>
        )}
      </>
    );
  }
}

const SliderContent = WithStore<SliderContentProps>(SliderContentWrapper);
export const CustomSlider = CustomSliderWrapper;
