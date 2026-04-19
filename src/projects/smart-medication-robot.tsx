import { ProjectSection } from "@/components/project/project-section";
import type { Project } from "./types";

function Body() {
	return (
		<>
			<ProjectSection title="Overview">
				<p>
					遠隔制御可能な薬の自動排出ロボットをチームで開発しました。高齢者や病院での利用を想定し、毎日一定時間に薬を提供するとともに、アラームで服薬を通知するシステムです。
				</p>
			</ProjectSection>

			<ProjectSection title="担当領域">
				<p>
					ソフトウェア部分としてフロントエンド・バックエンドサーバーの設計、ハードウェア部分として Arduino によるサーボモーター・光感知センサーの制御を担当しました。
				</p>
			</ProjectSection>

			<ProjectSection title="実績">
				<ul className="list-disc space-y-1 pl-5">
					<li>メディアネットワーク演習 I 2024年度 優勝</li>
				</ul>
			</ProjectSection>
		</>
	);
}

export const smartMedicationRobot: Project = {
	slug: "smart-medication-robot",
	name: "スマート服薬管理ロボット",
	tagline: "遠隔制御可能な薬の自動排出ロボット",
	period: "2024.11 - 2025.01",
	roles: ["システム開発"],
	tags: ["Arduino", "Frontend", "Backend", "Sensor", "Servo Control"],
	thumbnailUrl: "/projects/tmp.png",
	body: Body,
};
