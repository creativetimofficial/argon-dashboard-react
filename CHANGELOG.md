## [1.2.0] 2021-01-26
### Bug fixing
- https://github.com/creativetimofficial/argon-dashboard-react/pull/38
- https://github.com/creativetimofficial/argon-dashboard-react/pull/33
- https://github.com/creativetimofficial/argon-dashboard-react/issues/29
- https://github.com/creativetimofficial/argon-dashboard-react/issues/23
### Major style changes
- Moved all `src/scss/argon-dashboard/bootstrap` files to `node_modules/bootstrap`
### Deleted components
### Added components
### Deleted dependencies
- @types/googlemaps (we'll use simple Google Maps API with Vanilla JS instead)
- @types/markerclustererplus (we'll use simple Google Maps API with Vanilla JS instead)
- @types/react (we'll use simple Google Maps API with Vanilla JS instead)
- react-google-maps (we'll use simple Google Maps API with Vanilla JS instead)
### Added dependencies
+ bootstrap@4.6.0 (so that we can easily update bootstrap version)
+ jquery@3.5.1 (since bootstrap requires it - we are not using, we are only using bootstrap scss)
+ node-sass-package-importer@5.3.2 (so that we can import bootstrap scss from `node_modules`)
### Updated dependencies
```
@fortawesome/fontawesome-free    5.12.1   →   5.15.2
chart.js                          2.9.3   →    2.9.4
moment                           2.24.0   →   2.29.1
node-sass                        4.13.1   →   4.14.1
nouislider                       14.1.1   →   14.6.3
react                           16.12.0   →   17.0.1
react-chartjs-2                   2.9.0   →   2.11.1
react-copy-to-clipboard           5.0.2   →    5.0.3
react-datetime                   2.16.3   →    3.0.4
react-dom                       16.12.0   →   17.0.1
react-router-dom                  5.1.2   →    5.2.0
react-scripts                    ^3.4.0   →    4.0.1
reactstrap                        8.4.1   →    8.9.0
eslint-plugin-flowtype           3.13.0   →    5.2.0
typescript                        3.7.5   →    4.1.3
```
### Warning
**The TypeScript and jQuery dependencies are installed only to stop console warnings on install. They are not actually used in our product. So the product is not based on TypeScript or jQuery!**
_The following warnings will appear when running the installation command, but they do not affect the UI or the functionality of the product (they will be solved in our next update):_
```
npm WARN react-datetime@3.0.4 requires a peer of react@^16.5.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-popper@1.3.7 requires a peer of react@0.14.x || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN create-react-context@0.3.0 requires a peer of react@^0.14.0 || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
```
_If they will persist in our 2.*.* version, we will drop their usages and replace them with other plugins._
_In development mode, some of the above plugins will throw a warning because they still use React v16 syntax. If the error will persist in our 2.*.* version, we will drop their usage and replace them with other plugins._

## [1.1.0] 2020-02-10
### Bug fixing
- https://github.com/creativetimofficial/argon-dashboard-react/issues/18 (Added this in live docs, we need for our product to have a homepage prop inside the package.json. If build is not working, just delete the homepage prop from inside the package.json, or configure it to your own specs.)
- https://github.com/creativetimofficial/argon-dashboard-react/issues/17
- https://github.com/creativetimofficial/argon-dashboard-react/issues/15
- https://github.com/creativetimofficial/argon-dashboard-react/issues/12
- https://github.com/creativetimofficial/argon-dashboard-react/issues/3
- Changed `componentWillMount` with `constructor` function inside `src/views/Index.js` (this was for initializing the charts)
### Major style changes
- Changed the whole `src/assets/scss/*` folder
- Changed the whole `src/assets/css/*` folder
### Deleted components
### Added components
### Deleted dependencies
### Added dependencies
+ eslint-plugin-flowtype@3.13.0 (To stop following Warning: `npm **WARN** eslint-config-react-app@5.2.0 requires a peer of eslint-plugin-flowtype@3.x but none is installed. You must install peer dependencies yourself.`)
+ @fortawesome/fontawesome-free@5.12.1 (Easier to maintain as a dependency, rather than having to download new versions)
+ gulp@4.0.2 (For licenses copyrights)
+ gulp-append-prepend@1.0.8 (For licenses copyrights)
### Updated dependencies
```
chart.js                     2.7.3   →     2.9.3
node-sass                   4.11.0   →    4.13.1
nouislider                  13.1.1   →    14.1.1
react                       16.8.4   →   16.12.0
react-chartjs-2              2.7.4   →     2.9.0
react-copy-to-clipboard      5.0.1   →     5.0.2
react-dom                   16.8.4   →   16.12.0
react-router-dom             4.3.1   →     5.1.2
react-scripts                2.1.8   →     3.3.1
reactstrap                   7.1.0   →     8.4.1
@types/googlemaps          3.30.18   →    3.39.2
@types/react                16.8.7   →   16.9.19
typescript                3.3.3333   →     3.7.5
```
### Warning
** The following warnings could not be solved, due to some of our dependencies, however, they do not affect the functionality or the UI of the product: **
```
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
npm WARN deprecated popper.js@1.16.1: Popper changed home, find its new releases at @popperjs/core
```
** The following warning could not be solved due to the usage of `react-google-maps` (Note: if the warning will persist after React changes version to 17, we'll drop the support for `react-google-maps` and replace them with other react library for maps):**
```
backend.js:6 Warning: componentWillMount has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.

Please update the following components: withScriptjs(withGoogleMap(Component))
```

## [1.0.0] 2019-03-13
### Original Release
- Added Reactstrap as base framework
- Added design from Argon Dashboard by Creative Tim
