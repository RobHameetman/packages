![@inspire11/banners][logo]

![Version](https://img.shields.io/npm/v/@inspire11/banners)
![Downloads](https://img.shields.io/npm/dt/@inspire11/banners)
![Build](https://img.shields.io/bitbucket/pipelines/inspire11/banners/master)
![License](https://img.shields.io/npm/l/@inspire11/banners)

# 📦 @inspire11/banners

This package is a collection of Inspire11 banners for use in CLI tooling. These banners are difficult to hardcode in JavaScript/TypeScript projects because of how the characters `'`, `"`, and `\`` are used stylistically. Further, we can't just the Node filesystem or dynamic imports because we'll quickly run into errors out in the wild with NPX. This workaround bundles our banners with webpack from from easy-to-manage text files and allows us to reliably add Inspire11 branding to our CLI projects.

1. [💼 Getting Started](#markdown-header-getting-started)
  1.1 [📚 Prerequisites](#markdown-header-prerequisites)
  1.2 [📲 Installing](#markdown-header-installing)
2. [🛠 Testing](#markdown-header-testing)
  2.1 [🔁 E2E](#markdown-header-e2e)
  2.2 [🛁 Static Analysis](#markdown-header-static-analysis)
3. [🛥 Deployment](#markdown-header-deployment)
4. [🧾 Important Dependencies](#markdown-header-important-dependencies)
5. [🙌🏼 Contributing](#markdown-header-contributing)
6. [🏷 Versioning](#markdown-header-versioning)
7. [📜 Authors](#markdown-header-authors)
8. [📄 License](#markdown-header-license)
9. [📯 Acknowledgments](#markdown-header-acknowledgments)

## 💼 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### 📚 Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### 📲 Installing

To install the package, clone and build the repo, then use `npm` to install dependencies.

```bash
git clone git@bitbucket.org:inspire11/banners.git
cd banners
npm i
```

## 🛥 Deployment

To push changes and use new banners, update the package version and publish to NPM:

```bash
git version patch
npm publish --access=public
```

## 🧾 Important Dependencies

* [TypeScript](https://www.typescriptlang.org/) - Implementation language
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Webpack](https://webpack.js.org/) - The build pipeline used
* [Babel](https://babeljs.io/) - JavaScript/TypeScript transpiler

## 🙌🏼 Contributing

To add a banner to this package, create a text file with the format `{{bannerName}}.txt`:

```bash
touch {{bannerName}}.txt
```

You can find ideas for your banner [here](http://patorjk.com/software/taag/#p=testall&f=Graffiti&t=Inspire11), or use your own. Once you've got a banner, add it to `{{bannerName}}.txt`. Then, add the following to `index.ts`:

```TypeScript
import {{bannerName}} from './{{bannerName}}.txt';
```

Webpack uses [`raw-loader`](https://github.com/webpack-contrib/raw-loader) to inject the contents
imported from `{{bannerName}}.txt` into the distributed compiled JavaScript so that we don't have
to read or import `{{bannerName}}.txt` at runtime.

In order to easily access your banner in other projects, you should include at least 3 exports:

* 1 export of the text imported from `'./{{bannerName}}.txt'`
* 1 export of a function which returns the text imported from `'./{{bannerName}}.txt'`
* 1 export of a function which logts the text imported from `'./{{bannerName}}.txt'`

```TypeScript
export const {{bannerName}}Banner: string = {{bannerName}};
export const get{{bannerName}}Banner = (): string => {{bannerName}};
export const log{{bannerName}}Banner = (): void => console.log({{bannerName}});
```

Finally, add these exports to the default export object at the bottom of `index.ts`:

```TypeScript
export default {
  defaultBanner,
  getDefaultBanner,
  logDefaultBanner,
  {{bannerName}}Banner,
  get{{bannerName}}Banner,
  log{{bannerName}}Banner,
};
```

Please read [CONTRIBUTING.md](/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## 🏷 Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## 📜 Authors

* **Robert Hameetman** - *<robert.hameetman@inspire11.com>*

See also the list of [contributors](https://bitbucket.org/inspire11/banners/contributors) who participated in this project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

[logo]: /.bitbucket/logo.png "@inspire11/banners"