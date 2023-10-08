import { PrismicNextLinkProps, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

export default function Button({
    className,
    ...props
}: PrismicNextLinkProps) {
    return (
        <PrismicNextLink className={clsx(
            "d-block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base", className)}
            {...props}
        />

    )
}