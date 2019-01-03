(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{168:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"_1-git-使用大全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-使用大全","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. git 使用大全")]),s._v(" "),a("p",[a("strong",[s._v("1.git提交文件")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@gitee.com:MrXuxu/day01.git    //克隆\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" add "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("    //添加所有修改的内容到暂存区\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"day01"')]),s._v("    //给修改添加说明并提交到版本库\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push    //推送到远程\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull    //从远程拉文件\n")])])]),a("p",[a("strong",[s._v("2.git版本回退")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log //查看版本库\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline  //只查看版本号\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog    //查看回退前的版本\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard xxx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -- 01.txt  //撤销暂存区里文件的更改\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 02.txt  //删除暂存区里的文件\n")])])]),a("p",[a("strong",[s._v("3. SSH 配置")]),s._v("\n1.打开Git Bash\n2.输入"),a("code",[s._v("ls -al ~/.ssh")]),s._v("以查看是否存在现有SSH密钥：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -al ~/.ssh \n// 列出.ssh目录中的文件（如果存在）\n")])])]),a("p",[s._v("3.检查目录列表以查看是否已有公共SSH密钥。\n4.查看SSH密钥")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa.pub\n// ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])])]),a("p",[a("strong",[s._v("更改本地username, email")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name xubaoshan\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email 1411673883@qq.com\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --get user.name\n")])])]),a("p",[a("strong",[s._v("5. 生成SSH密钥")]),s._v("\n1.打开Git Bash")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("ssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxx@xxxxx.com"')]),s._v("  \n// 三次回车即可生成 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" key\n")])])]),a("p",[s._v("2.查看你的 public key，并把他添加到码云（Gitee.com） SSH key添加地址:https://gitee.com/profile/sshkeys)")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cat ~/.ssh/id_rsa.pub\n# ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....\n")])])]),a("p",[s._v("3.添加后，在终端（Terminal）中输入")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@gitee.com\n")])])]),a("p",[s._v("若返回")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Welcome to Gitee.com, yourname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])])]),a("p",[s._v("则证明添加成功")]),s._v(" "),a("p",[a("strong",[s._v("6.git 分支")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch xu  //创建一个名为xu的分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout xu  //切换分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d xu\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge xu\n")])])]),a("p",[a("strong",[s._v("7.重复提交不同的库")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" add -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:MrXuxu/MrXuxu.github.io.git master")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote add origin https://gitee.com/MrXuxu/node.js-mongodb.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n")])])])])}],!1,null,null,null);e.options.__file="1. git 使用大全.md";t.default=e.exports}}]);