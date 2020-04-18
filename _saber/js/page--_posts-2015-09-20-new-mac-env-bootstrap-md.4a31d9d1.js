(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{353:function(e,t,a){"use strict";a.r(t);var s=a(0),r=function(e){var t,s,r,o,n=(r=void 0,o="2015-09-20 17:28:19",(t={}).type=s="post",t.internal=r,t.contentType="markdown",t.slug="new-mac-env-bootstrap",t.content=r,t.createdAt=new Date(1442770099e3),t.updatedAt=new Date(1442770099e3),t.layout=s,t.title="Newbie Mac Bootstrap",t.date=o,t.updated=o,t.assets={cover:a(57)},t.categories=["技术"],t.markdownHeadings=[{text:"Command Line Tools for Xcode",slug:"command-line-tools-for-xcode",level:2},{text:"1. 通过 Xcode 安装",slug:"1--通过-xcode-安装",level:3},{text:"2. 通过终端安装",slug:"2--通过终端安装",level:3},{text:"3. 通过离线安装包安装",slug:"3--通过离线安装包安装",level:3},{text:"Where is the package manager of OS X?",slug:"where-is-the-package-manager-of-os-x",level:2},{text:"Homebrew",slug:"homebrew",level:3},{text:"Homebrew-Cask",slug:"homebrew-cask",level:3}],t.excerpt="<p>入坑 Mac OS X，写点 note (nonsense) 以备玩坏系统重装时翻查。</p>\n",t.permalink="/blog/2015/09/new-mac-env-bootstrap",t.attributes=t,t.categoriesInfo=[{name:"技术",permalink:"/blog/category/technology"}],t),p=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=n}].concat(p);["layout","transition"].forEach((function(t){var a=e.options.PageComponent;a&&(e.options[t]=a[t]),void 0===e.options[t]&&(e.options[t]=n[t])})),n.slug&&(e.options.name="page-wrapper-"+n.slug.replace(/[^0-9a-z\-]/gi,"-"))},o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("layout-manager",[s("p",[e._v("入坑 Mac OS X，写点 note (nonsense) 以备玩坏系统重装时翻查。")]),e._v(" "),s("h2",{attrs:{id:"command-line-tools-for-xcode"}},[e._v("Command Line Tools for Xcode")]),e._v(" "),s("p",[e._v("OS X 系统不像 Ubuntu 等发行版，系统默认是不包含编译工具链的（因为不是每位用户都需要吧，人性化？）。所以在使用时如果执行到含有诸如 gcc、make 等命令时，就会出现以下情况：")]),e._v(" "),s("figure",{attrs:{"data-type":"image"}},[s("saber-image",{attrs:{src:a(79),alt:"",title:"提示需要命令行工具"}}),s("figcaption",[e._v("提示需要命令行工具")])],1),e._v(" "),s("p",[e._v("这时就需要安装苹果提供的命令行工具包（Command Line Tools，下称 CLT）了。安装 CLT 有几种方法：")]),e._v(" "),s("h3",{attrs:{id:"1--通过-xcode-安装"}},[e._v("1. 通过 Xcode 安装")]),e._v(" "),s("p",[s("code",{pre:!0},[e._v("for Xcode")]),e._v(" 嘛，当然能通过 Xcode 安装了，只不过没有安装 Xcode 亦可使用。所以如果你有安装 Xcode 的话，直接通过 Xcode 安装就好了。（我自己并没有安装 Xcode，因为暂无打算学习 Mac 相关的开发，所以私以为没必要耗费几个 G 的硬盘空间塞下 Xcode 吧， MacBook 的硬盘寸寸金啊。。。）。")]),e._v(" "),s("h3",{attrs:{id:"2--通过终端安装"}},[e._v("2. 通过终端安装")]),e._v(" "),s("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"bash"}},[s("pre",{pre:!0,attrs:{class:"saber-highlight-code language-bash"}},[s("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("$ xcode-select "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")])])])]),s("p",[e._v("或者输入 gcc 触发前文所提到的情况（见前文图）亦可。")]),e._v(" "),s("h3",{attrs:{id:"3--通过离线安装包安装"}},[e._v("3. 通过离线安装包安装")]),e._v(" "),s("p",[e._v("如果用前面的方法安装不成功的话，可到 Apple 下载中心获取离线安装包进行安装。（认准苹果官网）")]),e._v(" "),s("blockquote",[s("p",[s("saber-link",{attrs:{to:"https://developer.apple.com/downloads"}},[e._v("https://developer.apple.com/downloads")]),e._v(" （需要使用 AppleID 登录）")],1)]),e._v(" "),s("p",[e._v("安装 CLT 后就可以使用工具链编译安装软件了，这是 Bootstrap A New Mac 的第一步。")]),e._v(" "),s("h2",{attrs:{id:"where-is-the-package-manager-of-os-x"}},[e._v("Where is the package manager of OS X?")]),e._v(" "),s("p",[e._v("用 Mac 之前我还真没想过 OS X 有没有包管理工具。初次用了一会儿后，总觉得好像少了些什么，又说不出来。后在 Win 机上 Xshell 管理 VPS 时，才猛然想起：OS X 下用什么管理软件包？！Where is the package manager of OS X? 检索后才知道 OS X 不止默认不带 toolchains，还没有 package manager。带着使用 Linux 发行版心态的我不免有点失望。")]),e._v(" "),s("h3",{attrs:{id:"homebrew"}},[e._v("Homebrew")]),e._v(" "),s("p",[e._v("官方没有社区有。强大的 Mac 社区造就了各种易用的工具。软件包管理工具就各式各样。其中最出名的两个是 "),s("strong",[s("saber-link",{attrs:{to:"https://www.macports.org"}},[e._v("Macport")])],1),e._v(" 和 "),s("strong",[s("saber-link",{attrs:{to:"http://brew.sh"}},[e._v("Homebrew")])],1),e._v("。二者有着截然不同的理念，并且越来越多用户选择了 Homebrew。下面进行 Bootstrap A New Mac 的第二步。")]),e._v(" "),s("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"bash"}},[s("pre",{pre:!0,attrs:{class:"saber-highlight-code language-bash"}},[s("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("$ /usr/bin/ruby -e "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')])])])]),s("p",[s("small",[e._v("OS X 自带 ruby，难怪 ruby 社区一股 Macbook 风气。")])]),e._v(" "),s("p",[e._v("然后就可以像用 "),s("code",{pre:!0},[e._v("apt-get install/update")]),e._v(" 那样 "),s("code",{pre:!0},[e._v("brew install/update")]),e._v(" 了，更多用法参见 "),s("saber-link",{attrs:{to:"https://github.com/Homebrew/homebrew/tree/master/share/doc/homebrew#readme"}},[e._v("Doc")]),e._v("。")],1),e._v(" "),s("h3",{attrs:{id:"homebrew-cask"}},[e._v("Homebrew-Cask")]),e._v(" "),s("p",[e._v("介绍了 Homebrew 就不得不说 "),s("strong",[s("saber-link",{attrs:{to:"https://github.com/Homebrew/homebrew-cask"}},[e._v("Homebrew-Cask")])],1),e._v(" 了。Homebrew 掌管了各种 CLI 软件包的管理，App Store 提供各种 GUI 应用，这 Cask 又是什么？Cask 其实是 Homebrew 的一个扩展，能让 brew 支持安装和管理 GUI 应用。能在 App Store 获取到的应用当然最好在上面下载安装了，但有些应用程序是没有上架 App Store 的（比如 IntelliJ IDEA），得去程序的官网各种点击下载安装。于是不甘这样的 Mac 社区 Geek 们搞了个 Homebrew-Cask，然后就能打开终端一句指令愉快地安装 GUI 应用了，比如："),s("code",{pre:!0},[e._v("brew cask install intellij-idea-ce")]),e._v("。Cask 已经被集成在了 Homebrew 中，直接如下使用即可：")]),e._v(" "),s("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"bash"}},[s("pre",{pre:!0,attrs:{class:"saber-highlight-code language-bash"}},[s("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("$ brew cask "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" atom")])])])])}),[],!1,null,null,null);"function"==typeof r&&r(o);t.default=o.exports},57:function(e,t,a){e.exports={srcSet:a.p+"images/20181225012-5df39cc1.png 600w,"+a.p+"images/20181225012-eb1424f7.png 480w",images:[{path:a.p+"images/20181225012-5df39cc1.png",width:600,height:450},{path:a.p+"images/20181225012-eb1424f7.png",width:480,height:360}],src:a.p+"images/20181225012-5df39cc1.png",toString:function(){return a.p+"images/20181225012-5df39cc1.png"},placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAIAAADRv8uKAAAACXBIWXMAAAsSAAALEgHS3X78AAAC5ElEQVRIx+2W20/TUBjA+askKpd1d+jY2L0dBWnXXcgENwYCctlgM2EIwRAIJAbfxCej8UEfePHBhAAjINcFNmKsWyEBs43u5tT4CYFEjeDGCC9LfmnOTr9zfuf7TrvTklQ8cS2UFMVF8TWJkzEufZTMcKmcgCGXFWeOkonoUewgGj+M/ScQfLLcPMUw+CuX2g/v2TvcGHm33mwnTPcuBMIw0uboHAA9uGGSnMWQ6I90dnV5tVSgKJXqbssMt1D8QiDshkR7U6wKf4pkk+k8xd/T2bWVdUSGCbXGKoNViltOrucAAQKtUVhbxzJsNnE5MQ/V89WkFDcLNEa+hhLrTYBIR4v19GnDdIYEMyNqki83RJhIAcQCDQUCLW3HrW3QhhVAcqAR6ugqg0WopaEk0AmNAothXp6qsd3tG52cbun2QsM1+NjZN9jpedQ/NGbr6O/yDHuGx02tPbA+fmEzhmzqmtppRw/t6La2uxpbusytvUb7A7Ozt95239Lm8o5M4BanSGcqpPh0jymeioRtRlSkQENCSRE1xVdD5Sloo3VWqHaBSw1imFGiN8HWCo+fJpHeLAZ0tOj3R+xKxDAv7LSatqOETdlAyQlSfqe5trEZJZqgE3xXINZQEtwCaE2O9wv+J8/fzD4jXz6lZ16/e/V2dnrmxZx/WW20S49jILgA4tWVtTKppkJB8JQN1QaL0+Xzjk71DY17fAP9g1738OTAyESvb+zh6FSbewheLQgrlxOVqD5/MYz5lsqsf9iQqhsqZXpEjvMVBqGS4NVgSA1WhhrKgWotgNTgPBkmUhKQKKLAK1AdqiNBnOFy/K9OxhIwhmUiHxmGibBbO8HNE7Z3gEAwBNd5v39uYWFucXF+aemsc/M0En4yLBtm97hoPCcxB2fqAbu/ubaxHdgO7YRCwT/ZDe6e8fddILAVCDOfU7Hcj8Vfh1qU4w7j3Jfzif3rVirO5f8hAPq8KX7sFcXXJP4JgBS93D4/ZAkAAAAASUVORK5CYII=",width:600,height:450}},79:function(e,t,a){e.exports={srcSet:a.p+"images/20150810001-96440288.png 1200w,"+a.p+"images/20150810001-9c185376.png 720w,"+a.p+"images/20150810001-25b8e171.png 480w",images:[{path:a.p+"images/20150810001-96440288.png",width:1200,height:788},{path:a.p+"images/20150810001-9c185376.png",width:720,height:473},{path:a.p+"images/20150810001-25b8e171.png",width:480,height:315}],src:a.p+"images/20150810001-96440288.png",toString:function(){return a.p+"images/20150810001-96440288.png"},placeholder:"data:image/png;base64,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",width:1200,height:788}}}]);