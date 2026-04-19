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

export const chatTree: Project = {
	slug: "chat-tree",
	name: "Chat Tree",
	thumbnailUrl: "/projects/tmp.png",
	body: Body,
};
