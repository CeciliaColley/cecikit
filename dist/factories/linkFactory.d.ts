import { Page } from "@playwright/test";
import { Link, LinkBlueprint } from "../types";
export declare function linkFactory(page: Page, linksPreview: Record<string, LinkBlueprint>): Record<string, Link>;
