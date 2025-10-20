import Image from "next/image"

export function Header() {
    return (
        <header className="bg-casa-secondary py-4 px-4">
            <div className="max-w-6xl mx-auto flex justify-center items-center">
                <Image
                    src="/images/headerCasaDiana.png"
                    alt="Casa di Ana - Logo"
                    width={200}
                    height={80}
                    className="object-contain"
                    priority
                />
            </div>
        </header>
    )
}
