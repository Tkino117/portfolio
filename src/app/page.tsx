import { About } from "@/components/about";
import { HeroSection } from "@/components/hero-section";
import { Introduction } from "@/components/introduction";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<Introduction />
			<About />
		</div>
	);
}
