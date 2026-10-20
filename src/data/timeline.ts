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
        year: "2018",
        title: "Project pertama di Erajaya Group",
        text: "Vendor Portal dengan booking gudang, eReporting dan Report Generator, enhancement OS Ticket, sampai CSO untuk iBox.",
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
        text: "Maintain dan kembangkan AMS milik tim Internal Audit, serta user management untuk DEP bersama Apple.",
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
