import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { promises } from "stream";
import { PrismicNextImage } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-12">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <Paragraph className=" ">{children}</Paragraph>,
};
/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */

const Testimonials = async ({
  slice,
}: TestimonialsProps): Promise<JSX.Element> => {
  const client = createClient();

  const testimonials = await Promise.all(
    slice.items.map((item) => {
      if (
        isFilled.contentRelationship(item.testimonial) &&
        item.testimonial.uid
      ) {
        return client.getByUID("testimonial", item.testimonial.uid);
      }
    })
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-6 ">
        {testimonials.map(
          (item, index) =>
            item && (
              <div className="border rounded-md p-4 shadow-xl" key={index}>
                <PrismicRichText
                  field={item.data.quote}
                  components={components}
                />
                <div className="flex ">
                  <PrismicNextImage
                    field={item.data.avatar}
                    height={56}
                    width={56}
                    className="rounded-full mr-6"
                    imgixParams={{ fit: "crop", ar: "1:1", dpr: 2 }}
                  />
                  <div>
                    <p>{item.data.name}</p>
                    <p>{item.data.job_title}</p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </Bounded>
  );
};

export default Testimonials;
