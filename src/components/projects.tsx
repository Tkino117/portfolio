import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
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
			<SectionTitle>Projects</SectionTitle>
			<div className="grid grid-cols-3 gap-4">
				{projects.map((project) => (
					<Link key={project.slug} href={`/projects/${project.slug}`}>
						<Card className="transition-colors hover:bg-muted/50">
							<CardHeader>
								<CardTitle>{project.name}</CardTitle>
							</CardHeader>
						</Card>
					</Link>
				))}
			</div>
		</section>
	);
}
