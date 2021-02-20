const withMDX = require('@next/mdx')()
const withTM = require('next-transpile-modules')(['react-spring'])
module.exports = withTM(withMDX())