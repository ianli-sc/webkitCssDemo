# Mobile上的特殊CSS&HTML
## pandect
* 根据当前的[MGBS](http://velocity.alibaba-inc.com/projects/cross-end-web/wiki/mgbs),我们的Mobile页面只支持webkit核心的浏览器。所以本文的主要内容绝大部分为webkit的特殊用法。
* 此外，mobile浏览器支持大量的HTML5属性，一些在PC上不敢用的标签，在这儿可以放开手脚。

## Webkit CSS
* `-webkit-appearance` 改变标签的外观，可以针对任何标签进行改变
  * 常用的值
    * `button`，`checkbox` 
      * 表现为一个button或checkbox，它具有了button、checkbox的特性：点击时的效果，也保留原有的效果。但`checkbox`却不享有`checked`效果。在快速demo等时候，可以方便的使用该属性来伪装`a`标签成为`button`
      * 例（input-button）
    * `none`
      * 取消标签的默认外观。是使用最多的值。特别是当要定制自己的`checkbox`,`select`样式时。
      * 例（checkbox,select）

* `-webkit-animation`
  * 最喜闻乐见的动画效果，[基于CSS的动画在mobile下效率远远高于JS的动画](http://stackoverflow.com/questions/8671078/which-is-the-most-efficient-on-ios-css3-or-jquery-animations) & [测试用例](http://css3.bradshawenterprises.com/legacy/)。详细的内容，各位已经比较了解，就不多介绍了。
  * 此处关注的是[animationEvent](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent)。我们如何去捕获，event，并对其进行操作。
    * | W3C standard | webkit | IE10 |
| ------------ | ------------- | ------------ |
| animationstart | webkitAnimationStart | MSAnimationStart |
| animationiteration | webkitAnimationIteration | MSAnimationIteration |
| animationend | webkitAnimationEnd | MSAnimationEnd |
    * 三个event分别标示动画的开始，迭代和结束
    * `event`参数：
      * `animationName`动画名，使用者自定义的
      * `elapsedTime`时间，动画开始时到响应触发的时间
    * 特殊的Event`webkitAnimationKeyframe`,监听整个动画的进程。
      * 非原生，由CSS3 big fans [Jon](http://blog.joelambert.co.uk/author/admin/)实现，详细见[连接](http://blog.joelambert.co.uk/2011/05/17/keyframe-events-for-css3-animations/).
      * 如果觉得自己需要，用KISSY实现应该不是难事。
    * 例子
* `-webkit-backface-visibility`,Determines whether or not a transformed element is visible when it is not facing the screen. 
  * 只有两个取值，`visible` & `hidden`。
  * 例子
* `-webkit-background-clip`截取背景图
  * `text`,为文字添上背景图片！[safari官方介绍](https://www.webkit.org/blog/164/background-clip-text/)
  * 官方的方式，不支持非webkit的浏览器，如果要兼容，可用参考本例，综合使用了多个属性。
  * 例子
* `-webkit-border-image`使用图片生成border
  * -webkit-border-image: <uri> <top> <right> <bottom> <left> <x_repeat> <y_repeat>;
  * 除了table中`border-collapse`为`collapse`的所以元素可用
  * 例子
* `webkit-columns`定义文字分行的长度，与`-webkit-column-rule`合用，产生文字的间隔
  * [MOZ官方例子](https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule  )
* `-webkit-marquee`CSS3的跑马灯
  * -webkit-marquee: [direction] [increment] [repetition] [style] [speed]
  * [例子](http://ued.ctrip.com/blog/wp-content/webkitcss/prop/marquee-style.html)
* `-webkit-mask`遮罩
  * [更多例子](http://css-tricks.com/webkit-image-wipes/)，**能做3个or3个以上的么？**
* `-webkit-tap-highlight-color`，高亮颜色
  * 本指一个`a`或者`可点击元素`被tap后，其高亮的颜色。它和outline一起控制了元素蓝色的外框.
* `-webkit-text-security`,将文字以密文显示
  * 例子
* `webkit box`综合介绍
  * 这是一个布局方式的整合，基于[w3c的CSS3布局](http://www.w3.org/TR/css3-layout/)。
  * 这个布局主要为了解决多行自适应宽度布局什么问题？
    * float的元素，不能撑开父级的高度(一边固定，一边absolute也是如此)
    * 固定长度的设计，只能说句`呵呵`
    * 因此，W3C产出了Flexible box model，重点在`灵活`
  * 使用方式
    * container赋值`display: -webkit-box;box-orient: horizontal;`。形成横排的box
    * cell使用`-webkit-box-flex: number;`来赋值某个子元素，占据空白位置的百分比
       * 以3个子元素为例，为每个子元素赋值`-webkit-box-flex: 1;`，`-webkit-box-flex: n2;``-webkit-box-flex: 3;`.那么他们在自身宽度之外，还会占据剩余宽度X的X/(1+2+3)*number
