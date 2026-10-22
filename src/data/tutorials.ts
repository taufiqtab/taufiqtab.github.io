import type { ImageMetadata } from "astro";
import hermesCover from "../assets/images/tutorial/hermes/hermescover.jpg";
import animCover from "../assets/images/tutorial/animasi/animcover.jpg";
import gameCover from "../assets/images/tutorial/game/gamecover.jpg";

export type Tutorial = {
    href: string;
    title: string;
    description: string;
    cover: ImageMetadata;
    tag: string;
};

// newest first
export const tutorials: Tutorial[] = [
    {
        href: "/tutorial/bikin-game-edukasi",
        title: "Bikin Game Edukasi Sendiri, Bareng AI",
        description: "Game Cabut Gigi satu file HTML: brief produk, visual, state machine, mobile-first, deploy ke domain, sampai playtest otomatis, semuanya lewat chat ke Hermes.",
        cover: gameCover,
        tag: "Game Edukasi · Lanjutan Hermes",
    },
    {
        href: "/tutorial/setup-hermes",
        title: "Setup Kantor AI pakai Hermes, dari Nol",
        description: "VPS Rp60rb, install Hermes Agent, sambungin ke DeepSeek & Telegram, rekrut tim agent, sampai dashboard di domain sendiri.",
        cover: hermesCover,
        tag: "AI Agent · Halopik #03",
    },
    {
        href: "/tutorial/bikin-animasi-halopik",
        title: "Cara Bikin Animasi ala Halopik pakai AI",
        description: "Dari terminal, AI coding agent, prompting, storyboard, karakter, voice over TTS, sampai render video 9:16 pakai Remotion.",
        cover: animCover,
        tag: "Animasi · Behind the scene",
    },
];
