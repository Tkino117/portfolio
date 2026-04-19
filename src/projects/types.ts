import type { ComponentType } from "react";

export type ProjectLink = {
	label: string;
	url: string;
};

export type ProjectMeta = {
	slug: string;
	name: string;
	tagline?: string;
	period?: string;
	roles?: string[];
	tags?: string[];
	thumbnailUrl: string;
	coverUrl?: string;
	links?: ProjectLink[];
};

export type Project = ProjectMeta & {
	body: ComponentType;
};
