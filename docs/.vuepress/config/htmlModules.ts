// 目前该文件没有用到

import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
/** 插入自定义html模块 (可用于插入广告模块等)
 * {
 *   homeSidebarB: htmlString, 首页侧边栏底部
 *
 *   sidebarT: htmlString, 所有左侧边栏顶部
 *   sidebarB: htmlString, 所有左侧边栏底部
 *
 *   pageT: htmlString, 页面顶部
 *   pageB: htmlString, 页面底部
 *   pageTshowMode: string, 页面顶部-显示方式：未配置默认所有页面；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *   pageBshowMode: string, 页面底部-显示方式：未配置默认所有页面；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *
 *   windowLB: htmlString, 全局窗口左下角②
 *   windowRB: htmlString, 全局窗口右下角②
 * }
 *
 * ①注：在.md文件front matter配置`article: false`的页面是自定义页，未配置的默认是文章页（首页除外）。
 * ②注：windowLB 和 windowRB：1.展示区块宽高最大是200*200px。2.请给自定义元素定一个不超过200px的固定宽高。3.在屏宽小于960px时无论如何都不会显示。
 */

 const htmlModule: VdoingThemeConfig['htmlModules'] = {
  homeSidebarB:
    `<div style="padding: 0.95rem; font-size: 0.875rem;">
      <div style="text-align: center; color: #888; font-weight: bold; padding: 0 0 10px 0;">
        <i class="iconfont icon-award" style="font-size: 0.875rem; font-weight: 900;width: 1.25em;"></i>
        <span>站点信息</span>
      </div>
      <div class="webinfo-item" style="padding: 8px 0 0; margin: 0;">
        <div style="display: inline-block;">
          文章数目：
        </div>
        <div style="display: inline-block; float: right;">
          13 篇
        </div>
      </div>

      <div class="webinfo-item" style="padding: 8px 0 0; margin: 0;">
        <div style="display: inline-block;">
          已运行时间：
        </div>
        <div style="display: inline-block; float: right;">
          189 天
        </div>
      </div>

      <div class="webinfo-item" style="padding: 8px 0 0; margin: 0;">
        <div style="display: inline-block;">
          本站总字数：
        </div>
        <div style="display: inline-block; float: right;">
          45.5k 字
        </div>
      </div>

      <div class="webinfo-item" style="padding: 8px 0 0; margin: 0;">
        <div style="display: inline-block;">
          本站被访问了：
        </div>
        <div style="display: inline-block; float: right;">
          1202 次
        </div>
      </div>

      <div class="webinfo-item" style="padding: 8px 0 0; margin: 0;">
        <div style="display: inline-block;">
          最后活动时间：
        </div>
        <div style="display: inline-block; float: right;">
          2 天前
        </div>
      </div>
    </div>`,
  // `<!-- 纵向自适应 -->
  // <ins class="adsbygoogle"
  //     style="display:block;padding: 0.95rem;"
  //     data-ad-client="ca-pub-7828333725993554"
  //     data-ad-slot="7802654582"
  //     data-ad-format="auto"
  //     data-full-width-responsive="true"></ins>
  // <script>
  //     (adsbygoogle = window.adsbygoogle || []).push({});
  // </script>`,
  // sidebarT:
  //   `<!--  固定100% * 150px可显示，max-height:150px 未见显示-->
  //   <ins class="adsbygoogle"
  //         style="display:inline-block;width:100%;max-height:150px"
  //         data-ad-client="ca-pub-7828333725993554"
  //         data-ad-slot="6625304284"></ins>
  //     <script>
  //         (adsbygoogle = window.adsbygoogle || []).push({});
  //     </script>`,
  // sidebarB:
  //   `<!-- 正方形 -->
  //     <ins class="adsbygoogle"
  //         style="display:block"
  //         data-ad-client="ca-pub-7828333725993554"
  //         data-ad-slot="3508773082"
  //         data-ad-format="auto"
  //         data-full-width-responsive="true"></ins>
  //     <script>
  //         (adsbygoogle = window.adsbygoogle || []).push({});
  //     </script>`,
  // pageT:
  //   `<!-- 固定100% * 90px可显示，max-height:90px未见显示-->
  //    <ins class="adsbygoogle"
  //         style="display:inline-block;width:100%;max-height:90px"
  //         data-ad-client="ca-pub-7828333725993554"
  //         data-ad-slot="6625304284"></ins>
  //     <script>
  //         (adsbygoogle = window.adsbygoogle || []).push({});
  //     </script>`,
  // // pageTshowMode: 'article',
  // pageB:
  //   `<!-- 横向自适应 -->
  //     <ins class="adsbygoogle"
  //         style="display:block"
  //         data-ad-client="ca-pub-7828333725993554"
  //         data-ad-slot="6620245489"
  //         data-ad-format="auto"
  //         data-full-width-responsive="true"></ins>
  //     <script>
  //         (adsbygoogle = window.adsbygoogle || []).push({});
  //     </script>`,
  // pageBshowMode: 'article',
  // windowLB: // 会遮挡部分侧边栏
  //   `<!-- 固定200*200px -->
  //     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  //     <ins class="adsbygoogle"
  //         style="display:inline-block;width:200px;height:200px"
  //         data-ad-client="ca-pub-7828333725993554"
  //         data-ad-slot="6625304284"></ins>
  //     <script>
  //         (adsbygoogle = window.adsbygoogle || []).push({});
  //     </script>`,
  // windowRB:
  //   `<!-- 固定160*160px -->
  //     <ins class="adsbygoogle"
  //         style="display:inline-block;max-width:160px;max-height:160px"
  //         data-ad-client="ca-pub-7828333725993554"
  //         data-ad-slot="8377369658"></ins>
  //     <script>
  //         (adsbygoogle = window.adsbygoogle || []).push({});
  //     </script>
  //     `,
}

// const htmlModule = {
//   homeSidebarB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   sidebarT: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   sidebarB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   pageT: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   pageB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   windowLB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   windowRB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
// }

export default htmlModule