![@rob.hameetman/create-hire][logo]

![Version](https://img.shields.io/npm/v/@rob.hameetman/create-hire)
![Downloads](https://img.shields.io/npm/dt/@rob.hameetman/create-hire)
![Build](https://img.shields.io/bitbucket/pipelines/rob.hameetman/master)
![License](https://img.shields.io/npm/l/@rob.hameetman/create-hire)

# 📦 @rob.hameetman/create-hire

This project is a curated collection of public packages for personal use across
distributed and internal solutions.

* [💼 Getting Started](#markdown-header-getting-started)
  * [📚 Prerequisites](#markdown-header-prerequisites)
  * [📲 Installing](#markdown-header-installing)
* [🛠 Testing](#markdown-header-testing)
  * [🔁 E2E](#markdown-header-e2e)
  * [🛁 Static Analysis](#markdown-header-static-analysis)
* [🛥 Deployment](#markdown-header-deployment)
* [🧾 Important Dependencies](#markdown-header-important-dependencies)
* [🙌🏼 Adding Banners](#markdown-header-adding-banners)
* [🏷 Versioning](#markdown-header-versioning)
* [📜 Authors](#markdown-header-authors)
* [📄 License](#markdown-header-license)
* [📯 Acknowledgments](#markdown-header-acknowledgments)

## 💼 Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
how to deploy the project on a live system.

### 📚 Prerequisites

What things you need to install the software and how to install them

* Node v10+
* NPM v6+

### 📲 Installing

To install the project, clone and build the repo, then use `npm` to install
dependencies for each package.

```bash
git clone git@bitbucket.org:rob.hameetman.git
cd packages/eslint-config
npm i
```

## 🛥 Deployment

Each package is versioned and deployed independently with `npm`:

```bash
npm version patch
npm publish
```

## 🧾 Project Dependencies

* [TypeScript](https://www.typescriptlang.org/) - Implementation language
* [NPM](https://www.npmjs.com/) - Dependency Management

## 🏷 Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository](https://github.com/RobHameetman/packages/tags/).

## 📜 Authors

* **Robert Hameetman** - *<engineering@robhameetman.com>*

See also the list of [contributors](https://github.com/RobHameetman/packages/graphs/contributors) who participated in this project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

[logo]: /.github/readme-create-hire.png "@rob.hameetman/create-hire"
