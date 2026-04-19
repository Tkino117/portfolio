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

export const smartMedicationRobot: Project = {
	slug: "smart-medication-robot",
	name: "スマート服薬管理ロボット",
	thumbnailUrl: "/projects/tmp.png",
	body: Body,
};
