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
  * 例子
* `-webkit-background-composite`背景的复合模式
  * 例子
* `-webkit-border-image`使用图片生成border
  * -webkit-border-image: <uri> <top> <right> <bottom> <left> <x_repeat> <y_repeat>;
  * 除了table中`border-collapse`为`collapse`的所以元素可用
  * 例子
* `webkit box`综合介绍
  * 这是一个布局方式的整合，基于[w3c的CSS3布局](http://www.w3.org/TR/css3-layout/)。
  * todo http://www.html5rocks.com/en/tutorials/flexbox/quick/
* `webkit-columns`定义文字分行的长度，与`-webkit-column-rule`何用，产生文字的间隔
  * 例子https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule  
* `-webkit-marquee`CSS3的跑马灯
  * 例子http://davidwalsh.name/webkit-marquee-css,http://media02.hongkiat.com/marquee-in-css/demo/index.html
* `-webkit-mask`遮罩
  * 例子http://css-tricks.com/webkit-image-wipes/
* `-webkit-tap-highlight-color`，高亮颜色
  * 本指一个`a`或者`可点击元素`被tap后，其高亮的颜色。它和outline一起控制了元素蓝色的外框.
* `-webkit-text-security`,将文字以密文显示
  * 例子http://ued.ctrip.com/blog/wp-content/webkitcss/demo/text-security.html
    
      
