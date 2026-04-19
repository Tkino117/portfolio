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

export const yamamori: Project = {
	slug: "yamamori",
	name: "YAMAMORI",
	tagline: "森林 × IT の研究プロジェクト",
	period: "2023.10 - 現在",
	roles: ["Research Lead"],
	tags: ["3D Gaussian Splatting", "ドローン", "林業"],
	thumbnailUrl: "/projects/tmp.png",
	links: [],
	body: Body,
};
