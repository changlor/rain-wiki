# 快速开始
## 安装
#### 安装环境
所必需的环境 node.js、npm
#### 安装步骤
```
# 克隆远程仓库框架
git clone https://github.com/changlor/rain.git
# cd到项目
cd rain/
# 切断与原项目的联系
rm -rf .git
# 安装包依赖
npm install # 此方法由于安装速度过慢，有时会出错
# 推荐使用cnpm
cnpm install
# cnpm安装方法
npm install -g cnpm --registry=https://registry.npm.taobao.org
# 本地开启http服务
npm run dev
```
