(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{365:function(e,t,a){"use strict";a.r(t);var s=a(0),o=function(e){var t,s,o,i,p,n,g,r,l,A=(t=void 0,s="前端",o="post",i={},p=new Date(1570264435019),n={},g="markdown",r={},l="2019-05-01 18:14:40",i.internal=t,i.contentType="default",i.isTagPage=!0,i.layout="tag",i.permalink="/blog/tag/前端",i.slug=s,i.createdAt=p,i.updatedAt=p,i.posts=[n,r],i.pagination={hasPrev:!1,hasNext:!1,total:1,current:1,prevLink:"/blog/tag/前端/page/2",nextLink:t},i.tag=s,i.assets={},i.attributes=i,i.content=t,n.internal=t,n.contentType=g,n.slug="better-lazyload-implementation-with-responsive-images",n.content=t,n.layout=o,n.title="结合响应式图片实现更好的图片懒加载方案",n.keywords="lazyload,responsive images,图片懒加载,按需延迟加载,响应式图片,前端性能优化",n.description="作为在网页性能调优方面常被使用的技巧之一，懒加载（LazyLoad）或者说延迟加载是在谈 及「前端性能优化」话题时不得不说的一项技术。懒加载已经不局限于单一的图片懒加载， 视频、音频等其它媒体资源，甚至组件化 Vue WebComponent 等都已纳入懒加载优化当中。 本文探讨了利用 srcset 属性的特性，实现一种相对完美的图片懒加载方案。既能支持响应 式图片 Responsive Images，又能完好的实现图片按需加载。",n.date="2019-07-24 15:53:00",n.updated="2019-07-24 16:33:00",n.assets={cover:a(54)},n.categories=["技术"],n.tags=[s,"前端性能优化"],n.markdownHeadings=[{text:"原理",slug:"原理",level:2},{text:"问题",slug:"问题",level:2},{text:"改进",slug:"改进",level:2},{text:"后记",slug:"后记",level:2},{text:"参考",slug:"参考",level:2}],n.excerpt='<figure data-type="image"><saber-image src="../_assets/uploads/2019/07/20190724005.jpg" alt="头图（图源：Unsplash@emilep）"></saber-image><figcaption>头图（图源：<a href="https://unsplash.com/photos/xrVDYZRGdw4">Unsplash@emilep</a>）</figcaption></figure>\n<p>作为在网页性能调优方面常被使用的技巧之一，<strong>懒加载</strong>或者说延迟加载是在谈及「前端性能优化」话题时不得不说的一项技术。</p>\n',n.createdAt=new Date(156395478e4),n.updatedAt=new Date(156395718e4),n.type=o,n.permalink="/blog/2019/07/better-lazyload-implementation-with-responsive-images",n.attributes=n,r.internal=t,r.contentType=g,r.slug="macos-mojave-dark-mode-in-css",r.content=t,r.layout=o,r.title="利用 CSS 媒体查询让网页配色跟随 macOS 深色模式",r.keywords="CSS,media queries,macos dark mode",r.description="苹果公司的操作系统 macOS 从 10.14 Mojave 版本开始，户提供了深色模式（Dark Mode） 的外观。本文介绍利用 CSS 媒体查询（media queries）中的 prefers-color-scheme 媒体特征（media feature）做到让网页跟随 macOS Mojave 的黑暗模式进行配色自动切换。",r.date=l,r.updated=l,r.assets={cover:a(55)},r.categories=["技术"],r.tags=[s],r.markdownHeadings=[],r.excerpt='<p>苹果公司的操作系统 macOS 从 10.14 Mojave 版本开始，为用户提供了<a href="https://www.apple.com/cn/macos/mojave/">深色模式</a>的可选外观。用户可以在系统中的通用设置里选择启用深色模式，整个系统的界面会全局变为暗色调。对于夜间使用场景而言，深色模式的界面可能会显得更加友好，也更能让用户集中注意力。</p>\n',r.createdAt=new Date(155670568e4),r.updatedAt=new Date(155670568e4),r.type=o,r.permalink="/blog/2019/05/macos-mojave-dark-mode-in-css",r.attributes=r,i),d=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=A}].concat(d);["layout","transition"].forEach(function(t){var a=e.options.PageComponent;a&&(e.options[t]=a[t]),void 0===e.options[t]&&(e.options[t]=A[t])}),e.options.name="page-wrapper-"+A.slug.replace(/[^0-9a-z\-]/i,"-")},i=Object(s.a)({},function(){var e=this.$createElement;return(this._self._c||e)("layout-manager")},[],!1,null,null,null);"function"==typeof o&&o(i);t.default=i.exports},54:function(e,t,a){e.exports={srcSet:a.p+"images/20190724000-5c0b0397.png 600w,"+a.p+"images/20190724000-01106de5.png 480w",images:[{path:a.p+"images/20190724000-5c0b0397.png",width:600,height:450},{path:a.p+"images/20190724000-01106de5.png",width:480,height:360}],src:a.p+"images/20190724000-5c0b0397.png",toString:function(){return a.p+"images/20190724000-5c0b0397.png"},placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAIAAADRv8uKAAAACXBIWXMAAAsSAAALEgHS3X78AAADdElEQVRIx+2Wz28bRRTH/edx4YQQB5DSU6iEuHFB4oCUIlSpAjUCElQSlUDsVsRVq1JIG5LKiUMbJ8R1Ejv+sa7X3t87O79nZ3+YVIxN1dxqE9wipEijt6vZp/nMfN/b9yYTsfA/GZlz8P8ATEVE+GsHUxEn/Tg9eW1gEYlYspAzAUplUPhdDuelmn91YEmFYGHoegwzu3xYm5o+eutdf2MrSZ+lLI6YfDVgyhmVqFzin39AsrPa9uPqhYvVt99zNoo+9mqNTYbQP2KPDSYcIObeXoo+fIPPTHfr9WZxRy8UkU8rRw9z9z+2zWYqkvE1z4yvcwBo+1izV66D7Q0IMASQYIa9wOzoT9tVRkTEo2iyYKl0xgLXH6HtBaf3FBMpCVdbUVZgRgCigHKjKQMwZE8OHBLuWR578Gk/96bYXwl5qkL+4r9iOAw69Sh/IdxbluHJ6acJgDGzeq7x+DZZv8INLRLpoHq8ACNm63pQXKStkuTJmGqPKbXAPjS7ttmzu70mhTBmUmKV5VTSkEECTNvzGUX8dEOTSi6lNgvYYW1refWjrT+yiTp00o+ilLCI3F0OP7vI200ZxpMHDw+NKwfb+d9mdp7coYB0r31vLuW8gLj5RXZpmmnNSKaTBT9fiwTI6pq61vId36w2jt6ZOp563+9ZVs/ydINjfhpdhR+1g9HgmA/qkSQixJxBzANMAVSw9nrBLu2r8skCwiFVv9agWf3dskQ0GP8GLDAlEAzwMomTP+Xg+SwUKYbM9xAyHRWCOEoT1aZEpByUlekJbra5YccvDXnmZQpTaZlapbYW8QTsld21Am03+cbP4niHAQMU18wffwr7J2D3iXvvATZs5+4qbLS93bI2cxlVqnHcPwtYVV2BhN453jv4hQCq5+80Prlkbz5EuXmwv05LC87qsv7DCgxQ+5vvtGvXO9mV1hdfabPz2sKSNr8I9w/PCFYn5pD1OlphN3tQ3Wx9u1i/Om/fysIbc0atRjavGqVHrStf6/fuazfyrbmF1s184/KXrZu3Wks5bXYO1TUVlbOBVYAZdIFn2o5hOj3L1g3XsNyu5dV2YOVX1wlUSvu64ZmOq/ccx7U7PddylWdgumLUrSgzovNjxhHliLGBpcoSSJAHiMrk4QxXDnD4ruxzZyqGLWTCdy61YjhYl5/fq8/BI8ZfByUhdF1ZPmUAAAAASUVORK5CYII=",width:600,height:450}},55:function(e,t,a){e.exports={srcSet:a.p+"images/20190501006-470e6d1a.png 600w,"+a.p+"images/20190501006-bb0b7e29.png 480w",images:[{path:a.p+"images/20190501006-470e6d1a.png",width:600,height:450},{path:a.p+"images/20190501006-bb0b7e29.png",width:480,height:360}],src:a.p+"images/20190501006-470e6d1a.png",toString:function(){return a.p+"images/20190501006-470e6d1a.png"},placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAACXBIWXMAAAsSAAALEgHS3X78AAAEe0lEQVRYw+2X60+bZRjG+yf4xU/6ZcmMzg3HsXQcWpBCD8A2NgcbRxkOhTG2ygLIRiRGpkMXj6hbBhJ16syCMrOTYZvMLMh5MI7roCjjUMuxB0pL6eX9PPjOrolmK8X4gSZX8rZ9+z6/XvfhuR+R1WjB/1miNcA1wH/Q/JyZy/XaXe73/SeA7oubZ4wwTc9hwTQPu8XGxa7Z50yu9646oCucZdZE1ybAAf4yz8xBPzLKZZycBpzg35n5fZ5DijyBY84sztvgsC7il+s3oMnPh1T2PIJDIyAJi4Q6PgEFrx5GQ/01DskcZX/IE0iRJ3BLC4vQ39Pj+LFyaPIy8OS69ZBExUO5M42UDqlqJ/zDYvCsbzDyDxyEhdx1WO0eQT40oBBW5px+VE+u7UfHze9wKH8ftsgTsHX3XoJSwC80BsodqVARrPqFDGwSy1BYdBSzhinYLAuPDPlIDjKxsJYUF6Gz8RzmRhvhKw6BikACyLHDmmy8VpiDwPAYKBJSEBWfhPikvRxyf24esOj8K3fN3gdkoWWJX1d7HpXvlVIFjKG7+Xv4BYchjiA2BobjdOUbOFN1HD5BUh5u+dbdkBOketeL2OArxk8XLwNL4M9alRxkLaSs9Ah03bSQpQ+m8SYolArI1Ik8rH6SCPgGyzhY9LY9y4Ak1Y40BEqVyM3JW65sl/azYkABjuWeTjuM10s0tEI3LPpWwH4H39S8i3Ub/CHfloLYxExyM5PnnwDHQGNIEbGJkCvjYBiboD+64F1AljewOdD6axveOVZM1wOwGtqxMNkOzPeh+tNyiEPCuHs+lG8B4UooyFFXF2MSUhEgkUI3oOVdQCgW7wHaHWi62YyK8qL7gLapDoLsoPd3MH73Oi7VfoZva05QZWfhucBQAttzH5IB+kvCMbQagMvVa0d/9wCOFh2g/Ovh7jFAJquhDUtzt6lwfieNUjEN4evPK+BDkIKTkXGJiIxWU/8c836IhYeZpo0oLNBgpL8eMHVzOPv0rWUX6f3Pl2pwpe4UFmc6qVoHkftyOoJksYjblQFxhBpZWdkUiaUHtj+vVTEPM7WIqlPVOPlRGXeJFQrPQ2s/Wm+cxTObg7B+YwCuXajmbn55ugKbqOVsT9mHp+m7H87V8lbl9TYjQNpoT50cN+CV7Jdwt+sitYxBajXNtGIP+trO014shZ94C1oazhLgb6j65E1yUEVSIjUlHQ7qBO7jmFf7oLDV9XT2oPKDtzHQ/iOB6OCY7YLTeBvaWxfQ21pHOdpLu4aWQpqGpzaHICpaiZGhYY/2Y4+GBZZHLY0tyM7KRM3Jcvyha6Aw9xHsMHcOBFtanIPHHn8CyclpGNYOwkltSgit14eFvx/64EQzcW8cH39YiYJDeSg7chDvV5TgxFvFSE7aDnlUNM588RX/DXPOFW7VAN0HVpvZyreuqYlJtDW1o/7KVdRfvorerl6eCqwghHs9Hf89mqhdxRZnAykLIZtW4HByd4UBY6VnE9FKDkzuoIK8eXBa0bHzYU91a+fiNcB/0Z+Omfuq4+3G7gAAAABJRU5ErkJggg==",width:600,height:450}}}]);