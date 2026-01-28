import Image from "next/image"

export function Header() {
    return (
        <header
            className="relative z-50 shadow-lg h-24 sm:h-28 md:h-32"
            style={{
                backgroundColor: "#364B5B",
                backgroundImage:
                    "repeating-linear-gradient(90deg, #364B5B 0 16px, #ffffff 16px 32px)",
            }}
        >
            <div className="max-w-6xl mx-auto flex h-full items-center justify-center">
                <Image
                    src="/images/fundobranco.png"
                    alt="Casa di Ana - Logo"
                    width={200}
                    height={80}
                    className="h-full w-auto object-contain"
                    priority
                />
            </div>
        </header>
    )
}
