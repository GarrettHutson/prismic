import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <Paragraph as="p" className="">
      {children}
    </Paragraph>
  ),
};
/**
 * Props for `TextImage`.
 */
export type TextImageProps = SliceComponentProps<Content.TextImageSlice>;

/**
 * Component for "TextImage" Slices.
 */
const TextImage = ({ slice }: TextImageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "textLeft" && (
        <div className="flex flex-col sm:flex-row justify-between items-center w-3/4 mx-auto">
          <div>
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
            <PrismicRichText
              field={slice.primary.body}
              components={components}
            />
          </div>
          <PrismicNextImage
            field={slice.primary.image}
            className="drop-shadow-xl w-1/2 md:w-xl max-w-4xl"
          />
        </div>
      )}
      {slice.variation === "textRight" && (
        <div className="flex-col justify-between sm:flex-row flex  items-center w-3/4 mx-auto">
          <PrismicNextImage
            field={slice.primary.image}
            className="hidden sm: drop-shadow-xl rounded-xl w-1/2 md:w-xl max-w-4xl"
          />
          <div className=" pl-4">
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
            <PrismicRichText
              field={slice.primary.body}
              components={components}
            />
            <PrismicNextImage
              field={slice.primary.image}
              className="sm:hidden drop-shadow-xl rounded-xl w-1/2 md:w-xl max-w-4xl"
            />
          </div>
        </div>
      )}
    </Bounded>
  );
};

export default TextImage;
