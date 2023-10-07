import { createClient } from "@/prismicio"
import Link from "next/link"
import { PrismicNextLink } from "@prismicio/next"

export default async function Footer(){
const client = createClient();

const settings = await client.getSingle('settings');

const navItem = settings.data.navigation.map(({ label, link }) => {
    return (
        <li key={label}>
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
        </li>
    )
})
return(
    <footer>
    <Link href="/">{settings.data.site_title}</Link>
    <ul>
        {navItem}
    </ul>
</footer>
)



}