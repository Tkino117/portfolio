import { About } from "@/components/about";
import { Awards } from "@/components/awards";
import { HeroSection } from "@/components/hero-section";
import { Introduction } from "@/components/introduction";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
	return (
		<div className="space-y-16">
			<HeroSection />
			<Introduction />
			<About />
			<Skills />
			<Projects />
			<Awards />
		</div>
	);
}
