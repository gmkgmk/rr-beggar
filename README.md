# react-router4基础功能实现

实现rr4的基础功能，理解运行流程。

## 基本入口

* index.js  入口文件
* App.js    官网example
* store     context来源
* connent   context连接分发组件

剩下的就是rr4的基本功能

## 各模块功能及作用（个人总结）

*声明：个人理解，并一定正确*

rr4依赖两个重要的库，一个是history，一个是path-to-regexp

[path-to-regexp](https://github.com/pillarjs/path-to-regexp)的主要作用是简析pathname,将pathname其简析为正则，用来匹配是否相等

[history](https://github.com/mjackson/history)是rr4的基础，就是对window.history对象进行的封装，对其增加了一些操作方法，具体需要了解的可以去git上看一下。

### link

link的主要作用就是跳转，通过生成a标签，点击的时候触发点击事件阻止默认行为（阻止游览器请求后台资源），然后通过改变history对象（堆栈），**来改变Url地址栏**，但是不向服务器发出请求,只改变浏览记录.

**link主要负责的就是改变地址栏**


### router

router组件的作用有两个:
1.分发 history模式 到 context上,让子组件共享同一个history.
2.渲染子组件React.Children.only(children)

**link主要负责的是分发history**

### BrowserHistory

通过 history 库创建相应的history模式,将 history模式 传给 router 组件,再由router传向子组件.

```js
<app>
    <BrowserHistory>
        <Router history={...}>
            {children}
        </Router>
    </BrowserHistory>
</app>
```

**BrowserHistory 主要负责创建 history模式**

### matchPath

matchPath是实现路由匹配的核心,主要依赖于[path-to-regexp](https://github.com/pillarjs/path-to-regexp)库

他主要依靠两个参数,

第一个参数pathName是当前浏览器的Location

第二个参数是一个对象,里面的path参数 是route 里的path参数

>     <Route path="/about" component={About} />

通过path-to-regexp库,对比游览器的pathname和本地path字段是否匹配,可以返回url地址和参数等

### switch

循环子组件,查找第一个匹配pathname的子组件,然后克隆渲染改子组件.

### route

匹配当前pathname 和route 的path,如果匹配成功则渲染该组件,否则返回Null

以上基本就是rr4的基本工作流程,主要在于理解matchPath模块的运行,知道他是如何匹配,然后明白各个模块之间的关系,再串联起来理解发生了什么.

还有另外connect 文件和store 文件,这两个模块是对于 react16.3以后的context进行使用封装.store是发布命令者,是数据的来源,connect是将数据和组件联系起来,是订阅.

