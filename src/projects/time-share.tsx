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

export const timeShare: Project = {
	slug: "time-share",
	name: "Time Share",
	tagline: "スケジュール共有 SNS",
	thumbnailUrl: "/projects/tmp.png",
	body: Body,
};
