import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next';
import Link from "next/link"

export default async function Header() {


    const client = createClient();
    const settings = await client.getSingle('settings');

    const navItem = settings.data.navigation.map(({ label, link }) => {
        return (
            <li key={label}>
                <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
        )
    })

    return (
        <header className=" ">
            <Link href="/" className="   ">{settings.data.site_title}</Link>

            <nav>
                <ul>

                    {navItem}
                </ul>
            </nav>
        </header>
    )
}
