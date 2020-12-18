// 按需引入
import {
  Image,
  Menu,
  MenuItem,
  Link,
  Input,
  Button,
  Avatar,
  Card,
  Tag,
  Popover,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem
} from 'element-ui';

const element = {
  install(Vue) {
    Vue.use(Image),
    Vue.use(Menu),
    Vue.use(MenuItem),
    Vue.use(Link),
    Vue.use(Input),
    Vue.use(Button),
    Vue.use(Avatar),
    Vue.use(Card),
    Vue.use(Tag),
    Vue.use(Popover),
    Vue.use(Dropdown),
    Vue.use(DropdownItem),
    Vue.use(DropdownMenu),
    Vue.use(Form),
    Vue.use(FormItem)
  }
}

export default element