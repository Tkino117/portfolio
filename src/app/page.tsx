import { About } from "@/components/sections/about";
import { Awards } from "@/components/sections/awards";
import { Contact } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero-section";
import { Introduction } from "@/components/sections/introduction";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
	return (
		<div className="space-y-32">
			<HeroSection />
			<Introduction />
			<About />
			<Skills />
			<Projects />
			<Awards />
			<Contact />
		</div>
	);
}
