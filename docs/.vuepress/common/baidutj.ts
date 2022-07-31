// 百度统计，请去该官网获取自己的代码，这样就能统计谁访问你的网站
// function 可以使用 tab 键缩进，不会导致页面上有多个空格
const baidutj: string = `var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?267c5680c2ffb468ca29c45ffe6801da"; 
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
          })();
          `;

export default baidutj;