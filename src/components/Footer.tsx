import { createClient } from "@/prismicio"
import Link from "next/link"
import { PrismicNextLink } from "@prismicio/next"
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo";

export default async function Footer() {
    const client = createClient();

    const settings = await client.getSingle('settings');

    const navItem = settings.data.navigation.map(({ label, link }) => {
        return (
            <li className="p-2" key={label}>
                <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
        )
    })
    return (
        <Bounded as="footer" className="py-4 md:py-6 lg:py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <Link className="mb-2 sm:mb-0" href="/">
                    <Logo />
                </Link>
                <p>
                    © {new Date().getFullYear()} {settings.data.site_title}
                </p>
                <ul className="flex flex-col sm:flex-row ">
                    {navItem}
                </ul>
            </div>
        </Bounded>
    )



}