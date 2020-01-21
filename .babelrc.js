module.exports = {
  "presets": [
    [
      "@babel/env",
      {
        "corejs": "3",
        "useBuiltIns": "usage",
        "targets": [
          "last 3 chrome version",
          "last 3 firefox version"
        ],
        "modules": false
      }
    ],
    [
      "@babel/preset-react"
    ]
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": false }],
    "@babel/plugin-proposal-throw-expressions"
  ]
}
