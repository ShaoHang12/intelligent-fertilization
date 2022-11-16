import { Button, Layout, Container, Message, Form } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
let plugins = [Button, Layout, Container, Message, Form];
export default function getElement(app) {
  plugins.forEach((item) => {
    return app.use(item);
  });
}
