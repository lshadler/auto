# v10.6.0 (Mon Jan 11 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, Andrew Leedham ([@AndrewLeedham](https://github.com/AndrewLeedham)), for all your work!

#### 🚀 Enhancement

- feat: tag canaries for cocoapods plugin [#1702](https://github.com/intuit/auto/pull/1702) ([@hborawski](https://github.com/hborawski))

#### 🐛 Bug Fix

- fix npm plugin git tag splitting [#1705](https://github.com/intuit/auto/pull/1705) ([@AndrewLeedham](https://github.com/AndrewLeedham))

#### Authors: 2

- Andrew Leedham ([@AndrewLeedham](https://github.com/AndrewLeedham))
- Harris Borawski ([@hborawski](https://github.com/hborawski))

---

# v10.5.1 (Fri Jan 08 2021)

#### 🔩 Dependency Updates

- Bump @atomist/slack-messages from 1.2.0 to 1.2.1 [#1676](https://github.com/intuit/auto/pull/1676) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]) [@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump eslint-plugin-prettier from 3.1.4 to 3.3.0 [#1691](https://github.com/intuit/auto/pull/1691) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @fortawesome/fontawesome-svg-core from 1.2.30 to 1.2.32 [#1685](https://github.com/intuit/auto/pull/1685) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint from 7.12.1 to 7.16.0 [#1697](https://github.com/intuit/auto/pull/1697) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- [Security] Bump node-notifier from 8.0.0 to 8.0.1 [#1695](https://github.com/intuit/auto/pull/1695) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- [Security] Bump ini from 1.3.5 to 1.3.8 [#1689](https://github.com/intuit/auto/pull/1689) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump lint-staged from 10.5.2 to 10.5.3 [#1686](https://github.com/intuit/auto/pull/1686) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump array.prototype.flatmap from 1.2.3 to 1.2.4 [#1681](https://github.com/intuit/auto/pull/1681) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint-plugin-jest from 24.1.0 to 24.1.3 [#1680](https://github.com/intuit/auto/pull/1680) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 2

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v10.4.2 (Mon Nov 23 2020)

#### 🐛 Bug Fix

- Improve release notes section rendering in npm monorepos [#1664](https://github.com/intuit/auto/pull/1664) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### 🏠 Internal

- fix url pr-check uses for auto's CI [#1663](https://github.com/intuit/auto/pull/1663) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v10.2.5 (Fri Nov 06 2020)

### Release Notes

_From #1636_

Previously when using `auto pr-check` you would have to check that you were running the command from a PR with bash scripting so it didn't fail when running on master.

This PR simplifies this workflow so that you can run `auto pr-check` without any logic. On CI + base branch `pr-check` will exit successfully, otherwise it will check for a PR number and fail accordingly.

## Why

Less config + more automation = happy `auto` consumers

Todo:

- [ ] Add tests
- [ ] Add docs

## Change Type

Indicate the type of change your pull request is:

- [ ] `documentation`
- [x] `patch`
- [ ] `minor`
- [ ] `major`

---

#### 🐛 Bug Fix

- improve pr-check usage + don't fail on runs in CI base branch [#1636](https://github.com/intuit/auto/pull/1636) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v10.2.4 (Fri Nov 06 2020)

#### 🐛 Bug Fix

- Truncate commit hash for shorter canary versions [#1635](https://github.com/intuit/auto/pull/1635) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v10.2.3 (Wed Nov 04 2020)

#### 🐛 Bug Fix

- add timeout when verifying auth to remote [#1632](https://github.com/intuit/auto/pull/1632) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v10.1.0 (Mon Nov 02 2020)

#### 🚀 Enhancement

- feat: add ssh support for connecting to github [#1590](https://github.com/intuit/auto/pull/1590) ([@tinytim84](https://github.com/tinytim84) [@hipstersmoothie](https://github.com/hipstersmoothie))

#### 🐛 Bug Fix

- Fix non-ssh release [#1629](https://github.com/intuit/auto/pull/1629) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 2

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Tim Ottewell ([@tinytim84](https://github.com/tinytim84))

---

# v10.0.2 (Thu Oct 29 2020)

#### 🐛 Bug Fix

- make version, afterVersion, publish, and afterPublish series hooks [#1620](https://github.com/intuit/auto/pull/1620) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v10.0.0 (Thu Oct 29 2020)

#### 🐛 Bug Fix


#### 🔩 Dependency Updates

- Bump eslint-config-prettier from 6.13.0 to 6.14.0 [#1610](https://github.com/intuit/auto/pull/1610) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint-plugin-import from 2.22.0 to 2.22.1 [#1611](https://github.com/intuit/auto/pull/1611) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint-plugin-jest from 24.0.2 to 24.1.0 [#1612](https://github.com/intuit/auto/pull/1612) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint from 7.9.0 to 7.12.1 [#1613](https://github.com/intuit/auto/pull/1613) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @typescript-eslint/eslint-plugin from 4.5.0 to 4.6.0 [#1614](https://github.com/intuit/auto/pull/1614) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump file-type from 15.0.1 to 16.0.0 [#1616](https://github.com/intuit/auto/pull/1616) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 2

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.59.0 (Wed Oct 14 2020)

#### 🚀 Enhancement

- Group monorepo changelog lines if possivle [#1589](https://github.com/intuit/auto/pull/1589) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.54.5 (Tue Oct 06 2020)

#### 🐛 Bug Fix

- add invalid-email-address to botlist [#1569](https://github.com/intuit/auto/pull/1569) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.54.0 (Thu Oct 01 2020)

#### 🔩 Dependency Updates

- Bump @types/jest from 26.0.10 to 26.0.13 [#1516](https://github.com/intuit/auto/pull/1516) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v9.50.9 (Fri Aug 14 2020)

#### 🐛 Bug Fix

- Fix label initialization [#1473](https://github.com/intuit/auto/pull/1473) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.50.8 (Fri Aug 14 2020)

#### 🐛 Bug Fix

- correct behavior for lerna project with private packages [#1472](https://github.com/intuit/auto/pull/1472) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.50.7 (Fri Aug 14 2020)

#### 🐛 Bug Fix

- fix default bump type [#1470](https://github.com/intuit/auto/pull/1470) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.50.4 (Thu Aug 13 2020)

#### 📝 Documentation

- Improve package manager plugin docs [#1465](https://github.com/intuit/auto/pull/1465) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.50.2 (Tue Aug 11 2020)

#### 🐛 Bug Fix

- Fix finding available canary version and add logging [#1460](https://github.com/intuit/auto/pull/1460) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.49.5 (Thu Aug 06 2020)

#### 🐛 Bug Fix

- upgrade eslint + ensure all imported packages are in package.json [#1442](https://github.com/intuit/auto/pull/1442) ([@hipstersmoothie](https://github.com/hipstersmoothie))
- upgrade eslint + ensure all imported packages are in package.json ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### 🔩 Dependency Updates

- Bump jest from 26.1.0 to 26.2.2 [#1431](https://github.com/intuit/auto/pull/1431) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 2

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.49.3 (Fri Jul 31 2020)

#### 🐛 Bug Fix

- Fix various rate limiting issues [#1424](https://github.com/intuit/auto/pull/1424) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.49.1 (Wed Jul 29 2020)

#### 🐛 Bug Fix

- don't leak GH_TOKEN in exec promise output [#1419](https://github.com/intuit/auto/pull/1419) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.47.2 (Wed Jul 22 2020)

#### 🔩 Dependency Updates

- Bump eslint-plugin-jsdoc from 28.6.1 to 30.0.2 [#1385](https://github.com/intuit/auto/pull/1385) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]) [@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump @octokit/rest from 18.0.0 to 18.0.1 [#1390](https://github.com/intuit/auto/pull/1390) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]) [@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump ts-jest from 25.5.1 to 26.1.3 [#1392](https://github.com/intuit/auto/pull/1392) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @octokit/graphql from 4.5.1 to 4.5.2 [#1391](https://github.com/intuit/auto/pull/1391) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump pkg from 4.4.8 to 4.4.9 [#1389](https://github.com/intuit/auto/pull/1389) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump fp-ts from 2.6.1 to 2.7.0 [#1388](https://github.com/intuit/auto/pull/1388) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump fromentries from 1.2.0 to 1.2.1 [#1387](https://github.com/intuit/auto/pull/1387) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint-plugin-import from 2.21.1 to 2.22.0 [#1386](https://github.com/intuit/auto/pull/1386) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @fortawesome/free-solid-svg-icons from 5.13.0 to 5.14.0 [#1384](https://github.com/intuit/auto/pull/1384) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 2

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.41.1 (Mon Jul 06 2020)

#### 🐛 Bug Fix

- attempt to construct the GitHub graphql root API endpoint if githubApi is provided [#1349](https://github.com/intuit/auto/pull/1349) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.40.3 (Wed Jun 24 2020)

#### 🐛 Bug Fix

- Correct some license issues and ignore snyk bot [#1321](https://github.com/intuit/auto/pull/1321) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.40.2 (Wed Jun 24 2020)

#### 🔩 Dependency Updates

- Bump @octokit/plugin-retry from 3.0.1 to 3.0.3 [#1304](https://github.com/intuit/auto/pull/1304) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @octokit/plugin-throttling from 3.2.1 to 3.2.2 [#1309](https://github.com/intuit/auto/pull/1309) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint-plugin-jsdoc from 25.4.2 to 27.0.7 [#1311](https://github.com/intuit/auto/pull/1311) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump lint-staged from 10.2.6 to 10.2.11 [#1314](https://github.com/intuit/auto/pull/1314) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump all-contributors-cli from 6.15.0 to 6.16.0 [#1306](https://github.com/intuit/auto/pull/1306) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump type-fest from 0.15.0 to 0.15.1 [#1307](https://github.com/intuit/auto/pull/1307) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump chalk from 4.0.0 to 4.1.0 [#1310](https://github.com/intuit/auto/pull/1310) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint-plugin-prettier from 3.1.3 to 3.1.4 [#1305](https://github.com/intuit/auto/pull/1305) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v9.40.1 (Wed Jun 24 2020)

:tada: This release contains work from a new contributor! :tada:

Thank you, Snyk bot ([@snyk-bot](https://github.com/snyk-bot)), for all your work!

#### 🐛 Bug Fix

- Update makeRelease to support 'from' and 'useVersion' options with build part of semver [#1315](https://github.com/intuit/auto/pull/1315) ([@bnigh](https://github.com/bnigh))

#### 🔩 Dependency Updates

- [Snyk] Fix for 1 vulnerabilities [#1316](https://github.com/intuit/auto/pull/1316) ([@snyk-bot](https://github.com/snyk-bot))

#### Authors: 2

- [@bnigh](https://github.com/bnigh)
- Snyk bot ([@snyk-bot](https://github.com/snyk-bot))

---

# v9.40.0 (Wed Jun 24 2020)

### Release Notes

_From #1295_

This release removes the requirement for the `Maven Release Plugin` from maven projects. This is a breaking change but that maven plugin was quite experimental. This PR makes it a full featured `auto` experience. 

## Remove requirement for "maven-release-plugin" and other improvements

1. Remove requirement for "maven-release-plugin".
2. Support recursive changes to all `pom.xml` files in the project, with the following assumptions:
  a. The project is a multi-module project.
  b. The parent `pom.xml` file is located in the root directory of the repo.
  c. The parent `pom.xml` contains the version.
  d. Sub-modules have the same version as the parent `pom.xml`.
3. Support plugin options, with environment variable overrides:
  a. `MAVEN_COMMAND || mavenCommand` - the path to the maven executable to use. Defaults to `/usr/bin/mvn`.
  b. `MAVEN_OPTIONS || mavenOptions` - an array of arbitrary maven options, e.g. `-DskipTests -P some-profile`. No defaults.
  c. `MAVEN_RELEASE_GOALS || mavenReleaseGoals` - an array of maven goals to run when publishing. Defaults to `["deploy", "site-deploy"]`.
  d. `MAVEN_SETTINGS || mavenSettings` - the path to the maven settings file. No defaults.

**NOTE:** The `MAVEN_USERNAME` and `MAVEN_PASSWORD` environment variables are still supported, and have their counterparts as configuration options, but should are deprecated, and will be removed in a later release. This is because `MAVEN_SETTINGS` or `MAVEN_OPTIONS` can do the same work, but provide a much more flexible solution.

## Support both "versions-maven-plugin" and auto-native DOM/XML

`auto` will detect if the parent `pom.xml` file has the `versions-maven-plugin` configured, and if so, use it to set the version on the parent and all child `pom.xml` files. If not, then auto will modify the parent and all child `pom.xml` files using a DOM parser and XML serializer. This has the effect of losing formatting. Therefore it then runs the serialized XML through the `prettier` "html" pretty-printer.

This means that if the `versions-maven-plugin` isn't available, the `pom.xml` files will be pretty-printed using the `prettier` formatter with the following default settings:

* `printWidth: 120` (configurable - see below)
* `tabWidth: 4` (configurable - see below)
* `parser: "html"`

---

#### 🚀 Enhancement

- Remove maven release plugin requirement [#1295](https://github.com/intuit/auto/pull/1295) ([@rbellamy](https://github.com/rbellamy) [@hipstersmoothie](https://github.com/hipstersmoothie))

#### 🐛 Bug Fix

- fix tests ([@hipstersmoothie](https://github.com/hipstersmoothie))
- switch to next-ignite ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### 📝 Documentation

- switch to next-ignite [#1293](https://github.com/intuit/auto/pull/1293) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 2

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
- G. Richard Bellamy ([@rbellamy](https://github.com/rbellamy))

---

# v9.39.0 (Thu Jun 04 2020)

#### 🐛 Bug Fix

- fix automated old branch creation [#1278](https://github.com/intuit/auto/pull/1278) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.36.4 (Thu May 28 2020)

:tada: This release contains work from a new contributor! :tada:

Thank you, Marty Henderson ([@10hendersonm](https://github.com/10hendersonm)), for all your work!

#### 🐛 Bug Fix

- fix(git): Prevents getLastTagNotInBaseBranch from returning a commit hash [#1262](https://github.com/intuit/auto/pull/1262) ([@10hendersonm](https://github.com/10hendersonm))

#### Authors: 1

- Marty Henderson ([@10hendersonm](https://github.com/10hendersonm))

---

# v9.36.1 (Fri May 22 2020)

#### 🐛 Bug Fix

- fix reduce without initial value [#1249](https://github.com/intuit/auto/pull/1249) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.35.3 (Fri May 22 2020)

#### 🐛 Bug Fix

- Changelog formatting [#1246](https://github.com/intuit/auto/pull/1246) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.35.2 (Fri May 22 2020)

:tada: This release contains work from a new contributor! :tada:

Thank you, Kevin Wolf ([@kevinwolfdev](https://github.com/kevinwolfdev)), for all your work!

#### 🐛 Bug Fix

- Merge branch 'master' into extend-default-labels ([@kevinwolfdev](https://github.com/kevinwolfdev))

#### Authors: 1

- Kevin Wolf ([@kevinwolfdev](https://github.com/kevinwolfdev))

---

# v9.34.0 (Tue May 19 2020)

#### 🔩 Dependency Updates

- Bump lerna from 3.20.2 to 3.21.0 [#1232](https://github.com/intuit/auto/pull/1232) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump io-ts from 2.2.1 to 2.2.2 [#1231](https://github.com/intuit/auto/pull/1231) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @typescript-eslint/parser from 2.31.0 to 2.34.0 [#1230](https://github.com/intuit/auto/pull/1230) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint-plugin-jsdoc from 25.2.0 to 25.4.2 [#1229](https://github.com/intuit/auto/pull/1229) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint-plugin-jest from 23.9.0 to 23.13.1 [#1228](https://github.com/intuit/auto/pull/1228) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### 🏠 Internal

- add test that ensure bundled auto still works [#1226](https://github.com/intuit/auto/pull/1226) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 2

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.33.0 (Mon May 18 2020)

#### 🔩 Dependency Updates

- Bump eslint-plugin-jsdoc from 24.0.0 to 25.2.0 [#1211](https://github.com/intuit/auto/pull/1211) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]) [@hipstersmoothie](https://github.com/hipstersmoothie))
- [Security] Bump handlebars from 4.5.3 to 4.7.6 [#1213](https://github.com/intuit/auto/pull/1213) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 2

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.32.1 (Fri May 15 2020)

:tada: This release contains work from a new contributor! :tada:

Thank you, Till Weisser ([@whynotzoidberg](https://github.com/whynotzoidberg)), for all your work!

#### 🐛 Bug Fix

- Increase gitlog maximum buffer size to Infinity [#1212](https://github.com/intuit/auto/pull/1212) ([@whynotzoidberg](https://github.com/whynotzoidberg))

#### 🔩 Dependency Updates

- Bump fp-ts from 2.5.4 to 2.6.0 [#1209](https://github.com/intuit/auto/pull/1209) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump ts-jest from 25.4.0 to 25.5.1 [#1208](https://github.com/intuit/auto/pull/1208) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 2

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Till Weisser ([@whynotzoidberg](https://github.com/whynotzoidberg))

---

# v9.31.2 (Mon May 11 2020)

#### 🔩 Dependency Updates

- Bump @typescript-eslint/parser from 2.27.0 to 2.31.0 [#1198](https://github.com/intuit/auto/pull/1198) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint-config-prettier from 6.10.1 to 6.11.0 [#1197](https://github.com/intuit/auto/pull/1197) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump jest from 25.4.0 to 25.5.4 [#1196](https://github.com/intuit/auto/pull/1196) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint-plugin-jest from 23.8.2 to 23.9.0 [#1195](https://github.com/intuit/auto/pull/1195) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @typescript-eslint/eslint-plugin from 2.27.0 to 2.31.0 [#1199](https://github.com/intuit/auto/pull/1199) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump semver from 7.2.2 to 7.3.2 [#1200](https://github.com/intuit/auto/pull/1200) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump pkg from 4.4.7 to 4.4.8 [#1201](https://github.com/intuit/auto/pull/1201) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump file-type from 14.2.0 to 14.3.0 [#1202](https://github.com/intuit/auto/pull/1202) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump prettier from 2.0.4 to 2.0.5 [#1203](https://github.com/intuit/auto/pull/1203) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v9.30.4 (Sat May 02 2020)

#### 🔩 Dependency Updates

- Bump log-symbols from 3.0.0 to 4.0.0 [#1178](https://github.com/intuit/auto/pull/1178) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump jest from 25.1.0 to 25.4.0 [#1183](https://github.com/intuit/auto/pull/1183) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node-fetch from 2.5.5 to 2.5.7 [#1182](https://github.com/intuit/auto/pull/1182) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump file-type from 14.1.4 to 14.2.0 [#1181](https://github.com/intuit/auto/pull/1181) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump ts-jest from 25.3.0 to 25.4.0 [#1180](https://github.com/intuit/auto/pull/1180) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump lint-staged from 10.1.6 to 10.1.7 [#1179](https://github.com/intuit/auto/pull/1179) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump all-contributors-cli from 6.14.1 to 6.14.2 [#1177](https://github.com/intuit/auto/pull/1177) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/node from 13.11.0 to 13.13.4 [#1176](https://github.com/intuit/auto/pull/1176) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump fp-ts from 2.5.3 to 2.5.4 [#1175](https://github.com/intuit/auto/pull/1175) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v9.30.0 (Wed Apr 22 2020)

#### 🔩 Dependency Updates

- Bump lint-staged from 10.0.8 to 10.1.6 [#1167](https://github.com/intuit/auto/pull/1167) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @fortawesome/free-solid-svg-icons from 5.12.1 to 5.13.0 [#1169](https://github.com/intuit/auto/pull/1169) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump @types/signale from 1.4.0 to 1.4.1 [#1168](https://github.com/intuit/auto/pull/1168) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump endent from 1.4.1 to 2.0.1 [#1166](https://github.com/intuit/auto/pull/1166) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint-plugin-prettier from 3.1.2 to 3.1.3 [#1165](https://github.com/intuit/auto/pull/1165) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint-plugin-import from 2.20.1 to 2.20.2 [#1164](https://github.com/intuit/auto/pull/1164) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump io-ts from 2.1.2 to 2.2.1 [#1163](https://github.com/intuit/auto/pull/1163) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- Bump eslint-plugin-jsdoc from 22.1.0 to 24.0.0 [#1162](https://github.com/intuit/auto/pull/1162) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v9.28.3 (Mon Apr 20 2020)

#### 🐛 Bug Fix

- fix quiet flag in npm plugin. was always on [#1161](https://github.com/intuit/auto/pull/1161) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.28.2 (Mon Apr 20 2020)

#### 🐛 Bug Fix

- bug in silent flag [#1160](https://github.com/intuit/auto/pull/1160) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.26.6 (Tue Apr 07 2020)

#### 🐛 Bug Fix

- Next improvements [#1135](https://github.com/intuit/auto/pull/1135) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.21.1 (Fri Mar 27 2020)

#### 🐛 Bug Fix

- Respect Updated PR Titles [#1082](https://github.com/intuit/auto/pull/1082) ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.15.7 (Tue Mar 03 2020)

#### 🐛 Bug Fix

- add license to all sub-packages ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v9.15.0 (Sun Mar 01 2020)

#### 🐛 Bug Fix

- update plugin and autorc docs ([@hipstersmoothie](https://github.com/hipstersmoothie))
- add fp and io-ts as deps ([@hipstersmoothie](https://github.com/hipstersmoothie))
- fix old tests ([@hipstersmoothie](https://github.com/hipstersmoothie))
- add plugin configuration validation ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v8.6.0 (Tue Dec 17 2019)

#### 🐛 Bug Fix

- Bump version to: v8.5.0 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Update CHANGELOG.md \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v8.5.0 (Tue Dec 17 2019)

#### 🐛 Bug Fix

- Bump version to: v8.4.0 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v8.3.0 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v8.2.0 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v8.1.3 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v8.1.2 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v8.1.1 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))

---

# v8.0.0 (Wed Dec 11 2019)

#### 🐛 Bug Fix

- Bump version to: v8.0.0-next.4 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- add tests ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v8.0.0-next.8 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v8.0.0-next.7 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v8.0.0-next.6 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v8.0.0-next.5 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- reset versions ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v8.0.0-next.3 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v8.0.0-next.2 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v8.0.0-next.1 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v8.0.0-next.0 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v7.17.0-next.1 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))
- Bump version to: v7.17.0-next.0 \[skip ci\] ([@hipstersmoothie](https://github.com/hipstersmoothie))

#### Authors: 1

- Andrew Lisowski ([@hipstersmoothie](https://github.com/hipstersmoothie))
