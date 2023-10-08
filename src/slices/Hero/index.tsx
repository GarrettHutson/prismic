import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Children } from "react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

        <div className="grid grid-cols-1 place-items-center text-center">
          <PrismicRichText field={slice.primary.heading}
            components={{
              heading1: ({ children }) =>
                <h1 className="text-7xl leading-tight font-bold font-display tracking-tight text-slate-700">{children}</h1>
            }} />
          <PrismicRichText field={slice.primary.body}
            components={{
              paragraph: ({ children }) =>
                <p className="text-2xl text-center leading-10 font-normal font-body text-slate-600 mb-4 md:mb-8 max-w-md">{children}</p>
            }}
          />
          <Button field={slice.primary.button_link} className="mb-8 md:mb-10">{slice.primary.button_text} </Button>
          <PrismicNextImage field={slice.primary.image} className="drop-shadow-xl max-w-4xl" />
        </div>
      
    </Bounded>
  );
};

export default Hero;
