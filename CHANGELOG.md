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
