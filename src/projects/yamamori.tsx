import { ProjectSection } from "@/components/project/project-section";
import type { Project } from "./types";

function Body() {
	return (
		<>
			<ProjectSection title="森と向き合うプロジェクト">
				<p>
					YAMAMORI
					は、「森林 × IT」をテーマに進めている研究・開発プロジェクトです。ドローンが森の中を自動で飛び、そこから作った
					3D のデジタルツインを、現場で XR
					や Web アプリを通して扱えるようにする——そんな世界を目指しています。
				</p>
				<p>
					出発点になったのは、森林・林業に関わる方々へのヒアリングでした。現場の声を聴いて初めて、日本の森が抱える課題の深さが見えてきました。
				</p>
			</ProjectSection>

			<ProjectSection title="なぜこのプロジェクトをやるのか">
				<p>
					日本の林業は、担い手不足・高い労災率・低い収益性といった課題に直面しています。その結果として、雪崩の危険がある斜面での作業や、持続可能性を損なう皆伐(木をすべて伐ってしまう施業)といった選択が、やむを得ず行われてきました。
				</p>
				<p>
					「もし技術があれば、もっと違う選択肢を現場に届けられるのではないか」——それが
					YAMAMORI の原点です。
				</p>
			</ProjectSection>

			<ProjectSection title="いま取り組んでいること">
				<p>
					森のデータを集め、デジタルツインとして扱い、現場へ還すまでを一気通貫で設計しています。プロトタイプまで進んでいる取り組みは次の4つです。
				</p>
				<ul className="list-disc space-y-1 pl-5">
					<li>ドローンによる森内部の自動航行撮影</li>
					<li>360度映像からの高精細な 3D モデル構築 (3D Gaussian Splatting)</li>
					<li>樹木1本1本を個体として識別・解析する仕組み</li>
					<li>XR / Web アプリによる選木・施業支援</li>
				</ul>
			</ProjectSection>

			<ProjectSection title="工夫したところ">
				<p>
					森の 3D
					解析で厄介なのが、木々を1本ずつに分ける「個体分離」です。広葉樹は枝が絡み合い、幾何的な特徴だけで分けるのは困難でした。
				</p>
				<p>
					そこで発想を変え、先に 2D 画像で幹を見つけてから 3D
					に持ち上げる方法を試しました。2D
					画像認識は成熟した分野で精度が高い。2D で幹部分をマスクし、その領域を人工色で塗った画像から 3D モデルを再構成すると、3D
					空間上で幹が明確に浮かび上がり、個体分離につなげられます。違う分野の強みを組み合わせて解く——このプロジェクトで繰り返し感じている面白さです。
				</p>
			</ProjectSection>

			<ProjectSection title="担当領域">
				<p>
					技術統括と開発メンバーを兼ね、現場での撮影・測量から
					3D モデリング、AI モデル開発、Web
					アプリ実装まで幅広く担当しています。北海道から九州まで、各地の森に足を運びながら進めています。
				</p>
			</ProjectSection>

			<ProjectSection title="これまでの歩み">
				<ul className="list-disc space-y-1 pl-5">
					<li>しのはら財団研究助成 2024年度 / 2025年度 採択</li>
					<li>北海道 Society 5.0 みらい創造ワークショップ 2025 優勝</li>
					<li>YAMAHA 発動機・前田一歩園財団・OutWoods などと連携</li>
					<li>北海道大学研究林、東京大学演習林、九州大学演習林で実証実験</li>
				</ul>
			</ProjectSection>
		</>
	);
}

export const yamamori: Project = {
	slug: "yamamori",
	name: "YAMAMORI",
	tagline: "森を 3D で扱い、林業の現場を支援する",
	period: "2025.02 - 現在",
	roles: ["研究リーダー", "技術開発・プロトタイプ制作"],
	tags: ["3DGS", "Computer Vision", "XR", "GIS", "Forestry"],
	thumbnailUrl: "/projects/tmp.png",
	body: Body,
};
