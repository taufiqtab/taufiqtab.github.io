export type Milestone = {
    year: string;
    title: string;
    text: string;
    href?: string;
    highlight?: boolean;
};

// oldest first
export const timeline: Milestone[] = [
    {
        year: "2014",
        title: "Game jam pertama & asisten dosen",
        text: "Trash Rush lahir di Global Game Jam 2014, e-Voting Pemira dipakai untuk pemilihan ketua BEM. Mulai jadi asisten dosen Pemrograman Berorientasi Objek untuk semester 3.",
        href: "/project/trash-rush",
    },
    {
        year: "2015",
        title: "🏆 Finalis Gemastik 8, Yogyakarta",
        text: "Lewat Trashformers 3R, game Android bertema reduce, reuse, recycle.",
        href: "/project/trashformers-3r",
        highlight: true,
    },
    {
        year: "2016",
        title: "Asdos Game Development & eksplorasi AR",
        text: "Mengajar Game Development untuk semester 7, kelas pagi dan kelas karyawan. Di sela-selanya, membuat aplikasi AR edukasi dan wisata.",
        href: "/project/bangun-ruang-augmented-reality",
    },
    {
        year: "2016",
        title: "Magang di Falcon Pictures",
        text: "Masuk divisi Game Development dan membuat game dari film Warkop DKI Reborn.",
        href: "/project/warkop-dki-reborn",
    },
    {
        year: "2017",
        title: "Lulus cumlaude, langsung ke studio game",
        text: "Sambil menunggu wisuda 2018, bekerja di Binary Works Indonesia hingga Maret 2018: seri Juragan, Legend War, Bido, SecondWorld, dan Gunners.IO.",
        href: "/project/gunners-io",
        highlight: true,
    },
    {
        year: "2018",
        title: "Freelance, startup, lalu Erajaya Group",
        text: "Setelah beberapa project freelance dan bergabung dengan startup, berlabuh di Erajaya Group: Vendor Portal, eReporting, OS Ticket, dan CSO untuk iBox.",
        href: "/project/vendor-portal",
    },
    {
        year: "2019",
        title: "Dari faktur sampai panggung undian",
        text: "EMA untuk cleansing IMEI ke Kemenperin, Digital Receipt dari POS, dan minigame undian Eraversary & Samsung Karnaval.",
        href: "/project/erajaya-modular-application",
    },
    {
        year: "2021",
        title: "Masuk ke dunia audit",
        text: "Mengembangkan AMS untuk tim Internal Audit dan user management untuk DEP bersama Apple.",
        href: "/project/audit-management-system",
    },
    {
        year: "2022",
        title: "🏆 Juara 3 Erajaya Achievement Award",
        text: "ERCAS, aplikasi risk analysis dengan heatmap risiko untuk tim Audit.",
        href: "/project/ercas",
        highlight: true,
    },
    {
        year: "2023",
        title: "RIFOS untuk JD Sports Indonesia",
        text: "Cek stok & harga realtime di toko: Laravel, WebSocket, importer Rust dari SAP, autoscale di AWS.",
        href: "/project/rifos",
    },
    {
        year: "2025",
        title: "DevOps TaskForce → lahir divisi DevOps",
        text: "CI/CD Jenkins, Nexus, Docker, gitflow & trunk based. Di tahun yang sama: ePOD Mobile native Kotlin.",
        href: "/project/devops-taskforce",
        highlight: true,
    },
    {
        year: "2026",
        title: "Platform terpusat & SRE",
        text: "UMS, Workflow Management, Nexus, dan gateway PPS dengan Golang, plus pilot SRE dengan OpenTelemetry.",
        href: "/project/user-management-services",
    },
];
