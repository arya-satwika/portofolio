export function CV({ className }: { className?: string }) {
    return(
        <div className={className}>
        <div className="text-center pb-4">
        </div>
        <h2 className="font-bold text-lg text-main-red mt-5">Pendidikan</h2>
        <hr/>
        <ul className="list-disc pl-5">
            <li>
                <div className="flex flex-row justify-between">
                    S1 Teknik Informatika Universitas Negeri Surabaya
                    <span className="font-bold text-right">2024-Sekarang</span>
                </div>
            </li>
            <li>
                <div className="flex flex-row justify-between">
                    SMAN 15 Surabaya
                    <span className="font-bold text-right">2021-2024</span>
                </div>
            </li>
        </ul>

        <h2 className="font-bold text-lg text-main-red mt-5">Pengalaman Kerja</h2>
        <hr/>
        <ul className="list-disc pl-5">
            <li>
                <div className="flex flex-row justify-between">
                    Asisten Praktikum Pemrograman Dasar untuk angkatan 2025
                    <span className="font-bold text-right">2025</span>
                </div>
            </li>
            <li>
                <div className="flex flex-row justify-between">
                    Asisten Praktikum Struktur Data untuk angkatan 2025
                    <span className="font-bold text-right">2025</span>
                </div>
            </li>
        </ul>
        
        <h2 className="font-bold text-lg text-main-red mt-5">Workshop & Course</h2>
        <hr/>
        <ul className="list-disc pl-5">
            <li>
                <div className="flex flex-row justify-between">
                    X-Project Tech Genius: Bootcamp Full Stack Web Development
                    <span className="font-bold text-right">2024</span>
                </div>
            </li>
            <li>
                <div className="flex flex-row justify-between">
                    GDGOC: Building Smarter Website using AI powered solutions 
                    <span className="font-bold text-right">2024</span>
                </div>
            </li>
        </ul>
        
        <h2 className="font-bold text-lg text-main-red mt-5">Tambahan</h2>
        <hr/>
        <div className="flex flex-row justify-between gap-4">
            <h3>Language Skills</h3>
            <p>Bahasa Indonesia (Native), English (Fluent)</p>
        </div>
        </div>
    )
}