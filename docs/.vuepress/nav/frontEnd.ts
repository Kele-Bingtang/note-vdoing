// 前端导航
export default {
  text: '前端', link: '/front/',
  items: [
    {
      text: '基础',
      items: [
        { text: 'Html', link: '/html/' },
        { text: 'css', link: '/css/' },
        { text: 'JavaScript', link: '/javascript/' },
      ]
    },
    {
      text: '进阶',
      items: [
        /* { text: 'jQuery', link: '/jquery/' },
        { text: 'Node', link: '/node/' }, */
        { text: 'TypeScript', link: '/typescript/' }
      ]
    },
    {
      text: '框架',
      items: [
        { text: 'React', link: '/react/' },
        { text: 'Vue2', link: '/vue2/' },
        { text: 'Vue3', link: '/vue3/' },
      ]
    }
  ]
}