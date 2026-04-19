import { ProjectSection } from "@/components/project/project-section";
import type { Project } from "./types";

function Body() {
	return (
		<>
			<ProjectSection title="Overview">
				<p>
					スケジュールを気軽に共有できる SNS をチームで開発しました。授業開発にとどまらず、実際に動くサービスとして成立させることを重視し、Web サービスとしてデプロイまで行いました。
				</p>
			</ProjectSection>

			<ProjectSection title="担当領域">
				<p>
					開発リーダーとして、チーム全体で円滑に連携が取れるよう、API 仕様を早い段階で決定し、開発フローを整理しながらプロジェクトを進行しました。実装ではバックエンド開発を担当しました。
				</p>
			</ProjectSection>

			<ProjectSection title="実績">
				<ul className="list-disc space-y-1 pl-5">
					<li>メディアネットワーク演習 II 2025年度 優勝</li>
				</ul>
			</ProjectSection>
		</>
	);
}

export const timeShare: Project = {
	slug: "time-share",
	name: "Time Share",
	tagline: "スケジュール共有 SNS",
	period: "2025.05 - 2025.07",
	roles: ["開発リーダー", "バックエンド開発"],
	tags: ["Node.js", "TypeScript", "Web API", "VPS"],
	thumbnailUrl: "/projects/tmp.png",
	body: Body,
};
