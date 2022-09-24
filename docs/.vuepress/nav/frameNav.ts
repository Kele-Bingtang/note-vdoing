// 框架导航栏
export default {
  text: '框架', link: '/frames/',
  items: [
    {
      text: '数据库',
      items: [
        { text: 'MyBatis', link: '/mybatis/' },
        { text: 'MyBatis-Plus', link: '/mybatis-plus/' },
      ]
    },
    {
      text: '消息中间件',
      items: [
        { text: 'ActiveMQ', link: '/activemq/' },
        { text: 'RabbitMQ', link: '/rabbitmq/' },
        { text: 'RocketMQ', link: '/rocketmq/' },
        { text: 'Kafka', link: '/kafka/' },
      ]
    },
    {
      text: '进阶服务',
      items: [
        { text: 'Nginx', link: '/nginx/' },
      ]
    },
    // {
    //   text: '微服务',
    //   items: [
    //     { text: '注册中心', link: '/registry-center/' },
    //     { text: '服务调用', link: '/service-call/' },
    //     { text: '服务降级', link: '/service-degradation/' },
    //     { text: '服务网关', link: '/service-gateway/' },
    //     { text: '服务配置', link: '/service-config/' },
    //     { text: '服务总栈', link: '/service-stack/' },
    //   ]
    // },
  ]
}
