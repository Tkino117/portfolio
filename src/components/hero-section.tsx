import Image from "next/image";

export function HeroSection() {
	return (
		<section className="flex h-dvh flex-col items-center justify-center gap-6">
			<Image
				src="/main/avatar.png"
				alt="Takuya Kinoshita"
				width={128}
				height={128}
				className="rounded-full"
				priority
			/>
			<h1 className="text-4xl font-bold">Takuya Kinoshita</h1>
		</section>
	);
}
