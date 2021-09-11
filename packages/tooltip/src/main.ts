import "reflect-metadata";
import { bindTooltipApi } from "./api";
import "./styles/tooltip.scss";

document.addEventListener("DOMContentLoaded", () => bindTooltipApi());

export { getTooltipApi, TooltipInstance } from "./api";
