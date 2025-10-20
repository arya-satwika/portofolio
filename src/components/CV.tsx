export function CV({ className }: { className?: string }) {
    return(
        <div className={className}>
        <div className="text-center pb-4">
            {/* <h1 className="text-3xl font-bold text-main-red pb-2">Arya Satwika</h1>
            <p className="font-normal text-sm">+62 812-2115-225 
                 | 24051204069@mhs.unesa.ac.id
            </p> */}
        </div>
        <h2>Pendidikan</h2>
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

        <h2>Pengalaman Kerja</h2>
        <ul className="list-disc pl-5">
            <li>
                <div className="flex flex-row justify-between">
                    Asisten praktikum Pemrograman Dasar untuk angkatan 2025
                    <span className="font-bold text-right">2025-Sekarang</span>
                </div>
            </li>
        </ul>
        
        <h2>Workshop & Course</h2>
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
        
        <h2>Pengalaman Organisasi</h2>
        <hr/>
        <ul className="list-disc pl-5">
            <li>
                <div className="flex flex-row justify-between">
                    Video Editor HIMA Manajemen UNAIR
                    <span className="font-bold text-right">2024</span>
                </div>
            </li>
        </ul>
        
        <h2>Tambahan</h2>
        <hr/>
        <div className="grid grid-cols-2 gap-4">

            <h3>Keahlian</h3>
            <p>Pekerja keras, sangat bertanggung jawab, cepat belajar</p>

            <h3>Language Skills</h3>
            <p>Bahasa Indonesia (Native), English (Fluent)</p>
            
            <h3>Tools</h3>
            <p>Svelte, TypeScript, Tailwind, C++, Python, Adobe Premiere Pro, Adobe After Effects, Davinci Resolve</p>
        </div>
        </div>
    )
}