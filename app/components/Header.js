
import Link from "next/link"
const Header = () => {
  return (
    <nav className="bg-gray-800 m-0 text-white nav z-50 relative">
        <ul className="flex justify-around max-w-[30%] text-decoration-none mx-auto font-bold" dir="rtl">
            <li className="p-5"><Link href="/" className="z-10 relative">خانه</Link></li>
            <li className="p-5"><Link href="/about" className="z-10 relative">درباره اپ</Link></li>
            <li className="p-5"><Link href="/poem" className="z-10 relative">فال حافظ</Link></li>
            <li className="p-5"><Link href="/search" className="z-10 relative">جست و جو</Link></li>
        </ul>
    </nav>
  )
}

export default Header