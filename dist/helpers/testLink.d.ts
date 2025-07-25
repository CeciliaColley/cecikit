import { BrowserContext, Page } from "@playwright/test";
import { Link } from "../types";
export declare function testLink(link: Link, page: Page, context: BrowserContext): Promise<void>;
