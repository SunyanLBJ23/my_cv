import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "个人介绍",
  },
  {
    id: "work",
    title: "工作经历",
  },
  {
    id: "contact",
    title: "联系方式",
  },
];

const services = [
  {
    title: "React 开发者",
    icon: backend,
  },
  {
    title: "React Native 开发者",
    icon: mobile,
  },
  {
    title: "Three.js 开发者",
    icon: creator,
  },
  {
    title: "A Coder",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "前端开发",
    company_name: "阿里云创新中心某公司",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2019年2月 - 5月",
    points: [
      "负责公司WinForm桌面燃气系统日常开发和维护",
      "日常平台前端Bug修复和功能开发",
      "平台高德地图新功能开发及日常维护",
    ],
  },

  {
    title: "前端开发",
    company_name: "天津市某智慧能源",
    icon: shopify,
    iconBg: "#383E56",
    date: "2021年 3月 - 2022年4月",
    points: [
      "负责公司物联网管理平台Bug修复及日常功能开发",
      "公司手机端建筑施工管理App的功能研发及Bug修复",
      "全平台暖通系统和电力系统组态图日常开发及维护",
    ],
  },
  {
    title: "前端开发",
    company_name: "天津市某科技有限公司",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2022年5月 - 至今",
    points: [
      "担任three.js开发主程",
      "公司数字孪生平台项目功能开发",
      "数字孪生平台项目日常Bug修复",
      "数字孪生平台需求讨论及整理",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "智控App开发",
    description:
      `
      此App是一个建筑水暖行业的管理软件,
      功能有登录注册、在线派单及接单、分角色分权限操作、
      GPS定位到场/离场打卡、现场图片拍摄、
      领料、出库入库等功能。
      `,
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Android",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "河工大智能激光器模拟实验平台",
    description:
      `此平台使用React+Three.js技术搭建了项目，加载激光器主体等模型到web端，
      利用模型相减技术实现激光精确打孔，同时利用go.js开发电路可视化模拟连线功能，
      确保了电路安全和连接正确性。`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "canvas",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "安徽正兴药厂数字孪生平台",
    description:
      `在此系统中，我独立开发了整个孪生项目,通过web socket长连接技术实现设备的是实时监控和双向通信，
      在UI材质有偏差的情况下，成功调整模型材质以匹配UI需求，开发路由分段加载模型的解决方案，
      并编写自动化shell脚本，简化整个工作流程，
      开发路由分段加载模型的解决方案。`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "r3f",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "web socket",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
