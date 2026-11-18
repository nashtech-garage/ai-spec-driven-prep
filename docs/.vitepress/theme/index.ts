import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import { onMounted } from "vue";
import { setupMermaidZoom } from "./mermaid-zoom";
import "./mermaid-zoom.css";

export default {
  extends: DefaultTheme,
  setup() {
    onMounted(setupMermaidZoom);
  },
} satisfies Theme;
