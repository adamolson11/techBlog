import Link from "next/link";

const Links = () => {
    
    const links = [

        {
            name: 'Home',
            link: '/'
        }, 

        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/contact'
        }, 
        {
            name: 'Blog',
            link: '/blog',
        }, 
    ]; 

    
    return (
        <div>
            {links.map((link=>(
               <Link href={link.link} key={link.name}>{link.name}</Link>

            )))}
                </div>
    )

} 
export default Links