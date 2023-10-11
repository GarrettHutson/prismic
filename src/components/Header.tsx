import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next';
import Link from "next/link"
import Bounded from '@/components/Bounded';
import Logo from '@/components/Logo';

export default async function Header() {


    const client = createClient();
    const settings = await client.getSingle('settings');

    const navItem = settings.data.navigation.map(({ label, link }) => {
        return (
            <li className='w-fit hover:bg-black transition-colors ease-in-out duration-300 rounded hover:text-white p-2' key={label}>
                <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
        )
    })

    return (
        <Bounded className="py-2 md:py-4 lg:py-6  ">
            <div className='flex flex-col sm:flex-row justify-between items-center '>
            <Link className="mb-4 sm:mb-0" href="/" >
                <Logo />
            </Link>

            <nav>
                <ul className='flex sm:gap-2 flex-col sm:flex-row'>
                    {navItem}
                </ul>
            </nav>
        </div>
        </Bounded>
    )
}
