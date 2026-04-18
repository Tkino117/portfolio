import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";
import { SectionTitle } from "@/components/section-title";

export default function Home() {
	return (
		<div>
			<HeroSection />
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
