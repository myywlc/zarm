(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{668:function(n,o,t){"use strict";t.r(o),o.default="# Toast \u8f7b\u63d0\u793a\n\n\n## \u57fa\u672c\u7528\u6cd5\n```jsx\nimport { Toast, Cell, Button, Icon } from 'zarm';\n\nconst Demo = () => (\n  <>\n    <Cell\n      description={\n        <Button\n          size=\"xs\"\n          onClick={() => {\n            Toast.show('\u9ed8\u8ba43\u79d2\u81ea\u52a8\u5173\u95ed');\n          }}\n        >\n          \u5f00\u542f\n        </Button>\n      }\n    >\n      \u666e\u901a\n    </Cell>\n\n    <Cell\n      description={\n        <Button\n          size=\"xs\"\n          onClick={() => {\n            Toast.show({\n              content: '\u6307\u5b9a5\u79d2\u540e\u81ea\u52a8\u5173\u95ed',\n              stayTime: 5000,\n              afterClose: () => {\n                console.log('Toast\u5df2\u5173\u95ed');\n              }\n            })\n          }}\n        >\n          \u5f00\u542f\n        </Button>\n      }\n    >\n      \u6307\u5b9a\u505c\u7559\u65f6\u95f4\n    </Cell>\n\n    <Cell\n      description={\n        <Button\n          size=\"xs\"\n          onClick={() => {\n            Toast.show({\n              content: '\u4e0d\u53ef\u540c\u65f6\u8fdb\u884c\u5176\u4ed6\u4ea4\u4e92',\n              mask: true,\n              afterClose: () => {\n                console.log('Toast\u5df2\u5173\u95ed');\n              }\n            })\n          }}\n        >\n          \u5f00\u542f\n        </Button>\n      }\n    >\n      \u6709\u906e\u7f69\u5c42\n    </Cell>\n\n    <Cell\n      description={\n        <Button\n          size=\"xs\"\n          onClick={() => {\n            Toast.show(\n              <div className=\"box\">\n                <Icon className=\"box-icon\" type=\"right-round-fill\" />\n                <div className=\"box-text\">\n                  \u9884\u7ea6\u6210\u529f\n                </div>\n              </div>\n            );\n          }}\n        >\n          \u5f00\u542f\n        </Button>\n      }\n    >\n      \u81ea\u5b9a\u4e49\u5185\u5bb9\n    </Cell>\n  </>\n)\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| visible | boolean | false | \u662f\u5426\u5c55\u793a |\n| content | ReactNode | - | \u663e\u793a\u7684\u5185\u5bb9 |\n| stayTime | number | 3000 | \u81ea\u52a8\u5173\u95ed\u524d\u505c\u7559\u7684\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u6beb\u79d2\uff09 |\n| mask | boolean | false | \u662f\u5426\u5c55\u793a\u906e\u7f69\u5c42 |\n| onMaskClick | () => void | - | \u70b9\u51fb\u906e\u7f69\u5c42\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570 |\n| afterClose | () => void | - | Toast\u9690\u85cf\u540e\u7684\u56de\u8c03\u51fd\u6570 |\n| mountContainer | HTMLElement &#124; () => HTMLElement | document.body | \u6307\u5b9aToast\u6302\u8f7d\u7684HTML\u8282\u70b9 |\n\n## \u9759\u6001\u65b9\u6cd5\n\n```js\n// \u663e\u793a\u8f7b\u63d0\u793a Toast.show(content: ReactNode | ToastProps)\nToast.show('\u9ed8\u8ba43\u79d2\u81ea\u52a8\u5173\u95ed');\nToast.show({\n  content: '\u6307\u5b9a5\u79d2\u540e\u81ea\u52a8\u5173\u95ed',\n  stayTime: 5000,\n  afterClose: () => {\n    console.log('Toast\u5df2\u5173\u95ed');\n  }\n});\n\n// \u9690\u85cf\u8f7b\u63d0\u793a\nToast.hide();\n```\n"}}]);
//# sourceMappingURL=70.b689f2fb.js.map