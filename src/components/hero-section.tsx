import Image from "next/image";

export function HeroSection() {
	return (
		<section className="flex h-dvh items-center justify-center gap-8">
			<Image
				src="/main/avatar.png"
				alt="Takuya Kinoshita"
				width={128}
				height={128}
				className="rounded-full"
				priority
			/>
			<div className="flex flex-col gap-2">
				<h1 className="text-4xl font-bold">Takuya Kinoshita</h1>
				<p className="text-base text-muted-foreground">
					AI / 3D Research Engineer
				</p>
			</div>
		</section>
	);
}
