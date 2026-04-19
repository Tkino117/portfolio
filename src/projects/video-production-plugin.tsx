import { ProjectSection } from "@/components/project/project-section";
import type { Project } from "./types";

function Body() {
	return (
		<>
			<ProjectSection title="Overview">
				<p>(ここに概要を記述)</p>
			</ProjectSection>
		</>
	);
}

export const videoProductionPlugin: Project = {
	slug: "video-production-plugin",
	name: "映像制作プラグイン",
	thumbnailUrl: "/projects/tmp.png",
	body: Body,
};
