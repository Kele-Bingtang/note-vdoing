---
title: 技术随笔 - Java启动的-D参数
date: 2022-03-02 09:27:00
permalink: /java/d/
sidebar: auto
categories: 
  - 随笔
tags: 
  - 
---



Java 程序启动参数 `-D` 是用来做什么的呢？去查询了一下官方解释：

```java
Set a system property value. If  value  is a string that contains spaces, you must enclose the string in double quotes:
java -Dfoo="some string" SomeClass
```

解释说 `-D` 是用来在启动一个 Java 程序时设置系统属性值的。如果该值是一个字符串且包含空格，那么需要包在一对双引号中。

什么是系统属性值呢？也就是在 System 类中通过 `getProperties()` 得到的一串系统属性。

测试：

```java
public class SystemProperty {

    public static void main(String[] args){
        System.out.print(System.getProperty("java.age"));
    }
}
```

在运行改程序时加上 JVM 参数 `-Djava.age="20"` 或者 `-Djava.age=20`，那么运行之后可以看到控制台输出了 20。

在 CMD 启动命令：

```sh
javac SystemProperty.java
java -Djava.age="20" SystemProperty
```

如果在 IDEA，则在 VM option 添加 `-Djava.age="20"` 或者 `-Djava.age=20`。
