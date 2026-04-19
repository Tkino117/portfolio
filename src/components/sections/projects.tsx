import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/container";
import { SectionTitle } from "@/components/section-title";

export const projects = [
	{ name: "YAMAMORI", slug: "yamamori" },
	{ name: "配信アシスタントAI", slug: "streaming-assistant-ai" },
	{ name: "Chat Tree", slug: "chat-tree" },
	{ name: "映像制作プラグイン", slug: "video-production-plugin" },
	{ name: "Time Share", slug: "time-share" },
	{ name: "スマート服薬管理ロボット", slug: "smart-medication-robot" },
];

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
									src="/projects/tmp.png"
									alt={project.name}
									fill
									className="object-cover"
								/>
							</div>
							<CardHeader>
								<CardTitle>{project.name}</CardTitle>
							</CardHeader>
						</Card>
					</Link>
				))}
			</div>
			</Container>
		</section>
	);
}
