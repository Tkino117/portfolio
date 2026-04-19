import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";

export function Contact() {
	return (
		<section className="pb-16">
			<Container>
				<SectionTitle>Contact</SectionTitle>
				<p className="mb-6 text-center text-base leading-relaxed">
					インターンシップ、共同研究、プロジェクトの相談など、
					<br />
					お気軽にご連絡ください。
				</p>
				<div className="flex justify-center">
					<Button asChild>
						<a
							href="https://github.com/Tkino117"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
					</Button>
				</div>
			</Container>
		</section>
	);
}
