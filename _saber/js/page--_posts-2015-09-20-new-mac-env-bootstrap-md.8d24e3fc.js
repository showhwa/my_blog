(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{336:function(e,t,a){"use strict";a.r(t);var r=a(0),s=function(e){var t,r,s,o=(s=void 0,{attributes:{slug:"new-mac-env-bootstrap",layout:t="post",title:"Newbie Mac Bootstrap",date:r="2015-09-20 17:28:19",updated:r,assets:{cover:a(55)},categories:["技术"],createdAt:new Date(1442741299e3),updatedAt:new Date(1442741299e3),type:t,permalink:"/blog/2015/09/new-mac-env-bootstrap"},internal:s,contentType:"markdown",content:s,markdownHeadings:[{text:"Command Line Tools for Xcode",slug:"command-line-tools-for-xcode",level:2},{text:"1. 通过 Xcode 安装",slug:"1--通过-xcode-安装",level:3},{text:"2. 通过终端安装",slug:"2--通过终端安装",level:3},{text:"3. 通过离线安装包安装",slug:"3--通过离线安装包安装",level:3},{text:"Where is the package manager of OS X?",slug:"where-is-the-package-manager-of-os-x",level:2},{text:"Homebrew",slug:"homebrew",level:3},{text:"Homebrew-Cask",slug:"homebrew-cask",level:3}],excerpt:"<p>入坑 Mac OS X，写点 note (nonsense) 以备玩坏系统重装时翻查。</p>\n",categories:[{name:"技术",permalink:"/blog/category/technology"}]}),n=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=o}].concat(n);["layout","transition"].forEach(function(t){var a=e.options.PageComponent;a&&(e.options[t]=a[t]),void 0===e.options[t]&&(e.options[t]=o.attributes[t])}),e.options.name="page-wrapper-"+o.attributes.slug.replace(/[^0-9a-z\-]/i,"-")},o=Object(r.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("layout-manager",[r("p",[e._v("入坑 Mac OS X，写点 note (nonsense) 以备玩坏系统重装时翻查。")]),e._v(" "),r("h2",{attrs:{id:"command-line-tools-for-xcode"}},[e._v("Command Line Tools for Xcode")]),e._v(" "),r("p",[e._v("OS X 系统不像 Ubuntu 等发行版，系统默认是不包含编译工具链的（因为不是每位用户都需要吧，人性化？）。所以在使用时如果执行到含有诸如 gcc、make 等命令时，就会出现以下情况：")]),e._v(" "),r("figure",{attrs:{"data-type":"image"}},[r("saber-image",{attrs:{src:a(74),alt:"提示需要命令行工具",title:"提示需要命令行工具"}}),r("figcaption",[e._v("提示需要命令行工具")])],1),e._v(" "),r("p",[e._v("这时就需要安装苹果提供的命令行工具包（Command Line Tools，下称 CLT）了。安装 CLT 有几种方法：")]),e._v(" "),r("h3",{attrs:{id:"1--通过-xcode-安装"}},[e._v("1. 通过 Xcode 安装")]),e._v(" "),r("p",[r("code",{pre:!0},[e._v("for Xcode")]),e._v(" 嘛，当然能通过 Xcode 安装了，只不过没有安装 Xcode 亦可使用。所以如果你有安装 Xcode 的话，直接通过 Xcode 安装就好了。（我自己并没有安装 Xcode，因为暂无打算学习 Mac 相关的开发，所以私以为没必要耗费几个 G 的硬盘空间塞下 Xcode 吧， MacBook 的硬盘寸寸金啊。。。）。")]),e._v(" "),r("h3",{attrs:{id:"2--通过终端安装"}},[e._v("2. 通过终端安装")]),e._v(" "),r("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"bash"}},[r("pre",{pre:!0,attrs:{class:"saber-highlight-code language-bash"}},[r("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("$ xcode-select install")])])]),r("p",[e._v("或者输入 gcc 触发前文所提到的情况（见前文图）亦可。")]),e._v(" "),r("h3",{attrs:{id:"3--通过离线安装包安装"}},[e._v("3. 通过离线安装包安装")]),e._v(" "),r("p",[e._v("如果用前面的方法安装不成功的话，可到 Apple 下载中心获取离线安装包进行安装。（认准苹果官网）")]),e._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://developer.apple.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developer.apple.com/downloads")]),e._v(" （需要使用 AppleID 登录）")])]),e._v(" "),r("p",[e._v("安装 CLT 后就可以使用工具链编译安装软件了，这是 Bootstrap A New Mac 的第一步。")]),e._v(" "),r("h2",{attrs:{id:"where-is-the-package-manager-of-os-x"}},[e._v("Where is the package manager of OS X?")]),e._v(" "),r("p",[e._v("用 Mac 之前我还真没想过 OS X 有没有包管理工具。初次用了一会儿后，总觉得好像少了些什么，又说不出来。后在 Win 机上 Xshell 管理 VPS 时，才猛然想起：OS X 下用什么管理软件包？！Where is the package manager of OS X? 检索后才知道 OS X 不止默认不带 toolchains，还没有 package manager。带着使用 Linux 发行版心态的我不免有点失望。")]),e._v(" "),r("h3",{attrs:{id:"homebrew"}},[e._v("Homebrew")]),e._v(" "),r("p",[e._v("官方没有社区有。强大的 Mac 社区造就了各种易用的工具。软件包管理工具就各式各样。其中最出名的两个是 "),r("strong",[r("a",{attrs:{href:"https://www.macports.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Macport")])]),e._v(" 和 "),r("strong",[r("a",{attrs:{href:"http://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew")])]),e._v("。二者有着截然不同的理念，并且越来越多用户选择了 Homebrew。下面进行 Bootstrap A New Mac 的第二步。")]),e._v(" "),r("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"bash"}},[r("pre",{pre:!0,attrs:{class:"saber-highlight-code language-bash"}},[r("code",{pre:!0,attrs:{class:"language-bash"}},[e._v('$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"')])])]),r("p",[r("small",[e._v("OS X 自带 ruby，难怪 ruby 社区一股 Macbook 风气。")])]),e._v(" "),r("p",[e._v("然后就可以像用 "),r("code",{pre:!0},[e._v("apt-get install/update")]),e._v(" 那样 "),r("code",{pre:!0},[e._v("brew install/update")]),e._v(" 了，更多用法参见 "),r("a",{attrs:{href:"https://github.com/Homebrew/homebrew/tree/master/share/doc/homebrew#readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("Doc")]),e._v("。")]),e._v(" "),r("h3",{attrs:{id:"homebrew-cask"}},[e._v("Homebrew-Cask")]),e._v(" "),r("p",[e._v("介绍了 Homebrew 就不得不说 "),r("strong",[r("a",{attrs:{href:"http://caskroom.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Caskroom")])]),e._v(" 了。Homebrew 掌管了各种 CLI 软件包的管理，App Store 提供各种 GUI 应用，这 Cask 又是什么？Cask 其实是 Homebrew 的一个扩展，能让 brew 支持安装和管理 GUI 应用。能在 App Store 获取到的应用当然最好在上面下载安装了，但有些应用程序是没有上架 App Store 的（比如 IntelliJ IDEA），得去程序的官网各种点击下载安装。于是不甘这样的 Mac 社区 Geek 们搞了个 Homebrew-Cask，然后就能打开终端一句指令愉快地安装 GUI 应用了，比如："),r("code",{pre:!0},[e._v("brew cask install intellij-idea-ce")]),e._v("。安装 Cask 只需：")]),e._v(" "),r("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"bash"}},[r("pre",{pre:!0,attrs:{class:"saber-highlight-code language-bash"}},[r("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("$ brew install caskroom/cask/brew-cask")])])]),r("p",[r("em",[e._v("题外话：Cask 开发者们最近在 GitHub 上热论着一场改革"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v("，说是要改变 Cask 目前的行为，以更贴合 regular usage，不过不能完美过渡的话会不会让用户感觉混乱。。")])]),e._v(" "),r("hr",{staticClass:"footnotes-sep"}),e._v(" "),r("section",{staticClass:"footnotes"},[r("ol",{staticClass:"footnotes-list"},[r("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[r("p",[r("a",{attrs:{href:"https://github.com/caskroom/homebrew-cask/issues/13201",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew-Cask issue #13201")]),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])])])])])},[],!1,null,null,null);"function"==typeof s&&s(o);t.default=o.exports},55:function(e,t,a){e.exports={srcSet:a.p+"images/20181225012-8f1d8783.png 600w,"+a.p+"images/20181225012-b878dde0.png 480w",images:[{path:a.p+"images/20181225012-8f1d8783.png",width:600,height:450},{path:a.p+"images/20181225012-b878dde0.png",width:480,height:360}],src:a.p+"images/20181225012-8f1d8783.png",toString:function(){return a.p+"images/20181225012-8f1d8783.png"},placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAsSAAALEgHS3X78AAADZ0lEQVRYw+2X2U9TQRTG+askbkAXdkqBlsJt2bpQEEHZhchOkC2IhkAwITyKT8ZoYmKiD76IgiBQZWvRhKVKXFhayhbzeWZoSVGRbiAPPHw5J3fmzPzmzJl75wZtrm/gNCvoDPAM8LQDOtbsXO6+v/p9XJ8BfRnQ2wUHZIvZQNv2TWzZHLCvrGNj1Qa7l+IxFMvGYPJ0sR5lkMEtL31BUUU9BH0BMnKKkG4s9EosRtAVoLiyAWvfVjyGPBKQrfzn1g7GRycQLJEjOEqFi3FqXIgVvBKLOReZjPMRSViaX8LOxlYAATd3YBozQSRLhTRZj2h1LqKFHG6jyHoi1pfFShM0sC5YAw84QYChsSqIk7IQmWqEWKGDSKFFREo2l1RlQLhTDMTlszaXFVGsOF6Adf44AQlKmmxAsqEQQm4pxEodV5Rg3Idj2WVWQmJtzGeLOhFAKU0YmpiF0toW3O7uQ0FlI/ermztRXN2MGw3tqG29i7zyelSQX9/eBUNRFc8wW9yxA0poEpYZTV4Zsour+ORXyuqQda0SxpJq6Atvkq1B+tVy5JbW4lZnD4ScEp5dseKEtpjXIGUyLEnLa3HPanlNuuRqj9HkQkL+iW2xC5AVPas7iXLvQEhVrAZJ7KQ6DwmzrkN08oAEEEYTKnTXKUt5SEjTQabRQpaRD3lmPs9cErWJKIsMNqCA7t9L9/dgWFwK3y7+bqMJlYYivBoeQd+Dp3hxX4tH/XoMPHmJx8+eo3/gIV6PjkGhL9x/F+4dEvUfgP8CPTyDDNIFSF+SiXcmXIpSIiQ+DWGJmYhR56Cktg1Nd3pR09aNptYGNLY0or6jF40dPfSsi9ruobSujfdlMZcpNjQ2hQPuOgGPyuLRW0zadWzDNP4e0coMymIqz4JErkF4YhpEtGVs20LiNCQ1L4MQVgrURyQTqE869VVDLFdzuFiVlgNu2R18bJ8y6FoZ+6Bb6bv5aX4eC1YrZuY+YtoyR3aO2ymzhfuTZjPejLzF4NAQBoeHyR+hNjNvY33cY9gYbKxF62fY6HbjN+BX6zImTR8wMz0L86wZlgOy7GuOQCxOcX/WXQfjpqem6cKw6GcNOgP5tYjq0PZjDbbvh2n1EP29v53G8vTSGhSIW68/t2ufMxjo/xBf/03OfjvPAP+3fgFkZ2dwkdx/SAAAAABJRU5ErkJggg==",width:600,height:450}},74:function(e,t,a){e.exports={srcSet:a.p+"images/20150810001-96440288.png 1200w,"+a.p+"images/20150810001-9c185376.png 720w,"+a.p+"images/20150810001-25b8e171.png 480w",images:[{path:a.p+"images/20150810001-96440288.png",width:1200,height:788},{path:a.p+"images/20150810001-9c185376.png",width:720,height:473},{path:a.p+"images/20150810001-25b8e171.png",width:480,height:315}],src:a.p+"images/20150810001-96440288.png",toString:function(){return a.p+"images/20150810001-96440288.png"},placeholder:"data:image/png;base64,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",width:1200,height:788}}}]);