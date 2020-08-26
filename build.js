'use strict'

const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.green('        ⬢  ') + chalk.white('Shigeki Tanaka'),
  handle: chalk.white('chanshige (bell)'),
  work: chalk.white('Software Developer at Karabiner.inc'),
  // opensource: chalk.white('Node.js Community Committee ') + chalk.green('⬢'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('chanshige'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~chanshige'),
  github: chalk.gray('https://github.com/') + chalk.green('chanshige'),
  facebook: chalk.gray('https://www.facebook.com/') + chalk.blue('shigeki.tanaka72'),
  web: chalk.cyan('https://shigeki.jp/'),
  npx: chalk.red('npx') + ' ' + chalk.white('chanshige'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelNpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelFacebook: chalk.white.bold('   Facebook:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
// const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelNpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const facebooking = `${data.labelFacebook}  ${data.facebook}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
  newline + newline + // Add one whole blank line
  working + newline + // data.labelWork + data.work
  // opensourcing + newline + newline + // data.labelOpenSource + data.opensource
  twittering + newline + // data.labelTwitter + data.twitter
  npming + newline + // data.labelnpm + data.npm
  githubing + newline + // data.labelGitHub + data.github
  facebooking + newline + // data.labelFacebook + data.facebook
  webing + newline + newline + // data.labelWeb + data.web
  carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
