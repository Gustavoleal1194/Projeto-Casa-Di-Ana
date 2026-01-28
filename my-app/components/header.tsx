import Image from "next/image"

export function Header() {
    return (
        <header className="py-3 sm:py-4 px-4 relative z-50 shadow-lg" style={{ backgroundColor: '#3A5868' }}>
            <div className="max-w-6xl mx-auto flex justify-center items-center">
                <Image
                    src="/images/header1003.jpeg"
                    alt="Casa di Ana - Logo"
                    width={200}
                    height={80}
                    className="object-contain w-32 sm:w-40 md:w-48 lg:w-[200px] h-auto"
                    priority
                />
            </div>
        </header>
    )
}
