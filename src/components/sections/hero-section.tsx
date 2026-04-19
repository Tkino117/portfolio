import Image from "next/image";
import { Container } from "@/components/container";

export function HeroSection() {
	return (
		<section className="bg-gray-500">
			<Container className="flex h-dvh items-center justify-center gap-8">
				<Image
					src="/general/avatar.png"
					alt="Takuya Kinoshita"
					width={128}
					height={128}
					className="rounded-full"
					priority
				/>
				<div className="flex flex-col gap-2">
					<h1 className="text-4xl font-bold">Takuya Kinoshita</h1>
					<p className="text-base text-gray-300">
						AI / 3D Research Engineer
					</p>
				</div>
			</Container>
		</section>
	);
}
