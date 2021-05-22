import React from "react";
import CSSJSON from "cssjson";


// import "../css/test/old-theme.css";
import "../css/theme/onsen-css-components.css";
import "../css/theme/onsenui.css";
import "../css/react-input-range.css";
import "../css/mycss.css";
import "../css/react-table.css";

export default class StyleLoader extends React.Component {

    getDefaultTheme = () => {
        let theme = {
            "children": {
                ":root": {
                    "children": {},
                    "attributes": {
                        "/* variables for iOS components */\n  --background-color": "#222222",
                        "--text-color": "#fff",
                        "--sub-text-color": "#999",
                        "--highlight-color": "#00828b",
                        "--second-highlight-color": "#da5926",
                        "--border-color": "#242424",
                        "--button-background-color": "var(--highlight-color)",
                        "--button-cta-background-color": "var(--second-highlight-color)",
                        "--button-light-color": "white",
                        "--toolbar-background-color": "#181818",
                        "--toolbar-button-color": "var(--highlight-color)",
                        "--toolbar-text-color": "#fff",
                        "--toolbar-border-color": "#242424",
                        "--button-bar-color": "var(--highlight-color)",
                        "--button-bar-active-text-color": "#fff",
                        "--button-bar-active-background-color": "rgb(51, 32, 1)",
                        "--segment-color": "var(--highlight-color)",
                        "--segment-active-text-color": "#fff",
                        "--segment-active-background-color": "rgb(51, 32, 1)",
                        "--list-background-color": "rgb(54, 54, 54)",
                        "--list-header-background-color": "#111",
                        "--list-tap-active-background-color": "#262626",
                        "--list-item-chevron-color": "#383833",
                        "--progress-bar-color": "var(--highlight-color)",
                        "--progress-bar-secondary-color": "rgb(115, 73, 1)",
                        "--progress-bar-background-color": "transparent",
                        "--progress-circle-primary-color": "var(--progress-bar-color)",
                        "--progress-circle-secondary-color": "rgb(115, 73, 1)",
                        "--progress-circle-background-color": "transparent",
                        "--tabbar-background-color": "#212121",
                        "--tabbar-text-color": "#aaa",
                        "--tabbar-highlight-text-color": "var(--highlight-color)",
                        "--tabbar-border-color": "#0d0d0d",
                        "--switch-highlight-color": "#44db5e",
                        "--switch-border-color": "#666",
                        "--switch-background-color": "var(--background-color)",
                        "--range-track-background-color": "#6b6f74",
                        "--range-track-background-color-active": "#bbb",
                        "--range-thumb-background-color": "#fff",
                        "--modal-background-color": "rgba(0, 0, 0, 0.7)",
                        "--modal-text-color": "#fff",
                        "--alert-dialog-background-color": "#f4f4f4",
                        "--alert-dialog-text-color": "#1f1f21",
                        "--alert-dialog-button-color": "var(--highlight-color)",
                        "--alert-dialog-separator-color": "#ddd",
                        "--dialog-background-color": "#0d0d0d",
                        "--dialog-text-color": "#1f1f21",
                        "--popover-background-color": "#242424",
                        "--popover-text-color": "var(--text-color)",
                        "--action-sheet-title-color": "#8f8e94",
                        "--action-sheet-button-separator-color": "rgba(0, 0, 0, 0.1)",
                        "--action-sheet-button-color": "var(--highlight-color)",
                        "--action-sheet-button-destructive-color": "#fe3824",
                        "--action-sheet-button-background-color": "rgba(255, 255, 255, 0.9)",
                        "--action-sheet-button-active-background-color": "#e9e9e9",
                        "--action-sheet-cancel-button-background-color": "#fff",
                        "--notification-background-color": "#fe3824",
                        "--notification-color": "white",
                        "--search-input-background-color": "rgba(255, 255, 255, 0.09)",
                        "--fab-text-color": "#ffffff",
                        "--fab-background-color": "var(--highlight-color)",
                        "--fab-active-background-color": "rgba(255, 161, 1, 0.7)",
                        "--card-background-color": "var(--border-color)",
                        "--card-text-color": "var(--text-color)",
                        "--toast-background-color": "#ccc",
                        "--toast-text-color": "#000",
                        "--toast-button-text-color": "#000",
                        "--select-input-color": "var(--text-color)",
                        "--select-input-border-color": "var(--border-color)",
                        "/* variables for Material Design components */\n  --material-background-color": "#303030",
                        "--material-text-color": "#ffffff",
                        "--material-notification-background-color": "#f50057",
                        "--material-notification-color": "white",
                        "--material-switch-active-thumb-color": "#00828b",
                        "--material-switch-active-background-color": "rgba(0, 130, 139, 0.5)",
                        "--material-switch-inactive-thumb-color": "#bdbdbd",
                        "--material-switch-inactive-background-color": "rgba(255, 255, 255, 0.3)",
                        "--material-range-track-color": "#525252",
                        "--material-range-thumb-color": "#cecec5",
                        "--material-range-disabled-thumb-color": "#4f4f4f",
                        "--material-range-disabled-thumb-border-color": "#303030",
                        "--material-range-zero-thumb-color": "#0d0d0d",
                        "--material-toolbar-background-color": "#212121",
                        "--material-toolbar-text-color": "#ffffff",
                        "--material-toolbar-button-color": "var(--toolbar-button-color)",
                        "--material-segment-background-color": "#292929",
                        "--material-segment-active-background-color": "#404040",
                        "--material-segment-text-color": "rgba(255, 255, 255, 0.62)",
                        "--material-segment-active-text-color": "#cacaca",
                        "--material-button-background-color": "#d68600",
                        "--material-button-text-color": "#ffffff",
                        "--material-button-disabled-background-color": "rgba(176, 176, 176, 0.74)",
                        "--material-button-disabled-color": "rgba(255, 255, 255, 0.74)",
                        "--material-flat-button-active-background-color": "rgba(102, 102, 102, 0.2)",
                        "--material-list-background-color": "hsl(0, 0%, 20.8235294118%)",
                        "--material-list-item-separator-color": "rgba(255, 255, 255, 0.12)",
                        "--material-list-header-text-color": "#8a8a8a",
                        "--material-checkbox-active-color": "#fff",
                        "--material-checkbox-inactive-color": "#717171",
                        "--material-checkbox-checkmark-color": "#000",
                        "--material-radio-button-active-color": "#00828b",
                        "--material-radio-button-inactive-color": "#8e8e8e",
                        "--material-radio-button-disabled-color": "#505050",
                        "--material-text-input-text-color": "rgba(255, 255, 255, 0.75)",
                        "--material-text-input-active-color": "rgba(255, 255, 255, 0.75)",
                        "--material-text-input-inactive-color": "rgba(255, 255, 255, 0.3)",
                        "--material-search-background-color": "#424242",
                        "--material-dialog-background-color": "#424242",
                        "--material-dialog-text-color": "var(--material-text-color)",
                        "--material-alert-dialog-background-color": "#424242",
                        "--material-alert-dialog-title-color": "white",
                        "--material-alert-dialog-content-color": "rgba(255, 255, 255, 0.85)",
                        "--material-alert-dialog-button-color": "#d68600",
                        "--material-progress-bar-primary-color": "#d68600",
                        "--material-progress-bar-secondary-color": "rgb(115, 72, 0)",
                        "--material-progress-bar-background-color": "transparent",
                        "--material-progress-circle-primary-color": "var(--material-progress-bar-primary-color)",
                        "--material-progress-circle-secondary-color": "var(--material-progress-bar-secondary-color)",
                        "--material-progress-circle-background-color": "transparent",
                        "--material-tabbar-background-color": "var(--material-toolbar-background-color)",
                        "--material-tabbar-text-color": "rgba(255, 255, 255, 0.5)",
                        "--material-tabbar-highlight-text-color": "var(--material-toolbar-text-color)",
                        "--material-tabbar-highlight-color": "hsl(0, 0%, 15.9411764706%)",
                        "--material-fab-text-color": "#31313a",
                        "--material-fab-background-color": "#ffffff",
                        "--material-fab-active-background-color": "rgba(255, 255, 255, 0.75)",
                        "--material-card-background-color": "#424242",
                        "--material-card-text-color": "rgba(255, 255, 255, 0.46)",
                        "--material-toast-background-color": "#ccc",
                        "--material-toast-text-color": "#000",
                        "--material-toast-button-text-color": "#583905",
                        "--material-select-input-color": "var(--material-text-color)",
                        "--material-select-input-active-color": "rgba(255, 255, 255, 0.85)",
                        "--material-select-input-inactive-color": "rgba(255, 255, 255, 0.19)",
                        "--material-select-border-color": "rgba(255, 255, 255, 0.88)",
                        "--material-popover-background-color": "var(--material-alert-dialog-background-color)",
                        "--material-popover-text-color": "var(--material-text-color)",
                        "--material-action-sheet-text-color": "#686868",
                        "/* others */\n  --tap-highlight-color": "transparent"
                    }
                }
            },
            "attributes": {}
        };
        return theme;
    }

    render() {

        let style = "";
        try {
            style = CSSJSON.toCSS(this.props.theme);
        }
        catch(e) {
            style = CSSJSON.toCSS(this.getDefaultTheme());
        }

        return (
            <style>
                {style}
            </style>
        )
    }

}