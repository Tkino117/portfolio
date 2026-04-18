import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";
import { Introduction } from "@/components/introduction";
import { SectionTitle } from "@/components/section-title";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<Introduction />
			<SectionTitle>About</SectionTitle>
			<Card>
				<CardHeader>
					<CardTitle>Hello World</CardTitle>
				</CardHeader>
				<CardContent>
					<p>Hello World</p>
				</CardContent>
				<CardFooter>
					<p>Hello World</p>
				</CardFooter>
			</Card>
		</div>
	);
}
