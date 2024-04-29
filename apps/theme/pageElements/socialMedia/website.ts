import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import { SocialMedia } from "./socialMedia";

const plugin = {
    name:"pb-render-page-element-sociaMedia",
    type:"pb-render-page-element",
    elementType:"sociaMedia",
    render:SocialMedia
} as PbRenderElementPlugin;

export default plugin;