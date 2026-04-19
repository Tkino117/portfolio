import { ProjectSection } from "@/components/project/project-section";
import type { Project } from "./types";

function Body() {
	return (
		<>
			<ProjectSection title="Overview">
				<p>
					ツリー形式で AI と対話できる Web アプリケーションを個人開発しました。従来のチャット UI は会話が長くなると見返しづらいという課題に着目し、会話の分岐や再探索をしやすい UI を設計しました。
				</p>
			</ProjectSection>

			<ProjectSection title="開発内容">
				<ul className="list-disc space-y-1 pl-5">
					<li>OpenAI API と連携するバックエンドサーバーの実装</li>
					<li>Next.js によるフロントエンド、UI デザイン設計</li>
				</ul>
			</ProjectSection>

			<ProjectSection title="実績">
				<ul className="list-disc space-y-1 pl-5">
					<li>個人利用に加え、YAMAMORI チームでも業務効率化のために利用</li>
				</ul>
			</ProjectSection>
		</>
	);
}

export const chatTree: Project = {
	slug: "chat-tree",
	name: "Chat Tree",
	tagline: "ツリー型の AI チャットアプリ",
	period: "2026.01 - 2026.03",
	roles: ["個人開発"],
	tags: ["Next.js", "OpenAI API", "TypeScript", "UI Design"],
	thumbnailUrl: "/projects/tmp.png",
	body: Body,
};
