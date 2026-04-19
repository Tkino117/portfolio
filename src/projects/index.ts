import { chatTree } from "./chat-tree";
import { smartMedicationRobot } from "./smart-medication-robot";
import { streamingAssistantAi } from "./streaming-assistant-ai";
import { timeShare } from "./time-share";
import { videoProductionPlugin } from "./video-production-plugin";
import { yamamori } from "./yamamori";
import type { Project } from "./types";

export const projects: Project[] = [
	yamamori,
	streamingAssistantAi,
	chatTree,
	videoProductionPlugin,
	timeShare,
	smartMedicationRobot,
];

export type { Project, ProjectMeta, ProjectLink } from "./types";
