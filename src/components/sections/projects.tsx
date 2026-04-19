import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { projects } from "@/projects";

export function Projects() {
	return (
		<section>
			<Container>
				<SectionTitle>Projects</SectionTitle>
				<div className="grid grid-cols-3 gap-4">
					{projects.map((project) => (
						<Link key={project.slug} href={`/projects/${project.slug}`}>
							<Card className="transition-colors hover:bg-muted/50">
								<div className="relative aspect-video">
									<Image
										src={project.thumbnailUrl}
										alt={project.name}
										fill
										className="object-cover"
									/>
								</div>
								<CardHeader>
									<CardTitle>{project.name}</CardTitle>
									{project.tagline && (
										<CardDescription>{project.tagline}</CardDescription>
									)}
								</CardHeader>
							</Card>
						</Link>
					))}
				</div>
			</Container>
		</section>
	);
}
