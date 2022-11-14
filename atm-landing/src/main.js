import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPuzzlePiece,
  faBookOpen,
  faCircleCheck,
  faBolt,
  faPeopleGroup,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/tailwind.css";

library.add(
  faPuzzlePiece,
  faBookOpen,
  faCircleCheck,
  faBolt,
  faPeopleGroup,
  faGears
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(ElementPlus);
app.mount("#app");
