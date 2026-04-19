import { ProjectSection } from "@/components/project/project-section";
import type { Project } from "./types";

function Body() {
	return (
		<>
			<ProjectSection title="飲み忘れを、小さなロボットでそっと防ぐ">
				<p>
					高齢の方や通院中の方にとって、決まった時間に決まった量の薬を飲むのは、思っている以上に難しいことです。このプロジェクトでは、「薬を出すタイミングを自動で管理し、アラームで服薬をそっと知らせる」小さなロボットをチームで作りました。
				</p>
			</ProjectSection>

			<ProjectSection title="作ったもの">
				<p>
					毎日決まった時間に薬を1回分だけ排出し、音で服薬を促す装置です。遠隔から操作・確認もできるようにし、離れて暮らす家族や医療スタッフにとって使いやすい形を目指しました。
				</p>
			</ProjectSection>

			<ProjectSection title="担当領域">
				<p>
					ハードウェアとソフトウェアの両方を担当しました。ソフトウェア側ではフロントエンドとバックエンドの設計、ハードウェア側では
					Arduino
					を使ったサーボモーターと光感知センサーの制御を行いました。
				</p>
			</ProjectSection>

			<ProjectSection title="これまでの歩み">
				<ul className="list-disc space-y-1 pl-5">
					<li>メディアネットワーク演習 I 2024年度 優勝</li>
				</ul>
			</ProjectSection>
		</>
	);
}

export const smartMedicationRobot: Project = {
	slug: "smart-medication-robot",
	name: "Smart Pill Dispenser",
	tagline: "飲み忘れをそっと防ぐ、服薬ロボット",
	period: "2024.11 - 2025.01",
	roles: ["システム開発"],
	tags: ["Arduino", "Frontend", "Backend", "Sensor", "Servo Control"],
	thumbnailUrl: "/projects/smart-pill-dispenser/thumbnail.png",
	body: Body,
};
